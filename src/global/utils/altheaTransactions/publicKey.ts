import { generateEndpointAccount } from "@tharsis/provider";
import { createMessageSend } from "@tharsis/transactions";
import { pubKeyFee } from "global/config/cosmosConstants";
import { getAltheaAddressFromMetaMask } from "../walletConnect/addAltheaToWallet";
import {
  checkAltheaBalance,
  getSenderObj,
  signAndBroadcastTxMsg,
} from "./helpers";
import { getCosmosAPIEndpoint, getCosmosChainObj } from "../getAddressUtils";

export async function checkPubKey(bech32Address: string, chainId?: number) {
  const endPointAccount = generateEndpointAccount(bech32Address);
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const addressRawData = await fetch(
      getCosmosAPIEndpoint(chainId) + endPointAccount,
      options
    );
    const addressData = await addressRawData.json();
    return addressData["account"]["base_account"]["pub_key"] != null;
  } catch {
    return false;
  }
}

export async function generatePubKey(
  hexAddress: string | undefined,
  setIsSuccess: (s: string) => void,
  chainId?: number
) {
  const botAddress = "althea1efrhdukv096tmjs7r80m8pqkr3udp9g0uadjfv";
  if (hexAddress === undefined) {
    setIsSuccess("please connect your metamask to this page...");
    return;
  }
  setIsSuccess("please wait...");

  const bech32Address = await getAltheaAddressFromMetaMask(hexAddress, chainId);
  const hasAlthea = await checkAltheaBalance(bech32Address, chainId);

  const hasPubKey = await checkPubKey(bech32Address, chainId);
  if (hasPubKey) {
    setIsSuccess("user already has a public key for account: " + hexAddress);
    return;
  }
  if (!hasAlthea) {
    try {
      // await bot call only if user has no althea
      const botResponse = await callBot(bech32Address, hexAddress);
      console.log(botResponse);
    } catch {
      console.log("no response from bot");
      setIsSuccess(
        "Failed. Account must have ETH balance on ethereum mainnet or ALTHEA balance on althea network."
      );
      return;
    }
  }
  // await generate pub key
  setIsSuccess("waiting for the metamask transaction to be signed...");
  const response = await txSend(
    botAddress,
    hexAddress,
    bech32Address,
    "1",
    chainId
  ); // await txSend to bot
  setIsSuccess("generating account...");
  const wrapper = async () => {
    const hasPubKey = await checkPubKey(bech32Address, chainId);
    if (hasPubKey) {
      setIsSuccess("Success");
    } else {
      setIsSuccess("public key generatation was unsuccessful");
    }
  };
  setTimeout(wrapper, 8000);
}

async function callBot(altheaAddress: string, hexAddress: string) {
  const ALTHEA_BOT_URL = "https://dust.plexnode.org/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": "true",
    },
    body: JSON.stringify({
      altheaAddress: altheaAddress,
      hexAddress: hexAddress,
    }),
  };

  return await fetch(ALTHEA_BOT_URL, options);
}
async function txSend(
  destinationBech32: string,
  senderHexAddress: string,
  senderBech32address: string,
  amount: string,
  chainId?: number
) {
  const senderObj = await getSenderObj(
    senderHexAddress,
    getCosmosAPIEndpoint(chainId)
  );
  const params = {
    destinationAddress: destinationBech32,
    amount: amount,
    denom: "aalthea",
  };
  const msg = createMessageSend(
    getCosmosChainObj(chainId),
    senderObj,
    pubKeyFee,
    "",
    params
  );
  return signAndBroadcastTxMsg(
    msg,
    senderObj,
    getCosmosChainObj(chainId),
    getCosmosAPIEndpoint(chainId),
    senderHexAddress
  );
}
