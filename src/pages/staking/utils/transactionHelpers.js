import {
  createTxMsgDelegate,
  createTxMsgUndelegate,
  createTxMsgMultipleWithdrawDelegatorReward,
  createTxMsgBeginRedelegate,
} from "@tharsis/transactions";
import { createTxMultipleMsgDelegate } from "altheajs/packages/transactions/dist/messages/staking/multipleDelegate"
import {
  generateEndpointDistributionRewardsByAddress,
  generateEndpointGetDelegations,
  generateEndpointGetUndelegations,
  generateEndpointBalances,
  createTxMsgWithdrawValidatorCommission,
} from "@tharsis/provider";
import {
  getSenderObj,
  signAndBroadcastTxMsg,
  ethToAlthea,
} from "../../../global/utils/altheaTransactions/helpers";
import { BigNumber } from "ethers";
import { multiFee } from "global/config/cosmosConstants";
  
import { signAndBroadcastTxMultiMsg } from "global/utils/altheaTransactions/multiHelpers";


const ACCEPT_APPLICATION_JSON = "application/json";
/**
 * Transaction that stakes given amount to the designataed validator
 * @param {string} validator validator address string beginning with 'altheavaloper'
 * @param {string} amount amount to stake in string format e.g. '30000000000000000'
 * @param {string} nodeAddressIP node ip with port 1317
 * @param {object} fee fee object
 * @param {object} chain chain object
 * @param {string} memo memo in string format (defautl to empty)
 */
export async function txStake(
  account,
  validator,
  amount,
  nodeAddressIP,
  fee,
  chain,
  memo
) {
  // get sender object using eth address
  const senderObj = await getSenderObj(account, nodeAddressIP);

  const params = {
    validatorAddress: validator,
    amount: amount,
    denom: "aalthea",
  };

  // create the msg to delegate
  const msg = createTxMsgDelegate(chain, senderObj, fee, memo, params);
  return await signAndBroadcastTxMsg(
    msg,
    senderObj,
    chain,
    nodeAddressIP,
    account
  );
}

export async function txStakeMultiple(account, operatorAddresses, amounts, nodeAddressIP, fee, chain, memo, extraDetails) {
  try {
    const senderObj = await getSenderObj(account, nodeAddressIP);
    
    if (!senderObj) {
      throw new Error("Failed to retrieve sender object");
    }

    // Prepare TxContext
    const txContext = {
      chain: chain,
      sender: {
        accountAddress: senderObj.accountAddress,
        sequence: senderObj.sequence,
        accountNumber: senderObj.accountNumber,
        pubkey: senderObj.pubkey
      },              
      fee: multiFee,
      memo: memo || ""              
    };



    // Prepare MultipleMsgDelegateParams
    const delegateParamsArray = extraDetails.delegateMessages.map(delegateMessage => ({
      validatorAddress: delegateMessage.operator,
      amount: delegateMessage.amount,
      denom: "aalthea"
    }));
    
    const params = {
      values: delegateParamsArray
    };
  
    // Create the messages
    const messages = createTxMultipleMsgDelegate(txContext, params);

    if (!messages || !messages.signDirect) {
      throw new Error("No messages were created for delegation");
    }


    // Sign and Broadcast using the new function
    const response = await signAndBroadcastTxMultiMsg(
      messages, 
      senderObj, 
      chain,
      nodeAddressIP, 
      account
    );

    console.log("response", response);
    return response;

  } catch (error) {
    console.error("Error in txStakeMultiple:", error.message || error);
    throw error;
  }
}
/**
 * Transaction that unstakes given amount to the designated validator
 * @param {string} validator validator address string beginning with 'altheavaloper'
 * @param {string} amount amount to stake in string format e.g. '30000000000000000'
 * @param {string} nodeAddressIP node ip with port 1317
 * @param {object} fee fee object
 * @param {object} chain chain object
 * @param {string} memo memo in string format (defautl to empty)
 */
