import { BigNumber, Contract, ContractInterface } from "ethers";
import { checkPubKey } from "global/utils/altheaTransactions/publicKey";
import { getAltheaAddressFromMetaMask } from "global/utils/walletConnect/addAltheaToWallet";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { JsonRpcSigner } from "@ethersproject/providers";

export interface NetworkProps {
  chainId: string | undefined;
  setChainId: (chainId: string | undefined) => void;
  account: string | undefined;
  setAccount: (account: string | undefined) => void;
  signer: JsonRpcSigner | undefined;
  setSigner: (signer: JsonRpcSigner) => void;
  altheaAddress: string;
  hasPubKey: boolean;
  balance: BigNumber;
  setBalance: (balance: BigNumber) => void;
  createContractWithSigner: (
    address: string,
    abi: ContractInterface
  ) => Contract;
}

export const useNetworkInfo = create<NetworkProps>()(
  devtools((set, get) => ({
    chainId: undefined,
    setChainId: (chainId) => set({ chainId: chainId }),
    account: undefined,
    signer: undefined,
    setSigner: (signer) => set({ signer: signer }),
    altheaAddress: "",
    hasPubKey: true,
    setAccount: async (account) => {
      if (account) {
        set({ account: account });
        const altheaAddress = await getAltheaAddressFromMetaMask(
          account,
          Number(get().chainId)
        );
        const hasPubKey = await checkPubKey(
          altheaAddress,
          Number(get().chainId)
        );
        set({ altheaAddress: altheaAddress });
        set({ hasPubKey: hasPubKey });
      }
    },
    balance: BigNumber.from(0),
    setBalance: (balance) => set({ balance: balance }),
    createContractWithSigner: (address, abi) =>
      new Contract(address, abi, get().signer),
  }))
);
