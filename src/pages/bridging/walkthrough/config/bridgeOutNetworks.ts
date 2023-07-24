import cosmosIcon from "assets/icons/ATOM.svg";
import GravitonGrey from "assets/icons/Graviton-Grey.svg";
import { TOKENS } from "global/config/tokenInfo";
import { ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS } from "../../config/tokens.ts/bridgingTokens";
import { BridgeOutNetworkInfo, AltheaMainBridgeOutNetworks } from "./interfaces";

type BridgeOutNetworkData = {
  [key: string]: BridgeOutNetworkInfo;
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

export const ALTHEA_IBC_NETWORK: BridgeOutNetworkInfo = {
  name: "althea",
  chainId: "",
  icon: TOKENS.altheaMainnet.ALTHEA.icon,
  tokens: [],
  nativeDenom: "althea",
  altheaChannel: "",
  networkChannel: "",
  restEndpoint: "",
  rpcEndpoint: "",
  addressBeginning: "althea",
  checkAddress: function (address) {
    return addressCheck(address, this.addressBeginning);
  },
};
export const ALTHEA_MAIN_BRIDGE_OUT_NETWORKS: BridgeOutNetworkData = {
  [AltheaMainBridgeOutNetworks.GRAVITY_BRIDGE]: {
    name: "gravity bridge",
    chainId: "gravity-bridge-3",
    icon: GravitonGrey,
    tokens: [
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.GRAV,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.ETH,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.USDC,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.USDT,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.WSTETH,
    ],
    nativeDenom: "ugraviton",
    altheaChannel: "channel-0",
    networkChannel: "channel-88",
    restEndpoint: "https://gravitychain.io:1317",
    rpcEndpoint: "https://gravitychain.io:26657",
    extraEndpoints: ["https://gravity-api.polkachu.com"],
    addressBeginning: "gravity",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.COSMOS_HUB]: {
    name: "cosmos hub",
    chainId: "cosmoshub-4",
    icon: cosmosIcon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.ATOM],
    nativeDenom: "uatom",
    altheaChannel: "channel-2",
    networkChannel: "channel-358",
    restEndpoint: "https://api-cosmoshub-ia.cosmosia.notional.ventures",
    rpcEndpoint: "https://rpc-cosmoshub.blockapsis.com",
    addressBeginning: "cosmos",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.OSMOSIS]: {
    name: "osmosis",
    chainId: "osmosis-1",
    icon: TOKENS.altheaMainnet.OSMOSIS.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.OSMOSIS],
    nativeDenom: "uosmo",
    altheaChannel: "channel-5",
    networkChannel: "channel-550",
    restEndpoint: "https://lcd.osmosis.zone",
    rpcEndpoint: "https://rpc.osmosis.zone",
    addressBeginning: "osmo",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.COMDEX]: {
    name: "comdex",
    chainId: "comdex-1",
    icon: TOKENS.altheaMainnet.COMDEX.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.COMDEX],
    nativeDenom: "ucmdx",
    altheaChannel: "channel-7",
    networkChannel: "channel-58",
    restEndpoint: "https://rest.comdex.one",
    rpcEndpoint: "https://rpc.comdex.one",
    addressBeginning: "comdex",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.INJECTIVE]: {
    name: "injective",
    chainId: "injective-1",
    icon: TOKENS.altheaMainnet.INJECTIVE.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.INJECTIVE],
    nativeDenom: "inj",
    altheaChannel: "channel-8",
    networkChannel: "channel-99",
    restEndpoint: "https://lcd.injective.network",
    rpcEndpoint: "https://injective-rpc.polkachu.com",
    latestBlockEndpoint: blockEndpoint,
    addressBeginning: "inj",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.CRESCENT]: {
    name: "crescent",
    chainId: "crescent-1",
    icon: TOKENS.altheaMainnet.CRESCENT.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.CRESCENT],
    nativeDenom: "ucre",
    altheaChannel: "channel-9",
    networkChannel: "channel-34",
    restEndpoint: "https://mainnet.crescent.network:1317",
    rpcEndpoint: "https://mainnet.crescent.network:26657",
    addressBeginning: "cre",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.SOMMELIER]: {
    name: "sommelier",
    chainId: "sommelier-3",
    icon: TOKENS.altheaMainnet.SOMM.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.SOMM],
    nativeDenom: "usomm",
    altheaChannel: "channel-10",
    networkChannel: "channel-2",
    restEndpoint: "https://sommelier-api.polkachu.com",
    rpcEndpoint: "https://sommelier-rpc.lavenderfive.com",
    addressBeginning: "somm",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.AKASH]: {
    name: "akash",
    chainId: "akashnet-2",
    icon: TOKENS.altheaMainnet.AKASH.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.AKASH],
    nativeDenom: "uakt",
    altheaChannel: "channel-11",
    networkChannel: "channel-59",
    restEndpoint: "https://api-akash-ia.cosmosia.notional.ventures",
    rpcEndpoint: "https://akash-rpc.polkachu.com",
    addressBeginning: "akash",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.KAVA]: {
    name: "kava",
    chainId: "kava_2222-10",
    icon: TOKENS.altheaMainnet.KAVA.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.KAVA],
    nativeDenom: "ukava",
    altheaChannel: "channel-13",
    networkChannel: "channel-87",
    restEndpoint: "https://api.data.kava.io",
    rpcEndpoint: "https://rpc.data.kava.io",
    addressBeginning: "kava",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.SENTINEL]: {
    name: "sentinel",
    chainId: "sentinelhub-2",
    icon: TOKENS.altheaMainnet.SENTINAL.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.SENTINAL],
    nativeDenom: "udvpn",
    altheaChannel: "channel-16",
    networkChannel: "channel-71",
    restEndpoint: "https://api-sentinel-ia.cosmosia.notional.ventures/",
    rpcEndpoint: "https://rpc-sentinel-ia.cosmosia.notional.ventures/",
    addressBeginning: "sent",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.EVMOS]: {
    name: "evmos",
    chainId: "evmos_9001-2",
    icon: TOKENS.altheaMainnet.EVMOS.icon,
    tokens: [ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.EVMOS],
    nativeDenom: "aevmos",
    restEndpoint: "https://evmos.kingnodes.com",
    rpcEndpoint: "https://evmos.kingnodes.com",
    altheaChannel: "channel-15",
    networkChannel: "channel-62",
    addressBeginning: "evmos",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.PERSISTENCE]: {
    name: "persistence",
    chainId: "core-1",
    icon: TOKENS.altheaMainnet.PERSISTENCE.icon,
    tokens: [
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.PERSISTENCE,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.PSTAKEDATOM,
    ],
    nativeDenom: "uxprt",
    restEndpoint: "https://rest.core.persistence.one",
    rpcEndpoint: "https://rpc.core.persistence.one",
    altheaChannel: "channel-17",
    networkChannel: "channel-80",
    addressBeginning: "persistence",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.STRIDE]: {
    name: "stride",
    chainId: "stride-1",
    icon: TOKENS.altheaMainnet.STRIDE.icon,
    tokens: [
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STRIDE,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STEVMOS,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STATOM,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STJUNO,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STOSMO,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.STSTARS,
    ],
    nativeDenom: "ustrd",
    restEndpoint: "https://stride-api.polkachu.com/",
    rpcEndpoint: "https://stride-rpc.polkachu.com/",
    latestBlockEndpoint: blockEndpoint,
    altheaChannel: "channel-18",
    networkChannel: "channel-74",
    addressBeginning: "stride",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
  [AltheaMainBridgeOutNetworks.QUICKSILVER]: {
    name: "quicksilver",
    chainId: "quicksilver-2",
    icon: TOKENS.altheaMainnet.QUICKSILVER.icon,
    tokens: [
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QUICKSILVER,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QATOM,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QREGEN,
      ALTHEA_MAIN_IBC_TOKENS_WITH_DENOMS.QSTARS,
    ],
    nativeDenom: "uqck",
    restEndpoint: "https://quicksilver-api.lavenderfive.com:443",
    rpcEndpoint: "https://rpc.quicksilver.zone:443",
    latestBlockEndpoint: blockEndpoint,
    altheaChannel: "channel-19",
    networkChannel: "channel-24",
    addressBeginning: "quick",
    checkAddress: function (address) {
      return addressCheck(address, this.addressBeginning);
    },
  },
};