export async function txUnstake(
  account,
  validator,
  amount,
  nodeAddressIP,
  fee,
  chain,
  memo
) {
  // get sender object using eth address
  const senderObj = await getSenderObj(account, nodeAddressIP);

  const params = {
    validatorAddress: validator,
    amount: amount,
    denom: "aalthea",
  };

  // create the msg to delegate
  const msg = createTxMsgUndelegate(chain, senderObj, fee, memo, params);
  return await signAndBroadcastTxMsg(
    msg,
    senderObj,
    chain,
    nodeAddressIP,
    account
  );
}

/**
 * Transaction that stakes given amount to the designataed validator
 * @param {string} validator validator address string beginning with 'altheavaloper'
 * @param {string} amount amount to stake in string format e.g. '30000000000000000'
 * @param {string} nodeAddressIP node ip with port 1317
 * @param {object} fee fee object
 * @param {object} chain chain object
 * @param {string} memo memo in string format (defautl to empty)
 */
export async function txRedelegate(
  account,
  amount,
  nodeAddressIP,
  fee,
  chain,
  memo,
  source,
  dest
) {
  // get sender object using eth address
  const senderObj = await getSenderObj(account, nodeAddressIP);

  const params = {
    validatorSrcAddress: source,
    validatorDstAddress: dest,
    amount: amount,
    denom: "aalthea",
  };

  // create the msg to delegate
  const msg = createTxMsgBeginRedelegate(chain, senderObj, fee, memo, params);
  return await signAndBroadcastTxMsg(
    msg,
    senderObj,
    chain,
    nodeAddressIP,
    account
  );
}

/**
 * Transaction that claims rewards for all of the validators user delegated to
 * @param {string} nodeAddressIP node ip with port 1317
 * @param {object} fee fee object
 * @param {object} chain chain object
 * @param {string} memo memo in string format (defautl to empty)
 */
export async function txClaimRewards(
  account,
  nodeAddressIP,
  fee,
  chain,
  memo,
  validators
) {
  const params = {
    validatorAddresses: Array.from(
      validators.map((validator) => {
        return validator.validator["operator_address"];
      })
    ),
  };
  // get sender object using eth address
  const senderObj = await getSenderObj(account, nodeAddressIP);

  // create the msg to delegate
  const msg = createTxMsgMultipleWithdrawDelegatorReward(
    chain,
    senderObj,
    fee,
    memo,
    params
  );
  return await signAndBroadcastTxMsg(
    msg,
    senderObj,
    chain,
    nodeAddressIP,
    account
  );
}

/**
 * Transaction that claims rewards a validator
 * @param {string} validatorAddress address of the validator
 * @param {string} nodeAddressIP node ip with port 1317
 * @param {object} fee fee object
 * @param {object} chain chain object
 * @param {string} memo memo in string format (defautl to empty)
 */
export async function txClaimValidatorCommisions(
  validatorAddress,
  nodeAddressIP,
  fee,
  chain,
  memo
) {
  // get metamask account address
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  const params = {
    validatorAddress: validatorAddress,
  };

  // get sender object using eth address
  const senderObj = await getSenderObj(account, nodeAddressIP);

  // create the msg to delegate
  const msg = createTxMsgWithdrawValidatorCommission(
    chain,
    senderObj,
    fee,
    memo,
    params
  );
  signAndBroadcastTxMsg(msg, senderObj, chain, nodeAddressIP, account);
}

/**
 * https://github.com/evmos/evmosjs/blob/193244306f544eea6b2070e3f9563cb48ca21094/packages/provider/src/rest/staking.ts#L66-L82
 * @param {string} nodeAddressIP node ip with port 1317
 */
