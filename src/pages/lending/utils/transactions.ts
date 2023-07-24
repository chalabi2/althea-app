import { BigNumber } from "ethers";
import { UserLMTokenDetails } from "../config/interfaces";
import { cERC20Abi, comptrollerAbi, reservoirAbi } from "global/config/abi";
import {
  AltheaTransactionType,
  EVMTx,
  ExtraProps,
} from "global/config/interfaces/transactionTypes";
import { formatUnits } from "ethers/lib/utils";
import { _enableTx } from "global/stores/transactionUtils";
import { TOKENS } from "global/config/tokenInfo";
import { getAddressesForAltheaNetwork } from "global/utils/getAddressUtils";
import {
  TransactionStore as NewTxStore,
  TxMethod,
} from "global/stores/transactionStore";

//claim rewards needs different inputs, so separate transaction
export async function claimLendingRewardsTx(
  chainId: number | undefined,
  txStore: NewTxStore,
  account: string | undefined,
  comptrollerAddress: string,
  amountToClaim: BigNumber,
  comptrollerBalance: BigNumber
): Promise<boolean> {
  if (!account) {
    txStore.setStatus({ error: "No account found" });
    return false;
  }
  const needDrip = comptrollerBalance.lte(amountToClaim);
  const transactions = [];
  if (needDrip) {
    transactions.push({
      chainId,
      txType: AltheaTransactionType.DRIP,
      address: getAddressesForAltheaNetwork(chainId).Reservoir,
      abi: reservoirAbi,
      method: "drip",
      params: [],
      value: "0",
    });
  }
  transactions.push({
    chainId,
    txType: AltheaTransactionType.CLAIM_REWARDS_LENDING,
    address: comptrollerAddress,
    abi: comptrollerAbi,
    method: "claimComp",
    params: [account],
    value: "0",
    extraDetails: {
      symbol: "WALTHEA",
      icon: TOKENS.altheaMainnet.ALTHEA.icon,
      amount: formatUnits(amountToClaim, 18),
    },
  });
  return await txStore.addTransactionList(transactions, {
    title: "Claim Lending Rewards",
    txListMethod: TxMethod.EVM,
    chainId,
  });
}
//for all lending page txs
export async function lendingMarketTx(
  chainId: number | undefined,
  txStore: NewTxStore,
  txType: AltheaTransactionType,
  cToken: UserLMTokenDetails,
  amount: BigNumber
): Promise<boolean> {
  if (!chainId) {
    txStore.setStatus({ error: "No chainId found" });
    return false;
  }
  const isAlthea = cToken.data.underlying.symbol === "ALTHEA";
  const tokenInfo = {
    symbol: cToken.data.underlying.symbol,
    icon: cToken.data.underlying.icon,
    amount: formatUnits(amount, cToken.data.underlying.decimals),
  };
  const transactions = [];

  switch (txType) {
    case AltheaTransactionType.SUPPLY:
    case AltheaTransactionType.REPAY:
    case AltheaTransactionType.BORROW:
    case AltheaTransactionType.WITHDRAW:
      if (
        (txType === AltheaTransactionType.SUPPLY ||
          txType === AltheaTransactionType.REPAY) &&
        !isAlthea
      ) {
        transactions.push(
          _enableTx(
            chainId,
            cToken.data.underlying.address,
            cToken.data.address,
            amount,
            cToken.allowance,
            tokenInfo
          )
        );
      }
      transactions.push(
        _lendingTx(
          chainId,
          txType,
          cToken.data.address,
          isAlthea,
          amount,
          tokenInfo
        )
      );
      break;
    case AltheaTransactionType.COLLATERALIZE:
    case AltheaTransactionType.DECOLLATERLIZE:
      transactions.push(
        _collateralizeTx(
          chainId,
          getAddressesForAltheaNetwork(chainId).Comptroller,
          cToken.data.address,
          txType === AltheaTransactionType.COLLATERALIZE,
          tokenInfo
        )
      );
      break;
    default:
      //if none of these are true, then not valid for lending market
      return false;
  }
  return await txStore.addTransactionList(transactions, {
    title: txType,
    txListMethod: TxMethod.EVM,
    chainId,
  });
}

/**
 * TRANSACTION CREATORS
 * WILL NOT CHECK FOR VALIDITY OF PARAMS, MUST DO THIS BEFORE USING THESE CONSTRUCTORS
 */

//exported for use in DexLP
export const _lendingTx = (
  chainId: number | undefined,
  txType: AltheaTransactionType,
  cTokenAddress: string,
  isAlthea: boolean,
  //could be a function that returns a promise BigNumber
  amount: BigNumber | (() => Promise<BigNumber>),
  extraDetails?: ExtraProps
): EVMTx => {
  return {
    chainId,
    txType,
    address: cTokenAddress,
    abi: cERC20Abi,
    method: methodFromLMTxType(txType, isAlthea),
    ...paramsAndValueFromLMTxType(txType, isAlthea, amount),
    extraDetails,
  };
};

const _collateralizeTx = (
  chainId: number | undefined,
  comptrollerAddress: string,
  cTokenAddress: string,
  collateralize: boolean,
  extraDetails?: ExtraProps
): EVMTx => {
  return {
    chainId,
    txType: collateralize
      ? AltheaTransactionType.COLLATERALIZE
      : AltheaTransactionType.DECOLLATERLIZE,
    address: comptrollerAddress,
    abi: comptrollerAbi,
    method: collateralize ? "enterMarkets" : "exitMarket",
    params: collateralize ? [[cTokenAddress]] : [cTokenAddress],
    value: "0",
    extraDetails,
  };
};

//functions for determing name and values for LM txs
function methodFromLMTxType(txType: AltheaTransactionType, isAlthea: boolean) {
  switch (txType) {
    case AltheaTransactionType.SUPPLY:
      return isAlthea ? "mint()" : "mint(uint256)";
    case AltheaTransactionType.REPAY:
      return isAlthea ? "repayBorrow()" : "repayBorrow(uint256)";
    case AltheaTransactionType.BORROW:
      return "borrow";
    case AltheaTransactionType.WITHDRAW:
      return "redeem";
    default:
      return "";
  }
}
function paramsAndValueFromLMTxType(
  txType: AltheaTransactionType,
  isAlthea: boolean,
  amount: BigNumber | (() => Promise<BigNumber>)
) {
  switch (txType) {
    case AltheaTransactionType.SUPPLY:
    case AltheaTransactionType.REPAY:
      return isAlthea
        ? { params: [], value: amount }
        : { params: [amount], value: "0" };
    case AltheaTransactionType.BORROW:
    case AltheaTransactionType.WITHDRAW:
      return { params: [amount], value: "0" };
    default:
      return { params: [], value: "0" };
  }
}
