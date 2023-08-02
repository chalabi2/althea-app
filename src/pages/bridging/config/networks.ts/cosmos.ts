import { IBCNetwork } from "../bridgingInterfaces";
import { ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS } from "../tokens.ts/bridgingTokens";
import GravitonGrey from "assets/icons/Graviton-Grey.svg";
import cosmosIcon from "assets/icons/ATOM.svg";
import { TOKENS } from "global/config/tokenInfo";

export enum MainnetIBCNetworks {
  GRAVITY_BRIDGE = "Gravity_Bridge",
  COSMOS_HUB = "Cosmos_Hub",
  COMDEX = "Comdex",
  OSMOSIS = "Osmosis",
  SOMMELIER = "Sommelier",
  INJECTIVE = "Injective",
  KAVA = "Kava",
  AKASH = "Akash",
  CRESCENT = "Crescent",
  SENTINEL = "Sentinel",
  EVMOS = "Evmos",
  PERSISTENCE = "Persistence",
  STRIDE = "Stride",
  QUICKSILVER = "Quicksilver",
}
type CosmosIBCNetworkData = {
  [key in MainnetIBCNetworks]: IBCNetwork;
};

function addressCheck(address: string | undefined, addressBeginning: string) {
  if (!address) {
    return false;
  }
  return (
    address.slice(0, addressBeginning.length) == addressBeginning &&
    address.length == 39 + addressBeginning.length
  );
}
const blockEndpoint = "/cosmos/base/tendermint/v1beta1";

export const ALTHEA_IBC_NETWORK: IBCNetwork = {
  name: "althea",
  chainId: "althea_417834-3",
  icon: TOKENS.altheaMainnet.ALTHEA.icon,
  nativeCurrency: { denom: "althea", decimals: 18 },
  channelFromAlthea: "",
  channelToAlthea: "",
  restEndpoint: "",
  rpcEndpoint: "",
  addressBeginning: "althea",
  checkAddress: function (address) {
    return addressCheck(address, this.addressBeginning);
  },
  tokens: {
    toAlthea: [],
    fromAlthea: [],
  },
};

