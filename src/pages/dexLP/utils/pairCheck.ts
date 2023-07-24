import { BigNumber, Contract } from "ethers";
import { routerAbi } from "global/config/abi";
import { PAIR } from "../config/interfaces";
import {
  getAltheaNetwork,
  getCurrentProvider,
} from "global/utils/getAddressUtils";

//function returns if pair contains WALTHEA, since we must call a different function for supplying or Withdrawing liquidity
//returns [isToken1Althea, isToken2Althea]
export function checkForAltheaInPair(pair: PAIR, chainId?: number) {
  return [
    isTokenAlthea(pair.token1.address, chainId),
    isTokenAlthea(pair.token2.address),
  ];
}
export function isTokenAlthea(token: string, chainId?: number): boolean {
  const WALTHEA = getAltheaNetwork(chainId).coreContracts.WALTHEA;
  return token == WALTHEA;
}
export async function getExpectedLP(
  chainId: number,
  pair: PAIR,
  amount1: BigNumber,
  amount2: BigNumber
) {
  const provider = getCurrentProvider(chainId);
  const routerAddress = getAltheaNetwork(chainId).coreContracts.Router;
  const RouterContract = new Contract(routerAddress, routerAbi, provider);

  const LPOut = await RouterContract.quoteAddLiquidity(
    pair.token1.address,
    pair.token2.address,
    pair.stable,
    amount1,
    amount2
  );
  return LPOut.liquidity;
}
