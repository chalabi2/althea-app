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
    tokens: string; // or possibly 'number' if it's supposed to be numerical
    commission: string; // or possibly 'number' if it's supposed to be numerical
    missedBlocks: number;
    score: number;
    slashings: number;
    tombstoned: boolean;
    valcons_address: string;
  }
  
  export const MultiStakingModal = ({
    balance,
    account,
    txFeeCheck,
    txStore,
    chainId,
}: MultiStakingModalProps) => {
    const [amount, setAmount] = useState("");
    
    const handleMultiDelegate = () => {
        const delegationDetails = topValidators.map((validator) => ({
            account: account ?? "",
            chainId,
            amount: convertStringToBigNumber(amount, 18).toString(),
            operator: {
                address: validator.operator_address,
                name: validator.moniker,
            },
        }));
      
        stakingMultipleTx(txStore, StakingTransactionType.DELEGATE, delegationDetails);
    };

    const [topValidators, setTopValidators] = useState<ValidatorInfo[]>([]);
    useEffect(() => {
        const fetchTopValidators = async () => {
            const validators = await getTop10Validators("https://althea.api.chandrastation.com");
            setTopValidators(validators);
        };
    
        fetchTopValidators();
    }, []);

    return (
        <StakingModalContainer>
            <Text size="title2" type="title" className="title">
                Multi-Staking
            </Text>
            <div className="desc">
                <div className="amount">
                    <CInput
                        placeholder="Enter amount to delegate to each validator..."
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
                    {topValidators.map((validator) => (
                        <div key={validator.operator_address}>
                            {validator.moniker}
                        </div>
                    ))}
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
  
  const Selected = styled.div`
    width: 100%;
    .react-select-container {
    }
    .react-select__input-container {
      color: var(--primary-color);
    }
  
    .react-select__placeholder {
      filter: grayscale(1);
      padding-left: 4px;
      opacity: 0.5;
      color: var(--primary-color);
    }
    .react-select__control {
      background-color: var(--highlights) !important;
      color: var(--primary-color) !important;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      letter-spacing: -0.03em;
      height: 56px;
  
      &:focus,
      &:hover {
        outline: none;
      }
    }
  
    .react-select__menu {
      backdrop-filter: blur(35px);
      background: var(--base);
      border-radius: 4px;
      /* overflow: visible; */
      color: var(--primary-color) !important;
    }
    .react-select__indicator-separator {
      display: none;
    }
    .react-select__value-container {
      * {
        color: var(--primary-color) !important;
      }
    }
    .react-select__menu-list {
      outline: none;
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding: 0.6rem 0;
      align-items: center;
      color: var(--primary-color) !important;
    }
  
    .react-select__option {
      width: 94%;
      background-color: transparent !important;
      margin: 0.2rem 1rem;
      padding: 0.8rem 0.6rem;
  
      &:hover {
        border-radius: 4px;
        background-color: #ffffff1a !important;
      }
    }
  `;
  