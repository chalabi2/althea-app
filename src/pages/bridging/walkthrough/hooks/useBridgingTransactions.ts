import { TransactionState, useContractFunction } from "@usedapp/core";
import { BigNumber, Contract, ethers, utils } from "ethers";
import { ERC20Abi, gravityBridgeAbi, wethAbi } from "global/config/abi";
import { convertFee, ibcFee } from "global/config/cosmosConstants";
import { AltheaMainnet, ETHMainnet } from "global/config/networks";
import { useEffect, useState } from "react";
import {
  txConvertCoin,
  txConvertERC20,
} from "../../utils/convertCoin/convertTransactions";
import { checkCosmosTxConfirmation } from "global/utils/altheaTransactions/transactionChecks";
import { txIBCTransfer } from "../../utils/IBC/IBCTransfer";
import { ADDRESSES } from "global/config/addresses";
import { BridgeOutNetworkInfo } from "../config/interfaces";
import { ALTHEA_IBC_NETWORK } from "../config/bridgeOutNetworks";
import { AltheaTransactionType } from "global/config/interfaces/transactionTypes";

const chain = {
  chainId: 417834,
  cosmosChainId: "althea_417834-3",
};
export interface BridgeTransaction {
  state: TransactionState;
  send: (...args: any[]) => Promise<unknown>;
  resetState: () => void;
  txName: string;
  txType: AltheaTransactionType;
}
export interface BridgingTransactionsSelector {
  bridgeIn: {
    approveToken: (tokenAddress: string) => BridgeTransaction;
    sendToCosmos: (
      gravityAddress: string,
      tokenAddress: string,
      altheaAddress: string
    ) => BridgeTransaction;
    sendToCosmosWithWrap: (
      account: string | undefined,
      gravityAddress: string,
      wethAddress: string,
      altheaAddress: string
    ) => BridgeTransaction;
  };
  convertCoin: {
    convertTx: (
      tokenName: string,
      altheaAddress: string,
      convertIn: boolean
    ) => BridgeTransaction;
  };
  bridgeOut: {
    ibcOut: (tokenDenom: string) => BridgeTransaction;
  };
}

