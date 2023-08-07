import { useNetworkInfo } from "global/stores/networkInfo";
import { useEffect, useState } from "react";
import {
  IBCTokenTrace,
  UserERC20BridgeToken,
  UserNativeToken,
} from "../config/bridgingInterfaces";
import {
  getNativeAltheaBalances,
  getUnknownIBCTokens,
} from "../utils/nativeBalances";
import { useTokenBalances } from "./tokenBalances/useTokenBalances";
import { useEtherBalance } from "@usedapp/core";
import { getCosmosAPIEndpoint } from "global/utils/getAddressUtils";
import { BigNumber } from "ethers";
import {
  ALTHEA_MAIN_CONVERT_COIN_TOKENS,
  ETH_GRAVITY_BRIDGE_IN_TOKENS,
} from "../config/tokens.ts/bridgingTokens";
import {
  AltheaMainnet,
  AltheaTestnet,
  ETHMainnet,
  onTestnet,
} from "global/config/networks";

interface BridgeTokenInfo {
  userBridgeInTokens: UserERC20BridgeToken[];
  userBridgeOutTokens: UserERC20BridgeToken[];
  userNativeTokens: UserNativeToken[];
  unkownIBCTokens: IBCTokenTrace[];
  ethMainBalance: BigNumber;
}

export function useBridgeTokenInfo(): BridgeTokenInfo {
  const [account, chainId, altheaAddress] = useNetworkInfo((state) => [
    state.account,
    Number(state.chainId),
    state.altheaAddress,
  ]);
  //will use altheaNetwork to get ntive tokens
  const isOnTestnet = onTestnet(chainId);
  const altheaNetwork = isOnTestnet ? AltheaTestnet : AltheaMainnet;

  const ethBalance = useEtherBalance(account, {
    chainId: ETHMainnet.chainId,
  });

  //bridge in erc20 tokens on ETH mainnet
  const userEthBridgeInTokens = useTokenBalances(
    account,
    ETH_GRAVITY_BRIDGE_IN_TOKENS,
    ETHMainnet.chainId,
    ETHMainnet.coreContracts.GravityBridge
  ).tokens.map((token) => {
    return {
      ...token,
      erc20Balance:
        ETHMainnet.coreContracts.WETH === token.address
          ? token.erc20Balance.add(ethBalance ?? BigNumber.from(0))
          : token.erc20Balance,
    };
  });
  //bridge out erc20 tokens on Althea Mainnet
  const { tokens: userAltheaBridgeOutTokens } = useTokenBalances(
    account,
    ALTHEA_MAIN_CONVERT_COIN_TOKENS,
    AltheaMainnet.chainId
  );
  const [userNativeTokens, setUserNativeTokens] = useState<UserNativeToken[]>(
    []
  );

  //these are used for "recover tokens" if unidentified tokens are found
  const [allUnknownIBC, setAllUnknownIBC] = useState<IBCTokenTrace[]>([]);
  async function getAllNativeTokens() {
    const { foundTokens, notFoundTokens } = await getNativeAltheaBalances(
      getCosmosAPIEndpoint(altheaNetwork.chainId),
      altheaAddress,
      isOnTestnet ? [] : ALTHEA_MAIN_CONVERT_COIN_TOKENS
    );
    console.log(foundTokens)
    setUserNativeTokens(foundTokens);
    setAllUnknownIBC(
      await getUnknownIBCTokens(
        notFoundTokens,
        getCosmosAPIEndpoint(altheaNetwork.chainId)
      )
    );
  }

  //initialize data on sign in
  useEffect(() => {
    getAllNativeTokens();
  }, [account, altheaAddress, chainId]);

  //call data per block
  useEffect(() => {
    const interval = setInterval(async () => {
      await getAllNativeTokens();
    }, 6000);
    return () => clearInterval(interval);
  }, [altheaAddress, chainId]);

  return {
    userBridgeInTokens: userEthBridgeInTokens,
    userBridgeOutTokens: userAltheaBridgeOutTokens,
    userNativeTokens: userNativeTokens,
    unkownIBCTokens: allUnknownIBC,
    ethMainBalance: ethBalance ?? BigNumber.from(0),
  };
}
