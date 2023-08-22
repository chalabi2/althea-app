import {
  AltheaTransactionType,
  TransactionMessages,
  TransactionState,
} from "global/config/interfaces/transactionTypes";

export const createTransactionMessges = (
  txType: AltheaTransactionType,
  tokenName?: string,
  tokenAmount?: string
): TransactionMessages => {
  const token = tokenName ?? "token";
  const amount = tokenAmount ?? "";
  switch (txType) {
    //GENERAL
    case AltheaTransactionType.ENABLE:
      return {
        short: "enable",
        long: `enable ${token}`,
        pending: `enabling ${token}...`,
        success: `successfully enabled ${token}`,
        error: `unable to enable ${token}`,
      };
    case AltheaTransactionType.CLAIM_REWARDS_LENDING:
    case AltheaTransactionType.CLAIM_REWARDS_STAKING:
      return {
        short: "claim rewards",
        long: "claim rewards",
        pending: "claiming rewards...",
        success: "successfully claimed rewards",
        error: "unable to claim rewards",
      };
    case AltheaTransactionType.WRAP:
      return {
        short: "wrap",
        long: `wrap ${amount + " " + token}`,
        pending: `wrapping ${amount + " " + token}...`,
        success: `successfully wrapped ${amount + " " + token}`,
        error: `unable to wrap ${token}`,
      };
    case AltheaTransactionType.UNWRAP:
      return {
        short: "unwrap",
        long: `unwrap ${amount + " " + token}`,
        pending: `unwrapping ${amount + " " + token}...`,
        success: `successfully unwrapped ${amount + " " + token}`,
        error: `unable to unwrap ${token}`,
      };
    //LENDING
    case AltheaTransactionType.SUPPLY:
      return {
        short: "supply",
        long: `supply ${amount + " " + token}`,
        pending: `supplying ${amount + " " + token}...`,
        success: `successfully supplied ${amount + " " + token}`,
        error: `unable to supply ${token}`,
      };
    case AltheaTransactionType.BORROW:
      return {
        short: "borrow",
        long: `borrow ${amount + " " + token}`,
        pending: `borrowing ${amount + " " + token}...`,
        success: `successfully borrowed ${amount + " " + token}`,
        error: `unable to borrow ${token}`,
      };
    case AltheaTransactionType.REPAY:
      return {
        short: "repay",
        long: `repay ${amount + " " + token}`,
        pending: `repaying ${amount + " " + token}...`,
        success: `successfully repaid ${amount + " " + token}`,
        error: `unable to repay ${token}`,
      };
    case AltheaTransactionType.WITHDRAW:
      return {
        short: "withdraw",
        long: `withdraw ${amount + " " + token}`,
        pending: `withdrawing ${amount + " " + token}...`,
        success: `successfully withdrew ${amount + " " + token}`,
        error: `unable to withdraw ${token}`,
      };
    case AltheaTransactionType.COLLATERALIZE:
      return {
        short: "collateralize",
        long: `collateralize ${token}`,
        pending: `collateralizing ${token}...`,
        success: `successfully collateralized ${token}`,
        error: `unable to collateralize ${token}`,
      };
    case AltheaTransactionType.DECOLLATERLIZE:
      return {
        short: "decollateralize",
        long: `decollateralize ${token}`,
        pending: `decollateralizing ${token}...`,
        success: `successfully decollateralized ${token}`,
        error: `unable to decollateralize ${token}`,
      };
    case AltheaTransactionType.DRIP:
      return {
        short: "drip",
        long: "drip WETH",
        pending: "dripping WETH...",
        success: "successfully dripped WETH",
        error: "unable to drip WETH",
      };
    //LP
    case AltheaTransactionType.ADD_LIQUIDITY:
      return {
        short: "add liquidity",
        long: `add liquidity for ${token}`,
        pending: `adding liquidity for ${token}...`,
        success: `successfully added liquidity for ${token}`,
        error: `unable to add liquidity for ${token}`,
      };
    case AltheaTransactionType.REMOVE_LIQUIDITY:
      return {
        short: "remove liquidity",
        long: `remove liquidity for ${token}`,
        pending: `removing liquidity for ${token}...`,
        success: `successfully removed liquidity for ${token}`,
        error: `unable to remove liquidity for ${token}`,
      };
    //GOVERNANCE
    case AltheaTransactionType.VOTING:
      return {
        short: "vote",
        long: `vote ${token}`,
        pending: `voting ${token}...`,
        success: `successfully voted ${token}`,
        error: `unable to vote ${token}`,
      };
    //STAKING
    case AltheaTransactionType.DELEGATE:
      return {
        short: "delegate",
        long: `delegate ${amount + " ALTHEA"} to ${token}`,
        pending: `delegating ${amount + " ALTHEA"} to ${token}...`,
        success: `successfully delegated ${amount + " ALTHEA"} to ${token}`,
        error: `unable to delegate to ${token}`,
      };
      case AltheaTransactionType.DELEGATE_MULTIPLE:
      return {
        short: "delegate",
        long: `delegate tokens to the validator group`,
        pending: `delegating tokens to the validator group...`,
        success: `successfully delegated your tokens to the validator group`,
        error: `unable to delegate to the validator group`,
      };
    case AltheaTransactionType.UNDELEGATE:
      return {
        short: "undelegate",
        long: `undelegate ${amount + " ALTHEA"} from ${token}`,
        pending: `undelegating ${amount + " ALTHEA"} from ${token}...`,
        success: `successfully ${amount + " ALTHEA"} undelegated from ${token}`,
        error: `unable to undelegate from ${token}`,
      };
      case AltheaTransactionType.UNDELEGATE_MULTIPLE:
      return {
        short: "undelegate",
        long: `undelegate althea from selected validators`,
        pending: `undelegating althea from selected validators...`,
        success: `undelegated althea from selected validators`,
        error: `unable to undelegate from selected validators`,
      };
    case AltheaTransactionType.REDELEGATE:
      return {
        short: "redelegate",
        long: `redelegate ${amount + " ALTHEA"} ${token}`,
        pending: `redelegating ${amount + " ALTHEA"} ${token}...`,
        success: `successfully ${amount + " ALTHEA"} redelegated ${token}`,
        error: `unable to redelegate ${token}`,
      };
    //BRIDGING
    case AltheaTransactionType.SEND_TO_COSMOS:
      return {
        short: "bridge in",
        long: `bridge in ${amount + " " + token}...`,
        pending: `bridging ${amount + " " + token}...`,
        success: `successfully bridged ${amount + " " + token}`,
        error: `unable to bridge ${token}`,
      };
    case AltheaTransactionType.CONVERT_TO_EVM:
      return {
        short: "convert to ERC20",
        long: `convert ${amount + " " + token} to ERC20`,
        pending: `converting ${amount + " " + token}...`,
        success: `successfully converted ${amount + " " + token}`,
        error: `unable to convert ${token}`,
      };
    case AltheaTransactionType.CONVERT_TO_NATIVE:
      return {
        short: "convert to native",
        long: `convert ${amount + " " + token} to native`,
        pending: `converting ${amount + " " + token}...`,
        success: `successfully converted ${amount + " " + token}`,
        error: `unable to convert ${token}`,
      };
    case AltheaTransactionType.IBC_OUT:
    case AltheaTransactionType.OFT_OUT:
      return {
        short: "bridge out",
        long: `bridge out ${amount + " " + token}`,
        pending: `bridging out ${amount + " " + token}...`,
        success: `successfully bridged out ${amount + " " + token}`,
        error: `unable to bridge out ${token}`,
      };
    case AltheaTransactionType.IBC_IN:
    case AltheaTransactionType.OFT_IN:
      return {
        short: "bridge in",
        long: `bridge in ${amount + " " + token}`,
        pending: `bridging in ${amount + " " + token}...`,
        success: `successfully bridged in ${amount + " " + token}`,
        error: `unable to bridge in ${token}`,
      };
    case AltheaTransactionType.OFT_DEPOSIT:
      return {
        short: "deposit",
        long: `deposit ${amount + " " + token} into OFT`,
        pending: `depositing ${amount + " " + token} into OFT...`,
        success: `successfully deposited ${amount + " " + token}`,
        error: `unable to deposit ${token}`,
      };
    case AltheaTransactionType.OFT_WITHDRAW:
      return {
        short: "withdraw",
        long: `withdraw ${amount + " " + token} from OFT`,
        pending: `withdrawing ${amount + " " + token} from OFT...`,
        success: `successfully withdrew ${amount + " " + token}`,
        error: `unable to withdraw ${token}`,
      };
    default:
      return {
        short: "confirm",
        long: "confirm transaction",
        pending: "confirming",
        success: "confirmed",
        error: "unable to confirm",
      };
  }
};
export function getShortTxStatusFromState(state: TransactionState): string {
  switch (state) {
    case "None":
      return "complete";
    case "Mining":
      return "ongoing";
    case "PendingSignature":
      return "signing";
    case "Success":
      return "done";
    case "Exception":
    case "Fail":
      return "error";
    default:
      return "complete";
  }
}
