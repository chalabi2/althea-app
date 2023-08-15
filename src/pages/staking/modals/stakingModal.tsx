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
import { useState } from "react";
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
import { stakingTx, stakingMultipleTx } from "../utils/transactions";

interface StakingModalProps {
  validator: MasterValidatorProps;
  allValidators: Validator[];
  balance: BigNumber;
  account?: string;
  txFeeCheck: TxFeeBalanceCheck;
  txStore: TransactionStore;
  chainId: number;
}
interface Operator {
  address: string;
  name: string;
}

export const delegateTransaction = (
  txStore: TransactionStore,
  delegationDetails: {
    account: string;
    chainId: number;
    amount: string;
    multipOperator: Operator[];
    newOperator: {
      address: string;
      name: string;
    };
    operator: {
      address: string;
      name: string;
    };
  }
) => {
  stakingTx(txStore, StakingTransactionType.DELEGATE, delegationDetails);
};


export const StakingModal = ({
  validator,
  allValidators,
  balance,
  account,
  txFeeCheck,
  txStore,
  chainId,
}: StakingModalProps) => {
  const [amount, setAmount] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [newValidator, setNewValidator] = useState<Validator | undefined>();
  const [showUndelegateConfimation, setShowUndelegateConfirmation] =
    useState(false);

  const delegationDetails = {
    account: account ?? "",
    chainId,
    amount: convertStringToBigNumber(amount, 18).toString(),
    multipOperator: [],
    newOperator: {
      address: newValidator?.operator_address ?? "",
      name: newValidator?.description.moniker ?? "",
    },
    operator: {
      address: validator.validator.operator_address,
      name: validator.validator.description.moniker,
    },
  };
  const handleDelegate = () =>
    stakingTx(txStore, StakingTransactionType.DELEGATE, delegationDetails);

  const handleUndelegate = () =>
    stakingTx(txStore, StakingTransactionType.UNDELEGATE, delegationDetails);
  const handleRedelegate = () =>
    stakingTx(txStore, StakingTransactionType.REDELEGATE, delegationDetails);

  return (
    <StakingModalContainer>
      <Text size="title2" type="title" className="title">
        {validator.validator.description.moniker}
      </Text>
      <div className="desc">
        <div
          style={{
            marginBottom: ".5rem",
          }}
        >
          <Text
            size="text2"
            type="text"
            align="left"
            style={{
              padding: "8px 0",
            }}
          >
            {validator.validator.description.details.toLowerCase()}{" "}
          </Text>
        </div>
        <div className="dual-h-row">
          <p className="type">delegation</p>
          <p className="value">
            {formatEther(validator.userDelegations?.balance.amount ?? 0)} althea
          </p>
        </div>
        <div className="dual-h-row">
          <p className="type">available balance</p>
          <p className="value">{truncateNumber(formatEther(balance))} althea</p>
        </div>
        <div className="dual-h-row">
          <p className="type">commission</p>
          <p className="value">
            {(
              Number(validator.validator.commission.commission_rates.rate) * 100
            ).toFixed(2)}{" "}
            %
          </p>
        </div>

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
              <Tab className={"tab"} selectedClassName="tab-selected">
                <Text size="text3" type="text" align="left" bold>
                  redelegate
                </Text>
              </Tab>
            </TabList>

            <TabPanel className="tabPanel">
              <div
                className="amount"
                style={{
                  marginTop: "1rem",
                }}
              >
                <CInput
                  placeholder="enter amount..."
                  value={amount}
                  onChange={(x: { target: { value: any; }; }) => {
                    setAmount(x.target.value);
                  }}
                />
                <button
                  className="max"
                  onClick={() => {
                    //need to subtract the total fee + 1 Althea to make sure the user has enough for gas and left over althea for other transactions
                    const totalFee = BigNumber.from(delegateFee.amount)
                      .add(delegateFee.gas)
                      .add(parseEther("1"));
                    balance.sub(totalFee).lte(0)
                      ? setAmount("0")
                      : setAmount(formatEther(balance.sub(totalFee)));
                  }}
                >
                  max
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
                disabled={
                  !agreed ||
                  Number(amount) == 0 ||
                  isNaN(Number(amount)) ||
                  Number(amount) > Number(formatEther(balance)) ||
                  !txFeeCheck.delegate
                }
                className="btn"
                onClick={handleDelegate}
              >
                delegate
              </PrimaryButton>
              {!txFeeCheck.delegate && (
                <Text type="text" size="text3" style={{ color: "red" }}>
                  not enough funds for delegation fee
                </Text>
              )}
            </TabPanel>
            <TabPanel className="tabPanel">
              <div
                className="amount"
                style={{
                  marginTop: "1rem",
                }}
              >
                <CInput
                  placeholder="enter amount..."
                  value={amount}
                  onChange={(x: { target: { value: any; }; }) => {
                    setAmount(x.target.value);
                  }}
                />
                <button
                  className="max"
                  onClick={() => {
                    setAmount(
                      formatEther(
                        validator.userDelegations?.balance.amount ?? "0"
                      )
                    );
                  }}
                >
                  max
                </button>
              </div>

              <UndelegateButton
                weight="bold"
                height="big"
                className="btn"
                disabled={
                  Number(amount) == 0 ||
                  isNaN(Number(amount)) ||
                  Number(amount) >
                    Number(
                      formatEther(
                        validator.userDelegations?.balance.amount ?? "0"
                      )
                    ) ||
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
                  onUndelegate={handleUndelegate}
                  onCancel={() => setShowUndelegateConfirmation(false)}
                />
              )}
            </TabPanel>
            <TabPanel className="tabPanel">
              <div
                className="amount"
                style={{
                  marginTop: "1rem",
                }}
              >
                <div className="btn-grp">
                  <Selected>
                    <Select
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="choose a validator..."
                      //@ts-ignore
                      options={allValidators.map((val) => {
                        //take out the current validator from the list
                        if (
                          val.description.moniker !=
                          validator.validator.description.moniker
                        ) {
                          return {
                            value: val,
                            label: val.description.moniker,
                          };
                        }
                        return {};
                      })}
                      //@ts-ignore
                      onChange={(val: { value: any; }) => {
                        setNewValidator(val?.value);
                      }}
                    />
                  </Selected>
                </div>
              </div>

              <div className="amount">
                <CInput
                  placeholder="enter amount..."
                  value={amount}
                  onChange={(x: { target: { value: any; }; }) => {
                    setAmount(x.target.value);
                  }}
                />
                <button
                  className="max"
                  onClick={() => {
                    setAmount(
                      formatEther(
                        validator.userDelegations?.balance.amount ?? "0"
                      )
                    );
                  }}
                >
                  max
                </button>
              </div>

              <PrimaryButton
                height="big"
                weight="bold"
                className="btn"
                disabled={
                  Number(amount) == 0 ||
                  isNaN(Number(amount)) ||
                  Number(amount) >
                    Number(
                      formatEther(
                        validator.userDelegations?.balance.amount ?? "0"
                      )
                    ) ||
                  newValidator == undefined ||
                  !txFeeCheck.redelegate
                }
                onClick={() => handleRedelegate()}
              >
                re-delegate
              </PrimaryButton>
              {!txFeeCheck.redelegate && (
                <Text type="text" size="text3" style={{ color: "red" }}>
                  not enough funds for re-delegation fee
                </Text>
              )}
            </TabPanel>
          </Tabs>
        </div>
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
