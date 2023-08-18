/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  generateEndpointAccount,
} from "@tharsis/provider";
import {
  createTxRawEIP712,
  signatureToWeb3Extension,
} from "@tharsis/transactions";
import signatureToPubkey from "@hanchon/signature-to-pubkey"
import { ethers } from "ethers";
import { Buffer } from "buffer";
import { BigNumber } from "ethers";
import { Chain, CosmosMsg, Sender } from "global/config/cosmosConstants";
import { getCosmosAPIEndpoint } from "../getAddressUtils";
import { createTxRaw } from '@althea-net/proto'
import { altheaToEth  } from '@althea-net/address-converter'
import {
  generateEndpointBroadcast,
  generatePostBodyBroadcast,
}  from '@althea-net/provider'

const JSONHeader = "application/json";
/**
 * Signs msg using metamask and broadcasts to node
 * @param {object} msg msg object
 * @param {object} senderObj sender object
 * @param {object} chain chain object
 * @param {string} nodeAddress ip address and port of node
 * @param {string} account eth hex address
 */
export async function signAndBroadcastTxMsg(
  msg: CosmosMsg,
  senderObj: Sender,
  chain: Chain,
  nodeAddress: string,
  account: string
) {
  // @ts-ignore
  const signature = await window.ethereum.request({
    method: "eth_signTypedData_v4",
    params: [account, JSON.stringify(msg.eipToSign)],
  });

  const raw = generateRawTx(chain, senderObj, signature, msg);

  const postOptions = {
    method: "POST",
    headers: { "Content-Type": JSONHeader },
    body: generatePostBodyBroadcast(raw),
  }; 

  const broadcastPost = await fetch(
    nodeAddress + generateEndpointBroadcast(),
    postOptions
  );
  return await broadcastPost.json();
}

function generateRawTx(chain: any, senderObj: any, signature: any, msg: any) {
  const extension = signatureToWeb3Extension(chain, senderObj, signature);
  return createTxRawEIP712(
    msg.legacyAmino.body,
    msg.legacyAmino.authInfo,
    extension
  );
}

export async function signWithMetaMask(senderObj: any,  messages: any) {

  // Initialize MetaMask.
  await window.ethereum.enable();
  const senderHexAddress = altheaToEth(senderObj.accountAddress);

  const eip712Payload = JSON.stringify(messages.eipToSign);


  // Sign the transaction.
  const signature = await window.ethereum.request({
      method: 'eth_signTypedData_v4',
      params: [senderHexAddress, eip712Payload],
  });

  return signature;
}

export function createSignedTransaction(tx: any, signature: string) {
  const signatureBytes = Buffer.from(signature.replace('0x', ''), 'hex');
  
  const { signDirect } = tx;
  const bodyBytes = signDirect.body.toBinary();
  const authInfoBytes = signDirect.authInfo.toBinary();

  const signedTx = createTxRaw(
    bodyBytes,
    authInfoBytes,
    [signatureBytes],
  );

  return signedTx;
}

export async function broadcastTransaction(signedTx: any) {
  const postOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: generatePostBodyBroadcast(signedTx),
  };
  const nodeUrl = "https://althea.api.chandrastation.com"
  const broadcastEndpoint = `${nodeUrl}${generateEndpointBroadcast()}`;
  const broadcastPost = await fetch(broadcastEndpoint, postOptions);

  const response = await broadcastPost.json();
  return response;
}
/**
 * Uses the eth hex address, converts it to a althea address,
 * then gets the sender object.
 * @param {string} address The eth address
 * @param {string} nodeAddress The address of the node: xxx.xxx.x.xx:1317
 * @return {string} The sender object
 */
export async function getSenderObj(address: string, nodeAddress: string) {
  const accountAlthea = await ethToAlthea(address, "https://althea.api.chandrastation.com");
  const endPointAccount = generateEndpointAccount(accountAlthea ?? "");

  const options = {
    method: "GET",
    headers: { "Content-Type": JSONHeader },
  };
  
  const addressRawData = await fetch("https://althea.api.chandrastation.com" + endPointAccount, options);

  const addressData = await addressRawData.json();
  return reformatSender(addressData["account"]["base_account"]);
}

/**
 * Convert an eth hex address to bech32 althea address.
 * @param {string} address The eth address to convert into a althea address
 * @return {string} The converted address
 */
export async function ethToAlthea(address: string, nodeAddress: string) {
  return fetch(nodeAddress + "/ethermint/evm/v1/cosmos_account/" + address, {
    method: "GET",
    headers: {
      Accept: JSONHeader,
    },
  })
  .then((response) => {
    if (!response.ok) {
      response.text().then(text => {
        console.error("Error Body:", text);
        console.error("Status Code:", response.status);
        console.error("Status Text:", response.statusText);
      });
      throw new Error("Network response was not ok");
    }
    return response.json();
 })
  
  .then((result) => {
    if (!result || !result.cosmos_address) {
      throw new Error("Expected field 'cosmos_address' not found");
    }
    address = result.cosmos_address;
    return address;
  })
  
  .catch((error) => {
    console.error("Error in ethToAlthea:", error.message);
  });
  
}

/**
 * Reformats the addressData into senderObj
 * @param {object} addressData The eth address
 * @return {string} The sender object
 */

async function reformatSender(addressData: any) {
  let pubkey;
  if (addressData["pub_key"] == null) {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", [1]);
    const signer = provider.getSigner();
    const signature = await signer.signMessage("generate_pubkey");

    pubkey = signatureToPubkey(
      signature,
      Buffer.from([
        50, 215, 18, 245, 169, 63, 252, 16, 225, 169, 71, 95, 254, 165, 146,
        216, 40, 162, 115, 78, 147, 125, 80, 182, 25, 69, 136, 250, 65, 200, 94,
        178,
      ])
    );
  } else {
    pubkey = addressData["pub_key"]["key"];
  }
  return {
    accountNumber: addressData["account_number"],
    pubkey: pubkey,
    sequence: addressData["sequence"],
    accountAddress: addressData["address"],
  };
}

export async function checkAltheaBalance(
  bech32Address: string,
  chainId?: number
) {
  const nodeURLMain = getCosmosAPIEndpoint(chainId);
  const result = await fetch(
    nodeURLMain +
      "/cosmos/bank/v1beta1/balances/" +
      bech32Address +
      "/by_denom?denom=aalthea",
    {
      method: "GET",
      headers: {
        Accept: JSONHeader,
      },
    }
  );
  const balance = BigNumber.from((await result.json()).balance.amount);
  // console.log(balance);

  return !balance.lt(BigNumber.from("300000000000000000"));
}
