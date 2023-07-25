import { ethers } from "ethers";
import {
  ALL_SUPPORTED_ALTHEA_NETWORKS,
  ALL_SUPPORTED_ETH_NETWORKS,
  ALL_SUPPORTED_NETWORKS,
  AltheaMainnet,
  ETHMainnet,
} from "global/config/networks";

//DEFAULTS WILL BE ALTHEAMAINNET && ETHMAINNET
export function getETHNetwork(chainId?: number | undefined) {
  return (
    ALL_SUPPORTED_ETH_NETWORKS.find((network) => network.chainId == chainId) ??
    ETHMainnet
  );
}
export function getAltheaNetwork(chainId?: number | undefined) {
  return (
    ALL_SUPPORTED_ALTHEA_NETWORKS.find(
      (network) => network.chainId == chainId
    ) ?? AltheaMainnet
  );
}
export function getSupportedNetwork(chainId?: number | undefined) {
  return (
    ALL_SUPPORTED_NETWORKS.find((network) => network.chainId == chainId) ??
    AltheaMainnet
  );
}

//get addresses for network
export function getAddressesForAltheaNetwork(chainId?: number | undefined) {
  return getAltheaNetwork(chainId).coreContracts;
}
export function getAddressesForEthNetwork(chainId?: number | undefined) {
  return getETHNetwork(chainId).coreContracts;
}

//rpc and api calls
function getRPCURL(chainId?: number | undefined) {
  return (
    ALL_SUPPORTED_NETWORKS.find((network) => network.chainId == chainId)
      ?.rpcUrl ?? AltheaMainnet.rpcUrl
  );
}
export function getCurrentProvider(chainId?: number) {
  return new ethers.providers.JsonRpcProvider(getRPCURL(chainId));
}
export function getCosmosAPIEndpoint(chainId?: number | undefined) {
  return getAltheaNetwork(chainId).cosmosAPIEndpoint;
}
export function getCosmosChainObj(chainId?: number | undefined) {
  const network = getAltheaNetwork(chainId);
  return {
    chainId: network.chainId,
    cosmosChainId: network.cosmosChainId,
  };
}

//will return if we are on a supported althea-type network
export function onAltheaNetwork(chainId?: number | undefined): boolean {
  return !!ALL_SUPPORTED_ALTHEA_NETWORKS.find(
    (network) => network.chainId == chainId
  );
}