const MAINNET_IBC_NETWORKS: CosmosIBCNetworkData = {
  [MainnetIBCNetworks.GRAVITY_BRIDGE]: {
    name: "gravity bridge",
    icon: GravitonGrey,
    chainId: "gravity-bridge-3",
    nativeCurrency: {
      denom: "ugraviton",
      decimals: 6,
    },
    channelFromAlthea: "channel-0",
    channelToAlthea: "channel-141",
    restEndpoint: "https://gravitychain.io:1317",
    rpcEndpoint: "https://gravitychain.io:26657",
    extraEndpoints: ["https://gravity-api.polkachu.com"],
    addressBeginning: "gravity",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.GRAV,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.ETH,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.USDC,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.USDT,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.WSTETH,
      ],
      fromAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.GRAV,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.ETH,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.USDC,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.USDT,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.WSTETH,
      ],
    },
  },
  [MainnetIBCNetworks.COSMOS_HUB]: {
    name: "cosmos hub",
    icon: cosmosIcon,
    chainId: "cosmoshub-4",
    nativeCurrency: {
      denom: "uatom",
      decimals: 6,
    },
    channelFromAlthea: "channel-2",
    channelToAlthea: "channel-358",
    restEndpoint: "https://api-cosmoshub-ia.cosmosia.notional.ventures",
    rpcEndpoint: "https://rpc-cosmoshub.blockapsis.com",
    addressBeginning: "cosmos",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.ATOM],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.ATOM],
    },
  },
  [MainnetIBCNetworks.OSMOSIS]: {
    name: "osmosis",
    icon: TOKENS.altheaMainnet.OSMOSIS.icon,
    chainId: "osmosis-1",
    nativeCurrency: {
      denom: "uosmo",
      decimals: 6,
    },
    channelFromAlthea: "channel-5",
    channelToAlthea: "channel-550",
    restEndpoint: "https://lcd.osmosis.zone",
    rpcEndpoint: "https://rpc.osmosis.zone",
    addressBeginning: "osmo",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.OSMOSIS],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.OSMOSIS],
    },
  },
  [MainnetIBCNetworks.COMDEX]: {
    name: "comdex",
    icon: TOKENS.altheaMainnet.COMDEX.icon,
    chainId: "comdex-1",
    nativeCurrency: {
      denom: "ucmdx",
      decimals: 6,
    },
    channelFromAlthea: "channel-7",
    channelToAlthea: "channel-58",
    restEndpoint: "https://rest.comdex.one",
    rpcEndpoint: "https://rpc.comdex.one",
    addressBeginning: "comdex",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.COMDEX],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.COMDEX],
    },
  },
  [MainnetIBCNetworks.INJECTIVE]: {
    name: "injective",
    icon: TOKENS.altheaMainnet.INJECTIVE.icon,
    chainId: "injective-1",
    nativeCurrency: {
      denom: "inj",
      decimals: 18,
    },
    channelFromAlthea: "channel-8",
    channelToAlthea: "channel-99",
    restEndpoint: "https://lcd.injective.network",
    rpcEndpoint: "https://injective-rpc.polkachu.com",
    latestBlockEndpoint: blockEndpoint,
    addressBeginning: "inj",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.INJECTIVE],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.INJECTIVE],
    },
  },
  [MainnetIBCNetworks.CRESCENT]: {
    name: "crescent",
    icon: TOKENS.altheaMainnet.CRESCENT.icon,
    chainId: "crescent-1",
    nativeCurrency: {
      denom: "ucre",
      decimals: 6,
    },
    channelFromAlthea: "channel-9",
    channelToAlthea: "channel-34",
    restEndpoint: "https://mainnet.crescent.network:1317",
    rpcEndpoint: "https://mainnet.crescent.network:26657",
    addressBeginning: "cre",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.CRESCENT],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.CRESCENT],
    },
  },
  [MainnetIBCNetworks.SOMMELIER]: {
    name: "sommelier",
    icon: TOKENS.altheaMainnet.SOMM.icon,
    chainId: "sommelier-3",
    nativeCurrency: {
      denom: "usomm",
      decimals: 6,
    },
    channelFromAlthea: "channel-10",
    channelToAlthea: "channel-2",
    restEndpoint: "https://sommelier-api.polkachu.com",
    rpcEndpoint: "https://sommelier-rpc.lavenderfive.com",
    addressBeginning: "somm",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.SOMM],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.SOMM],
    },
  },
  [MainnetIBCNetworks.AKASH]: {
    name: "akash",
    icon: TOKENS.altheaMainnet.AKASH.icon,
    chainId: "akashnet-2",
    nativeCurrency: {
      denom: "uakt",
      decimals: 6,
    },
    channelFromAlthea: "channel-11",
    channelToAlthea: "channel-59",
    restEndpoint: "https://api-akash-ia.cosmosia.notional.ventures",
    rpcEndpoint: "https://akash-rpc.polkachu.com",
    addressBeginning: "akash",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.AKASH],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.AKASH],
    },
  },
  [MainnetIBCNetworks.KAVA]: {
    name: "kava",
    icon: TOKENS.altheaMainnet.KAVA.icon,
    chainId: "kava_2222-10",
    nativeCurrency: {
      denom: "ukava",
      decimals: 6,
    },
    channelFromAlthea: "channel-13",
    channelToAlthea: "channel-87",
    restEndpoint: "https://api.data.kava.io",
    rpcEndpoint: "https://rpc.data.kava.io",
    addressBeginning: "kava",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.KAVA],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.KAVA],
    },
  },
  [MainnetIBCNetworks.SENTINEL]: {
    name: "sentinel",
    icon: TOKENS.altheaMainnet.SENTINAL.icon,
    chainId: "sentinelhub-2",
    nativeCurrency: {
      denom: "udvpn",
      decimals: 6,
    },
    channelFromAlthea: "channel-16",
    channelToAlthea: "channel-71",
    restEndpoint: "https://api-sentinel-ia.cosmosia.notional.ventures/",
    rpcEndpoint: "https://rpc-sentinel-ia.cosmosia.notional.ventures/",
    addressBeginning: "sent",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.SENTINAL],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.SENTINAL],
    },
  },
  [MainnetIBCNetworks.EVMOS]: {
    name: "evmos",
    icon: TOKENS.altheaMainnet.EVMOS.icon,
    chainId: "evmos_9001-2",
    nativeCurrency: {
      denom: "aevmos",
      decimals: 18,
    },
    restEndpoint: "https://evmos.kingnodes.com",
    channelFromAlthea: "channel-15",
    channelToAlthea: "channel-62",
    rpcEndpoint: "https://evmos.kingnodes.com",
    addressBeginning: "evmos",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.EVMOS],
      fromAlthea: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.EVMOS],
    },
  },
  [MainnetIBCNetworks.PERSISTENCE]: {
    name: "persistence",
    icon: TOKENS.altheaMainnet.PERSISTENCE.icon,
    chainId: "core-1",
    nativeCurrency: {
      denom: "uxprt",
      decimals: 6,
    },
    restEndpoint: "https://rest.core.persistence.one",
    channelFromAlthea: "channel-17",
    channelToAlthea: "channel-80",
    rpcEndpoint: "https://rpc.core.persistence.one",
    addressBeginning: "persistence",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.PERSISTENCE,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.PSTAKEDATOM,
      ],
      fromAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.PERSISTENCE,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.PSTAKEDATOM,
      ],
    },
  },
  [MainnetIBCNetworks.STRIDE]: {
    name: "stride",
    icon: TOKENS.altheaMainnet.STRIDE.icon,
    chainId: "stride-1",
    nativeCurrency: {
      denom: "ustrd",
      decimals: 6,
    },
    restEndpoint: "https://stride-api.polkachu.com/",
    rpcEndpoint: "https://stride-rpc.polkachu.com/",
    channelFromAlthea: "channel-18",
    channelToAlthea: "channel-74",
    latestBlockEndpoint: blockEndpoint,
    addressBeginning: "stride",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STRIDE,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STEVMOS,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STATOM,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STJUNO,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STOSMO,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STSTARS,
      ],
      fromAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STRIDE,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STEVMOS,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STATOM,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STJUNO,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STOSMO,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STSTARS,
      ],
    },
  },
  [MainnetIBCNetworks.QUICKSILVER]: {
    name: "quicksilver",
    icon: TOKENS.altheaMainnet.QUICKSILVER.icon,
    chainId: "quicksilver-2",
    nativeCurrency: {
      denom: "uqck",
      decimals: 6,
    },
    restEndpoint: "https://quicksilver-api.lavenderfive.com:443",
    rpcEndpoint: "https://rpc.quicksilver.zone:443",
    channelFromAlthea: "channel-19",
    channelToAlthea: "channel-24",
    latestBlockEndpoint: blockEndpoint,
    addressBeginning: "quick",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
    tokens: {
      toAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QUICKSILVER,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QATOM,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QREGEN,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QSTARS,
      ],
      fromAlthea: [
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QUICKSILVER,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QATOM,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QREGEN,
        ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QSTARS,
      ],
    },
  },
};
const TESTNET_IBC_NETWORKS = {};

export { MAINNET_IBC_NETWORKS, TESTNET_IBC_NETWORKS };
