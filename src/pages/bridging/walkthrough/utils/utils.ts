import { formatUnits } from "ethers/lib/utils";
import {
  NativeToken,
  UserNativeToken,
  UserERC20BridgeToken,
} from "pages/bridging/config/bridgingInterfaces";

interface TokenTableProps {
  name: string;
  main: string;
  gBridge: string;
  althea: string;
}
export function formatTokensAmountsbyChain(
  ethTokens: UserERC20BridgeToken[],
  altheaTokens: UserERC20BridgeToken[],
  nativeTokens: UserNativeToken[],
  allConvertCoinTokens: NativeToken[]
): TokenTableProps[] {
  return allConvertCoinTokens.map((token) => {
    const ethToken = ethTokens.find(
      (eTok) =>
        eTok.name == token.name || (token.name == "ETH" && eTok.name == "WETH")
    );
    const ethBalance = ethToken
      ? formatUnits(ethToken.erc20Balance, ethToken.decimals)
      : "-1";
    const nativeToken = nativeTokens.find((cTok) => cTok.name == token.name);
    const bridgeBalance = nativeToken
      ? formatUnits(nativeToken.nativeBalance, nativeToken.decimals)
      : "0.0";
    const altheaToken = altheaTokens.find((cTok) => cTok.name == token.name);
    const evmBalance = altheaToken
      ? formatUnits(altheaToken.erc20Balance, altheaToken.decimals)
      : "0.0";
    return {
      name: token.symbol,
      main: ethBalance,
      gBridge: bridgeBalance,
      althea: evmBalance,
    };
  });
}
