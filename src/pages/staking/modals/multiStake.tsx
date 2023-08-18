import {
    MasterValidatorProps,
    StakingTransactionType,
    TxFeeBalanceCheck,
    Validator,
  } from "../config/interfaces";
  import { StakingModalContainer } from "../components/Styled";
  import {
    convertStringToBigNumber,
    truncateNumber,
  } from "global/utils/formattingNumbers";
  import { formatEther, parseEther } from "ethers/lib/utils";
  import { BigNumber } from "ethers";
  import { useEffect, useState } from "react";
  import { OutlinedButton, PrimaryButton, Text, UndelegateButton } from "global/packages/src";
  import Select from "react-select";
  import { delegateFee } from "../config/fees";
  import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
  import "react-tabs/style/react-tabs.css";
  import { CInput } from "global/packages/src/components/atoms/Input";
  import styled from "@emotion/styled";
  import CheckBox from "global/components/checkBox";
  import { ConfirmUndelegationModal } from "./confirmUndelegationModal";
  import { TransactionStore } from "global/stores/transactionStore";
  import { stakingMultipleTx, stakingTx } from "../utils/transactions";
  import { getTop10Validators } from "../utils/groupDelegationParams";
  import LoadingComponent from "global/components/loadingComponent";
  import menuImg from "assets/icons/menu.svg";
import ImageButton from "global/components/ImageButton";
  

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

    const handleMultiDelegate = async () => {
      if (!account) {
          console.error("Account is not defined");
          return;
      }
  
      const operators = topValidators.map((validator) => ({
          address: validator.operator_address,
          name: validator.moniker,
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
          } else {
              console.log("Staking transaction added successfully.");
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
            setIsLoading(false);
        };
        
        fetchTopValidators();
    }, []);

    return (
        <StakingModalContainer>
            <Text size="title2" type="title" className="title">
    Multi-Staking
    <ImageButton
              src={menuImg}
              width={27}
              height={27}
              rotateImage={true}
              alt="menu"
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
              />
</Text>
{isDescriptionVisible && (
        <Description>
          Multi Staking is a tool used to send your delegation to a group of random and performant validators below the top ten. The list is based off a ranking system 
          that considers missed blocks, slashings, commission, voting power, and governance participation. 
        </Description>
      )}
            <div className="desc">
                <div className="amount">
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
                <div className="validators-list">
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
        <tr key={validator.operator_address}>
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
</div>
                <PrimaryButton
                    weight="bold"
                    height="big"
                    disabled={!amount || !topValidators.length || !txFeeCheck.delegate}
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
            </div>
        </StakingModalContainer>
    );
};

const Description = styled.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 90%; // This limits the width to 90% of its parent (the modal). Adjust as needed.
  margin-left: auto; // These two lines center the Description box in the modal.
  margin-right: auto;
`;
  
const ValidatorTable = styled.div`
  width: 100%; 
  max-height: 45vh; 
  overflow-y: scroll;

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
`;