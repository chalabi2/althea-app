import {
  MasterValidatorProps,
  StakingTransactionType,
  TxFeeBalanceCheck,
  Validator,
} from "../config/interfaces";
import { StakingModalContainer } from "../components/Styled";
import {
  convertStringToBigNumber,
} from "global/utils/formattingNumbers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { PrimaryButton, Text, UndelegateButton } from "global/packages/src";
import { delegateFee } from "../config/fees";
import { CInput } from "global/packages/src/components/atoms/Input";
import styled from "@emotion/styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TransactionStore } from "global/stores/transactionStore";
import { stakingMultipleTx, undelegateMultipleTx } from "../utils/transactions";
import { getTop10Validators } from "../utils/groupDelegationParams";
import LoadingComponent from "global/components/loadingComponent";
import menuImg from "assets/icons/menu.svg";
import ImageButton from "global/components/ImageButton";
import CheckBox from "global/components/checkBox";
import { ConfirmUndelegationModal } from "./confirmUndelegationModal";
import useStaking from "../hooks/useStaking";

import { altheaToEth } from "@althea-net/address-converter"
import { txUndelegateMultiple } from "../utils/transactionHelpers";


interface MultiStakingModalProps {
  allValidators: Validator[];
  balance: BigNumber;
  account?: string;
  txFeeCheck: TxFeeBalanceCheck;
  txStore: TransactionStore;
  chainId: number;
}

interface ValidatorInfo {
  moniker: string;
  operator_address: string;
  tokens: string; 
  commission: string;
  missedBlocks: number;
  score: number;
  slashings: number;
  tombstoned: boolean;
  valcons_address: string;
  trueRank: number;
  isSelected?: boolean;
}

interface SelectedValidator {
  operator_address: string;
  moniker: string;
}

export const MultiStakingModal = ({
  balance,
  account,
  txFeeCheck,
  txStore,
  chainId,
}: MultiStakingModalProps) => {
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showUndelegateConfimation, setShowUndelegateConfirmation] =
  useState(false);
  const { userValidators } = useStaking();
  const [selectedValidators, setSelectedValidators] = useState<{ address: string; amount: string }[]>([]);
  const [selectedTopValidators, setSelectedTopValidators] = useState<SelectedValidator[]>([]); 
  const [isUserValidatorsLoading, setUserValidatorsLoading] = useState(true);
  
  useEffect(() => {

      if (userValidators && userValidators.length > 0) {
          setUserValidatorsLoading(false);
      }
  }, [userValidators]);
  
  const handleValidatorSelection = (delegation: MasterValidatorProps) => {

    const isSelected = selectedValidators.some(val => val.address === delegation.validator.operator_address);
    
    if (isSelected) {

        setSelectedValidators(prevState => prevState.filter(val => val.address !== delegation.validator.operator_address));
    } else {

        setSelectedValidators(prevState => [...prevState, {
            address: delegation.validator.operator_address,
            amount: formatEther(delegation.userDelegations?.balance.amount || '0')
        }]);
    }
};

