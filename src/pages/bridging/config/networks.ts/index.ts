import {
  AvalancheTestnet,
  AltheaMainnet,
  AltheaTestnet,
  ETHMainnet,
  FantomTestnet,
  GoerliTestnet,
  MumbaiTestnet,
  OptimismTestnet,
  onTestnet,
} from "global/config/networks";
import { BridgingMethods, BridgingNetwork } from "../bridgingInterfaces";
import { GBRIDGE_MAIN_NETWORKS } from "./gBridge";
import {
  LAYER_ZERO_MAIN_NETWORKS,
  LAYER_ZERO_TEST_NETWORKS,
} from "./layerZero";
import { MAINNET_IBC_NETWORKS } from "./cosmos";

function getBridgingNetworksFromChainId(chainId?: number) {
  return onTestnet(chainId) ? TESTNET_BRIDGE_NETWORKS : MAINNET_BRIDGE_NETWORKS;
}
const ALTHEA_MAIN_BRIDGE_NETWORK: BridgingNetwork = {
  id: "althea-main",
  name: AltheaMainnet.name,
  icon: AltheaMainnet.icon,
  isAlthea: true,
  isEVM: true,
  evmChainId: AltheaMainnet.chainId,
  supportedBridgeInMethods: [],
  supportedBridgeOutMethods: [],
  [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_MAIN_NETWORKS.ALTHEA_MAIN,
};
const ALTHEA_TEST_BRIDGE_NETWORK: BridgingNetwork = {
  id: "althea-test",
  name: AltheaTestnet.name,
  icon: AltheaTestnet.icon,
  isAlthea: true,
  isEVM: true,
  evmChainId: AltheaTestnet.chainId,
  supportedBridgeInMethods: [],
  supportedBridgeOutMethods: [],
  [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_TEST_NETWORKS.ALTHEA_TEST,
};

const ibcMainNetworks = () =>
  Object.entries(MAINNET_IBC_NETWORKS).map(([, val]) => ({
    id: val.name,
    name: val.name,
    icon: val.icon,
    isAlthea: false,
    isEVM: false,
    supportedBridgeInMethods: [BridgingMethods.IBC],
    supportedBridgeOutMethods: [BridgingMethods.IBC],
    [BridgingMethods.IBC]: val,
  }));

const MAINNET_BRIDGE_NETWORKS: BridgingNetwork[] = [
  //ALTHEA
  ALTHEA_MAIN_BRIDGE_NETWORK,
  //gbridge
  {
    id: ETHMainnet.name,
    name: ETHMainnet.name,
    icon: ETHMainnet.icon,
    isAlthea: false,
    isEVM: true,
    evmChainId: ETHMainnet.chainId,
    supportedBridgeInMethods: [BridgingMethods.LAYER_ZERO],
    supportedBridgeOutMethods: [
      BridgingMethods.LAYER_ZERO,
      BridgingMethods.GBRIDGE,
    ],
    [BridgingMethods.GBRIDGE]: GBRIDGE_MAIN_NETWORKS.ETH,
    [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_MAIN_NETWORKS.ETH_MAIN,
  },

  //IBC
  ...ibcMainNetworks(),
];
const TESTNET_BRIDGE_NETWORKS: BridgingNetwork[] = [
  //ALTHEA
  ALTHEA_TEST_BRIDGE_NETWORK,
  //LZ
  {
    id: MumbaiTestnet.name,
    name: MumbaiTestnet.name,
    icon: MumbaiTestnet.icon,
    isAlthea: false,
    isEVM: true,
    evmChainId: MumbaiTestnet.chainId,
    supportedBridgeInMethods: [BridgingMethods.LAYER_ZERO],
    supportedBridgeOutMethods: [BridgingMethods.LAYER_ZERO],
    [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_TEST_NETWORKS.MUMBAI_TEST,
  },
  {
    id: FantomTestnet.name,
    name: FantomTestnet.name,
    icon: FantomTestnet.icon,
    isAlthea: false,
    isEVM: true,
    evmChainId: FantomTestnet.chainId,
    supportedBridgeInMethods: [BridgingMethods.LAYER_ZERO],
    supportedBridgeOutMethods: [BridgingMethods.LAYER_ZERO],
    [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_TEST_NETWORKS.FANTOM_TEST,
  },
  {
    id: GoerliTestnet.name,
    name: GoerliTestnet.name,
    icon: GoerliTestnet.icon,
    isAlthea: false,
    isEVM: true,
    evmChainId: GoerliTestnet.chainId,
    supportedBridgeInMethods: [BridgingMethods.LAYER_ZERO],
    supportedBridgeOutMethods: [BridgingMethods.LAYER_ZERO],
    [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_TEST_NETWORKS.GOERLI_TEST,
  },
  {
    id: AvalancheTestnet.name,
    name: AvalancheTestnet.name,
    icon: AvalancheTestnet.icon,
    isAlthea: false,
    isEVM: true,
    evmChainId: AvalancheTestnet.chainId,
    supportedBridgeInMethods: [BridgingMethods.LAYER_ZERO],
    supportedBridgeOutMethods: [BridgingMethods.LAYER_ZERO],
    [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_TEST_NETWORKS.AVALANCHE_TEST,
  },
  {
    id: OptimismTestnet.name,
    name: OptimismTestnet.name,
    icon: OptimismTestnet.icon,
    isAlthea: false,
    isEVM: true,
    evmChainId: OptimismTestnet.chainId,
    supportedBridgeInMethods: [BridgingMethods.LAYER_ZERO],
    supportedBridgeOutMethods: [BridgingMethods.LAYER_ZERO],
    [BridgingMethods.LAYER_ZERO]: LAYER_ZERO_TEST_NETWORKS.OPTIMISM_TEST,
  },
];

export {
  getBridgingNetworksFromChainId,
  ALTHEA_MAIN_BRIDGE_NETWORK,
  ALTHEA_TEST_BRIDGE_NETWORK,
};