export async function getDelegationsForAddress(nodeAddressIP, address) {
  const altheaAddress = await ethToAlthea(address, nodeAddressIP);
  const url = nodeAddressIP + generateEndpointGetDelegations(altheaAddress);

  const options = {
    method: "GET",
    headers: {
      Accept: ACCEPT_APPLICATION_JSON,
    },
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      return result.delegation_responses;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

/**
 * https://github.com/evmos/evmosjs/blob/193244306f544eea6b2070e3f9563cb48ca21094/packages/provider/src/rest/staking.ts#L89-L109
 * @param {string} nodeAddressIP node ip with port 1317
 */
export async function getUndelegationsForAddress(nodeAddressIP, address) {
  const altheaAddress = await ethToAlthea(address, nodeAddressIP);
  const url = nodeAddressIP + generateEndpointGetUndelegations(altheaAddress);

  const options = {
    method: "GET",
    headers: {
      Accept: ACCEPT_APPLICATION_JSON,
    },
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      let undelegation_map = {};
      let validators = [];

      let totalUnbonding = BigNumber.from("0");
      result.unbonding_responses.forEach((undelegation) => {
        let validator_info = {};
        let validator_unbonding = BigNumber.from("0");
        const { entries, validator_address } = undelegation;
        validator_info["name"] = validator_address;

        let lockouts = [];
        entries.forEach((entry) => {
          let lockout_object_info = {};
          lockout_object_info["complete_time_stamp"] = entry.completion_time;
          lockout_object_info["value_of_coin"] = BigNumber.from(entry.balance);
          lockouts.push(lockout_object_info);
          validator_unbonding = validator_unbonding.add(
            BigNumber.from(entry.balance)
          );
          totalUnbonding = totalUnbonding.add(BigNumber.from(entry.balance));
        });
        validator_info["lockouts"] = lockouts;
        validator_info["validator_unbonding"] = validator_unbonding;
        validators.push(validator_info);
      });

      undelegation_map["total_unbonding"] = totalUnbonding;
      undelegation_map["validators"] = validators;
      return undelegation_map;
    })
    .catch((err) => {
      console.log(err);
      return {
        total_unbonding: BigNumber.from("0"),
      };
    });
}

/**
 * https://github.com/evmos/evmosjs/blob/193244306f544eea6b2070e3f9563cb48ca21094/packages/provider/src/rest/staking.ts#L22-L59
 * @param {string} nodeAddressIP node ip with port 1317
 */
export async function getValidators(nodeAddressIP) {
  const url =
    nodeAddressIP + "/cosmos/staking/v1beta1/validators?pagination.limit=300";

  const options = {
    method: "GET",
    headers: {
      Accept: ACCEPT_APPLICATION_JSON,
    },
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      return result.validators;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

/**
 * https://github.com/evmos/evmosjs/blob/193244306f544eea6b2070e3f9563cb48ca21094/packages/provider/src/rest/balances.ts#L9-L15
 */
export async function getAltheaBalance(nodeAddressIP, address) {
  const altheaAddress = await ethToAlthea(address, nodeAddressIP);
  const url = nodeAddressIP + generateEndpointBalances(altheaAddress);

  const options = {
    method: "GET",
    headers: {
      Accept: ACCEPT_APPLICATION_JSON,
    },
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      const balances = result.balances;
      let altheaBalance = BigNumber.from("0");
      balances.forEach((coin) => {
        if (coin.denom === "aalthea") {
          altheaBalance = BigNumber.from(coin.amount);
        }
      });
      return altheaBalance;
    })
    .catch((err) => {
      console.log(err);
      return BigNumber.from("0");
    });
}

/**
 * https://github.com/evmos/evmosjs/blob/193244306f544eea6b2070e3f9563cb48ca21094/packages/provider/src/rest/staking.ts#L3-L19
 * @param {string} nodeAddressIP node ip with port 1317
 */
export async function getDistributionRewards(nodeAddressIP, address) {
  const altheaAddress = await ethToAlthea(address, nodeAddressIP);
  const url =
    nodeAddressIP + generateEndpointDistributionRewardsByAddress(altheaAddress);

  const options = {
    method: "GET",
    headers: {
      Accept: ACCEPT_APPLICATION_JSON,
    },
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      let altheaRewards = BigNumber.from("0");
      result.total.forEach((reward) => {
        if (reward.denom.includes("aalthea")) {
          altheaRewards = BigNumber.from(reward.amount.split(".")[0]);
        }
      });
      return altheaRewards;
    })
    .catch((err) => {
      console.log(err);
      return BigNumber.from("0");
    });
}