export function useBridgingTransactions(): BridgingTransactionsSelector {
  function useApprove(tokenAddress: string) {
    const erc20Interface = new utils.Interface(ERC20Abi);
    const contract = new Contract(tokenAddress, erc20Interface);
    const { state, send, resetState } = useContractFunction(
      contract,
      "approve",
      {
        transactionName: "enable token",
      }
    );
    return {
      state: state.status,
      send: async (amount: string) => {
        send(ADDRESSES.ETHMainnet.GravityBridge, ethers.constants.MaxUint256);
      },
      resetState,
      txName: "approve token",
      txType: AltheaTransactionType.ENABLE,
    };
  }
  function useSendToCosmos(
    gravityAddress: string,
    tokenAddress: string,
    altheaAddress: string
  ) {
    const gBridgeInterface = new utils.Interface(gravityBridgeAbi);
    const contract = new Contract(gravityAddress, gBridgeInterface);
    const { state, send, resetState } = useContractFunction(
      contract,
      "sendToCosmos",
      {
        transactionName: "sending to cosmos",
      }
    );
    return {
      state: state.status,
      send: async (amount: string) => {
        if (ALTHEA_IBC_NETWORK.checkAddress(altheaAddress)) {
          send(tokenAddress, altheaAddress, amount);
        }
      },
      resetState,
      txName: "bridge to althea",
      txType: AltheaTransactionType.CONVERT_TO_EVM,
    };
  }
  function useSendToCosmosWithWrap(
    account: string | undefined,
    gravityAddress: string,
    wethAddress: string,
    altheaAddress: string
  ) {
    const gBridgeInterface = new utils.Interface(gravityBridgeAbi);
    const gBridgeContract = new Contract(gravityAddress, gBridgeInterface);
    const wethInterface = new utils.Interface(wethAbi);
    const wethContract = new Contract(
      wethAddress,
      wethInterface,
      new ethers.providers.JsonRpcProvider(ETHMainnet.rpcUrl)
    );
    const [amount, setAmount] = useState<string>("0");
    const {
      state: cosmosState,
      send: cosmosSend,
      resetState: comsosResetState,
    } = useContractFunction(gBridgeContract, "sendToCosmos", {
      transactionName: "sending to cosmos",
    });
    const {
      state: wrapState,
      send: wrapSend,
      resetState: wrapResetState,
    } = useContractFunction(wethContract, "deposit", {
      transactionName: "wrapping weth",
    });
    useEffect(() => {
      if (
        wrapState.status === "Success" &&
        ALTHEA_IBC_NETWORK.checkAddress(altheaAddress)
      ) {
        cosmosSend(wethAddress, altheaAddress, amount);
      }
    }, [wrapState.status]);
    return {
      state:
        cosmosState.status === "None" ? wrapState.status : cosmosState.status,
      send: async (amount: string) => {
        setAmount(amount);
        const wethBalance = await wethContract.balanceOf(account);
        if (wethBalance.lt(amount)) {
          wrapSend({ value: BigNumber.from(amount).sub(wethBalance) });
        } else {
          if (ALTHEA_IBC_NETWORK.checkAddress(altheaAddress)) {
            cosmosSend(wethAddress, altheaAddress, amount);
          }
        }
      },
      resetState: () => {
        comsosResetState();
        wrapResetState();
      },
      txName: "bridge weth to althea",
      txType:
        cosmosState.status === "None"
          ? AltheaTransactionType.WRAP
          : AltheaTransactionType.BORROW,
    };
  }
  /**
   * @notice If convertIn, tokenName must be its IBC denom
   * @notice If convertOut, tokenName must be its EVM address
   */
  function useConvertCoin(
    tokenName: string,
    altheaAddress: string,
    convertIn: boolean
  ) {
    const [convertState, setConvertState] = useState<TransactionState>("None");
    const send = async (amount: string) => {
      setConvertState("PendingSignature");
      try {
        const tx = convertIn
          ? await txConvertCoin(
              altheaAddress,
              tokenName,
              amount,
              AltheaMainnet.cosmosAPIEndpoint,
              convertFee,
              chain,
              ""
            )
          : await txConvertERC20(
              tokenName,
              amount,
              altheaAddress,
              AltheaMainnet.cosmosAPIEndpoint,
              convertFee,
              chain,
              ""
            );
        setConvertState("Mining");
        const confirmed = await checkCosmosTxConfirmation(
          tx.tx_response.txhash
        );
        setConvertState(confirmed ? "Success" : "Fail");
      } catch {
        setConvertState("Exception");
      }
    };
    const resetState = () => setConvertState("None");

    return {
      state: convertState,
      send,
      resetState,
      txName: convertIn ? "complete bridge in" : "bridge out",
      txType: convertIn
        ? AltheaTransactionType.CONVERT_TO_EVM
        : AltheaTransactionType.CONVERT_TO_NATIVE,
    };
  }
  function useIBCTransfer(tokenDenom: string) {
    const [ibcState, setIbcState] = useState<TransactionState>("None");
    const send = async (
      amount: string,
      cosmosAddress: string,
      bridgeOutNetwork: BridgeOutNetworkInfo
    ) => {
      //check to make sure the address not null
      if (!bridgeOutNetwork.checkAddress(cosmosAddress)) {
        setIbcState("Exception");
        return;
      }
      setIbcState("PendingSignature");
      try {
        const tx = await txIBCTransfer(
          cosmosAddress,
          bridgeOutNetwork.altheaChannel,
          amount,
          tokenDenom,
          AltheaMainnet.cosmosAPIEndpoint,
          bridgeOutNetwork.restEndpoint,
          bridgeOutNetwork.latestBlockEndpoint,
          ibcFee,
          chain,
          ""
        );
        setIbcState("Mining");
        const confirmed = await checkCosmosTxConfirmation(
          tx.tx_response.txhash
        );
        setIbcState(confirmed ? "Success" : "Fail");
      } catch {
        setIbcState("Exception");
      }
    };
    const resetState = () => setIbcState("None");
    return {
      state: ibcState,
      send,
      resetState,
      txName: "complete bridge out",
      txType: AltheaTransactionType.IBC_OUT,
    };
  }

  return {
    bridgeIn: {
      approveToken: useApprove,
      sendToCosmos: useSendToCosmos,
      sendToCosmosWithWrap: useSendToCosmosWithWrap,
    },
    convertCoin: {
      convertTx: useConvertCoin,
    },
    bridgeOut: {
      ibcOut: useIBCTransfer,
    },
  };
}