const handleTopValidatorSelection = (validator: ValidatorInfo) => {
  const isSelected = selectedTopValidators.some(val => val.operator_address === validator.operator_address);

  if (isSelected) {
    setSelectedTopValidators(prev => prev.filter(val => val.operator_address !== validator.operator_address));
  } else {
    setSelectedTopValidators(prev => [...prev, {
      operator_address: validator.operator_address,
      moniker: validator.moniker
    }]);
  }
};

  const handleMultiDelegate = async () => {
    if (!account) {
        console.error("Account is not defined");
        return;
    }

    const operators = selectedTopValidators.map(validator => ({
      address: validator.operator_address,
      name: validator.moniker
    }));



    const delegationDetails = {
        account: account, 
        chainId: chainId,
        amount: convertStringToBigNumber(amount, 18).toString(),
        multipOperator: operators,
        operator: operators[0]
    };
    
    try {
        const success = await stakingMultipleTx(txStore, StakingTransactionType.DELEGATE, delegationDetails);
        if (!success) {
            console.error("Failed to add the staking transaction.");
        }
    } catch (error) {
        console.error("Error while processing staking transaction:", error);
    }
};

  const [topValidators, setTopValidators] = useState<ValidatorInfo[]>([]);
  useEffect(() => {
    const fetchTopValidators = async () => {
        setIsLoading(true);
        const validators = await getTop10Validators("https://althea.api.chandrastation.com");
        setTopValidators(validators);
        setSelectedTopValidators(validators.map(validator => ({ 
          operator_address: validator.operator_address,
          moniker: validator.moniker 
      })));
        setIsLoading(false);
    };
      
    fetchTopValidators();
}, []);
  
    const handleMultiUnelegate = async () => {
      if (!account) {
          console.error("Account is not defined");
          return;
      }
      const toEther = (amount: any) => {
        const etherMultiplier = BigInt(10 ** 18); 
        const [whole, fraction = ""] = String(amount).split(".");
        const wholeEther = BigInt(whole) * etherMultiplier;
        const fractionEther = BigInt(fraction.padEnd(18, "0")); 
        return wholeEther + fractionEther;
    };
    
      const validatorAddresses = selectedValidators.map(validator => validator.address);
      const amounts = selectedValidators.map(validator => toEther(validator.amount).toString());
  
      const undelegationDetails = {
          account: account,
          chainId: chainId,
          validatorAddress: validatorAddresses,
          amount: amounts
      };
      
      
      try {
          const success = await undelegateMultipleTx(txStore, StakingTransactionType.UNDELEGATE, undelegationDetails);
          if (!success) {
              console.error("Failed to add the undelegation transaction.");
          }
      } catch (error) {
          console.error("Error while processing undelegation transaction:", error);
      }
  };
    return (
        <StakingModalContainer>
            <Text size="title2" type="title" className="title">
    Multi-Staking
    <div
    className="menu-btn"
    >
    <ImageButton
              src={menuImg}
              width={27}
              height={27}
              rotateImage={true}
              alt="menu"
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
              />
              </div>
</Text>
<div className="desc">
{isDescriptionVisible && (
        <Description>
          Multi Staking is a tool used to delegate to and withdraw from a group of the most performant validators below the top ten. The list is based off a ranking system 
          that considers missed blocks, slashings, commission, voting power, and governance participation. 
        </Description>
      )}
      
        <div className="group">
          <Tabs
            disabledTabClassName="disabled"
            selectedTabClassName="selected"
            className={"tabs"}
          >
            <TabList className={"tablist"}>
              <Tab className={"tab"} selectedClassName="tab-selected">
                <Text size="text3" type="text" align="left" bold>
                  delegate
                </Text>
              </Tab>
              <Tab className={"tab"} selectedClassName="tab-selected">
                <Text size="text3" type="text" align="left" bold>
                  undelegate
                </Text>
              </Tab>
            </TabList>

            <TabPanel className="tabPanel">
              

    {isLoading ? (
        <>
            <LoadingContainer>
  <LoadingComponent size="md" />
  <span
            >Finidng safest validators...</span>
</LoadingContainer>
            
        </>
    ) : (
        <ValidatorTable>
  <table>
    <thead>
      <tr>
        <th>Validator</th>
        <th>Missed Blocks</th>
        <th>Rank</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
                {topValidators.map((validator) => (
                  <tr
                    key={validator.operator_address}
                    style={{ 
                      cursor: 'pointer',
                      backgroundColor: selectedTopValidators.some(val => val.operator_address === validator.operator_address)
                        ? 'var(--background-color-start)' 
                        : 'var(--base)' 
                    }} 
                    onClick={() => handleTopValidatorSelection(validator)}
                  >
          <td>{validator.moniker}</td>
          <td>{validator.missedBlocks}</td>
          <td>{validator.trueRank}th</td>
          <td>{Number(validator.score).toFixed(4)}</td>
        </tr>
      ))}
    </tbody>
  </table>
</ValidatorTable>

    )}
      <div   className="amount"
               
              >
                    <CInput
                        placeholder="Enter amount to split between validators..."
                        value={amount}
                        onChange={(x) => {
                            setAmount(x.target.value);
                        }}
                    />
                    <button
                        className="max"
                        onClick={() => {
                            const totalFee = BigNumber.from(delegateFee.amount)
                                .add(delegateFee.gas)
                                .add(parseEther("1"));
                            balance.sub(totalFee).lte(0)
                                ? setAmount("0")
                                : setAmount(formatEther(balance.sub(totalFee)));
                        }}
                    >
                        Max
                    </button>
                </div>
<div className="agreement">
                <div>
                  
                  <CheckBox
                    checked={agreed}
                    onChange={(value) => {
                      setAgreed(value);
                    }}
                  />
                </div>
                <Text size="text3" type="text" align="left">
                  staking will lock up your funds for at least 21 days once you
                  undelegate your staked althea, you will need to wait 21 days
                  for your tokens to be liquid
                </Text>
              </div>
                <PrimaryButton
                    weight="bold"
                    height="big"
                    disabled={!agreed || !amount || !topValidators.length || !txFeeCheck.delegate || !selectedTopValidators.length}
                    className="btn"
                    onClick={handleMultiDelegate}
                >
                    Delegate to Multiple Validators
                </PrimaryButton>
                {!txFeeCheck.delegate && (
                    <Text type="text" size="text3" style={{ color: "red" }}>
                        Not enough funds for delegation fee
                    </Text>
                )}

            </TabPanel>
            <TabPanel className="tabPanel">
            {isUserValidatorsLoading ? (
          <LoadingContainer>
            <LoadingComponent size="md" />
            <span>Finding your delegations...</span>
          </LoadingContainer>
        ) : (
          <ValidatorTable>
          <table>
            <thead>
              <tr>
                <th>Validator Address</th> 
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {userValidators.map((delegation) => (  
                <tr 
                  style={{ 
                    cursor: 'pointer',
                    backgroundColor: selectedValidators.some(val => val.address === delegation.validator.operator_address) ? 'var(--background-color-start)' : 'var(--base)' 
                  }} 
                  key={delegation.validator.operator_address} 
                  onClick={() => handleValidatorSelection(delegation)}
                >
                  <td>{delegation.validator.description.moniker}</td>
                  <td>{formatEther(delegation.userDelegations?.balance.amount || '0')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ValidatorTable>
   )}
              <UndelegateButton
                weight="bold"
                height="big"
                className="btn"
                disabled={
                  selectedValidators.length <= 0 ||
                   
                  !txFeeCheck.undelegate
                }
                onClick={() => setShowUndelegateConfirmation(true)}
              >
                undelegate
              </UndelegateButton>
              {!txFeeCheck.undelegate && (
                <Text type="text" size="text3" style={{ color: "red" }}>
                  not enough funds for undelegation fee
                </Text>
              )}
              {showUndelegateConfimation && (
                <ConfirmUndelegationModal
                  onUndelegate={handleMultiUnelegate}
                  onCancel={() => setShowUndelegateConfirmation(false)}
                />
              )}
            </TabPanel>
            </Tabs>
            </div>
            </div>
        </StakingModalContainer>
    );
};

const Description = styled.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 100%; 
  margin-left: auto; 
  margin-right: auto;
`;
  
const ValidatorTable = styled.div`
  width: 100%; 
  max-height: 30vh; 
  overflow-y: scroll;
  margin-top: 16px;
  

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: IBM Plex Sans; 
    color: var(--primary-color);
  }

  thead {
    position: sticky;
    top: 0;
    background-color: var(--base);
    font-family: IBM Plex Sans; 
    color: var(--primary-color);

    th {
      padding: 10px;
      border-bottom: 1px solid var(--highlights);
      text-align: left;
      font-family: IBM Plex Sans; 
      color: var(--primary-color);
    }

    th:nth-of-type(2) {
      text-align: center; 
    }
  }

  tbody {
    tr.selected {
      background-color: var(--primary-color);
    }
    tr {
      &:nth-of-type(even) {
        background-color: var(--base);
        font-family: IBM Plex Sans; 
        color: var(--primary-color);
      }
    }

    td {
      padding: 10px;
      border-bottom: 1px solid var(--highlights);
      font-family: IBM Plex Sans; 
      color: var(--primary-color);
    }

    td:nth-of-type(2) {
      text-align: center;  
    }
  }
`;
const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
font-family: IBM Plex Sans; 
color: var(--primary-color);
span {
  margin-left: 40px;
`;