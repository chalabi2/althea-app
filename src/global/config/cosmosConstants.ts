//convert coin constants
export const convertFee = {
  amount: "2300000000000000000",
  denom: "aalthea",
  gas: "2300000",
};

export const ibcFee = {
  amount: "3000000000000000000",
  denom: "aalthea",
  gas: "3000000",
};

export const pubKeyFee = {
  amount: "250000000000000000",
  denom: "aalthea",
  gas: "250000",
};

export const votingFee = {
  amount: "1000000000000000000",
  denom: "aalthea",
  gas: "1000000",
};

export const multiFee = {
  amount: "1000000000000000000",
  denom: "aalthea",
  gas: "3000000",
};

export interface Fee {
  amount: string;
  denom: string;
  gas: string;
}

export interface Sender {
  accountAddress: string;
  sequence: number;
  accountNumber: number;
  pubkey: string;
}

export interface Chain {
  chainId: number;
  cosmosChainId: string;
}

export interface CosmosMsg {
  eipToSign: object;
  legacyAmino: {
    authInfo: object;
    body: object;
  };
  signDirect: object;
}
export interface CosmosTxResponse {
  tx_response: {
    txhash: string;
  };
}
