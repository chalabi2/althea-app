import { BigNumber, ethers } from "ethers";
import { ERC20Abi } from "global/config/abi";
import { getCurrentProvider } from "../getAddressUtils";
import { Token } from "global/config/interfaces/tokens";

export async function getUserTokenBalances(
  tokens: Token[],
  account: string | undefined,
  chainId: number
) {
  return Promise.all(
    tokens.map(async (token) => ({
      ...token,
      balance: await getTokenBalance(
        account,
        token.address,
        chainId,
        token.isNative
      ),
    }))
  );
}

export async function getTokenBalance(
  account: string | undefined,
  tokenAddress: string,
  chainId?: number,
  useNative = false
) {
  const provider = getCurrentProvider(chainId);
  const nativeBalance =
    useNative && account
      ? await provider.getBalance(account)
      : BigNumber.from(0);

  const tokenContract = new ethers.Contract(tokenAddress, ERC20Abi, provider);
  return account
    ? (await tokenContract.balanceOf(account)).add(nativeBalance)
    : BigNumber.from(0);
}

export async function getAllowance(
  tokenAddress: string,
  account: string,
  spender: string,
  chainId?: number
) {
  const tokenContract = new ethers.Contract(
    tokenAddress,
    ERC20Abi,
    getCurrentProvider(chainId)
  );
  return await tokenContract.allowance(account, spender);
}
