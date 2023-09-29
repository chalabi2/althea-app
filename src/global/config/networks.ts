import {
  Chain,
  FantomTestnet as FantomTest,
  Mainnet,
  Mumbai,
  Goerli,
  AvalancheTestnet as AvaxTest,
  OptimismGoerli,
} from "@usedapp/core";
import { CORE_ADDRESSES } from "./addresses";
import ethIcon from "assets/icons/ETH.svg";
import bridgeIcon from "assets/icons/althea-bridge.svg";
import altheaIcon from "assets/favicon.ico";

//CONSTANTS
const altheaBlockExplorerUrl = "https://tuber.build";
const altheaTestBlockExplorerUrl = "https://testnet.tuber.build";
const emptyBlockExplorerLink = "https://www.nothing.com";

const getAddressLink = (explorerUrl: string) => (address: string) =>
  `${explorerUrl}/address/${address}`;
const getTransactionLink = (explorerUrl: string) => (txnId: string) =>
  `${explorerUrl}/tx/${txnId}`;

//INTERFACES
export interface Network extends Chain {
  name: string;
  icon: string;
}

export interface AltheaNetwork extends Network {
  coreContracts: {
    Router: string;
    Comptroller: string;
    Reservoir: string;
    WALTHEA: string;
  };
  cosmosBlockExplorerUrl: string;
  cosmosAPIEndpoint: string;
  cosmosChainId: string;
}
//only used for bridging. Only bridge supported networks will be labeled as ETHBridgeNetwork
export interface ETHBridgeNetwork extends Network {
  coreContracts: {
    GravityBridge: string;
    WETH: string;
  };
}

/**
 * CHAINS
 */

//MAIN CHAINS
export const AltheaMainnet: AltheaNetwork = {
  name: "Althea",
  chainName: "Althea Mainnet",
  nativeCurrency: {
    name: "Althea",
    symbol: "althea",
    decimals: 18,
  },
  icon: altheaIcon,
  chainId: 417834,
  rpcUrl: "https://nodes.chandrastation.com/evm/althea/",
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: "0x5785e0027a8c937627C01C9EB5F543bA42f8BB6b",
  multicall2Address: "0xe9cBc7b381aA17C7574671e445830E3b90648368",
  blockExplorerUrl: altheaBlockExplorerUrl,
  getExplorerAddressLink: getAddressLink(altheaBlockExplorerUrl),
  getExplorerTransactionLink: getTransactionLink(altheaBlockExplorerUrl),
  //althea specific
  coreContracts: CORE_ADDRESSES.AltheaMainnet,
  cosmosBlockExplorerUrl: "https://www.mintscan.io/althea",
  cosmosAPIEndpoint: "https://nodes.chandrastation.com/api/althea/",
  cosmosChainId: "althea_417834-3",
};
export const ETHMainnet: ETHBridgeNetwork = {
  ...Mainnet,
  name: "Ethereum",
  icon: ethIcon,
  coreContracts: CORE_ADDRESSES.ETHMainnet,
  rpcUrl: "https://eth.chandrastation.com"
};

//TEST CHAINS
export const AltheaTestnet: AltheaNetwork = {
  name: "Althea Testnet",
  chainName: "Althea Testnet",
  nativeCurrency: {
    name: "Althea",
    symbol: "ALTHEA",
    decimals: 18,
  },
  icon: altheaIcon,
  chainId: 417834,
  rpcUrl: "https://nodes.chandrastation.com/evm/althea/",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x5785e0027a8c937627C01C9EB5F543bA42f8BB6b",
  multicall2Address: "0xe9cBc7b381aA17C7574671e445830E3b90648368",
  blockExplorerUrl: altheaTestBlockExplorerUrl,
  getExplorerAddressLink: getAddressLink(altheaTestBlockExplorerUrl),
  getExplorerTransactionLink: getTransactionLink(altheaTestBlockExplorerUrl),
  //althea specific
  coreContracts: CORE_ADDRESSES.AltheaTestnet,
  cosmosBlockExplorerUrl: emptyBlockExplorerLink,
  cosmosAPIEndpoint: "https://nodes.chandrastation.com/api/althea/",
  cosmosChainId: "althea_417834-3",
};
export const GravityTestnet: ETHBridgeNetwork = {
  ...Mainnet,
  name: "Gravity Bridge Testnet",
  chainId: 15,
  coreContracts: CORE_ADDRESSES.gravityBridgeTest,
  rpcUrl: "https://testnet.gravitychain.io",
  isTestChain: true,
  blockExplorerUrl: emptyBlockExplorerLink,
  icon: bridgeIcon,
};
export const MumbaiTestnet: Network = {
  ...Mumbai,
  name: "Mumbai Testnet",
  icon: "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg",
};
export const FantomTestnet: Network = {
  ...FantomTest,
  name: "Fantom Testnet",
  icon: "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg",
};

export const GoerliTestnet: Network = {
  ...Goerli,
  name: "Goerli Testnet",
  icon: ethIcon,
  rpcUrl: "https://rpc.ankr.com/eth_goerli",
};

export const AvalancheTestnet: Network = {
  ...AvaxTest,
  name: "Avalanche Testnet",
  icon: "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg",
};

export const OptimismTestnet: Network = {
  ...OptimismGoerli,
  name: "Optimism Testnet",
  icon: "https://raw.githubusercontent.com/ethereum-optimism/brand-kit/main/assets/svg/Profile-Logo.svg",
};

/**
 * EXPORT LISTS
 */

//Will include all althea + testnets
export const ALL_SUPPORTED_ALTHEA_NETWORKS = [AltheaMainnet, AltheaTestnet];
//For bridging eth networks + testnests
export const ALL_SUPPORTED_ETH_NETWORKS = [ETHMainnet, GravityTestnet];
//For all network queries (chainId, rpc, blockexplorer, etc.)
export const ALL_SUPPORTED_NETWORKS = [
  AltheaMainnet,
  AltheaTestnet,
  ETHMainnet,
  MumbaiTestnet,
  FantomTestnet,
  GoerliTestnet,
  AvalancheTestnet,
  OptimismTestnet,
];

/**
 * HELPER TO FIND OUT IF USER IS ON TESTNET
 */
export function onTestnet(chainId?: number): boolean {
  return (
    ALL_SUPPORTED_NETWORKS.find((network) => network.chainId === chainId)
      ?.isTestChain ?? false
  );
}
