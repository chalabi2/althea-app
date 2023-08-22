import { createMsgUndelegate as protoMsgUndelegate } from '@althea-net/proto'

import {
  generateTypes,
  MSG_UNDELEGATE_TYPES,
  createMsgUndelegate,
} from '@althea-net/eip712'
import { altheaToEth } from '@althea-net/address-converter'
import { createTransactionPayload, TxContext } from './base'

export interface MsgUndelegateParams {
    validatorAddress: string;
    amount: string;
    denom: string;
}

export interface MsgUndelegatesParams {
    values: MsgUndelegateParams[];
}


export const createEIP712MultipleMsgUndelegate = (
    context: TxContext,
    params: MsgUndelegatesParams,
  ) => {
    const types = generateTypes(MSG_UNDELEGATE_TYPES);
    
    const messages = params.values.map(param => 
      createMsgUndelegate(
        context.sender.accountAddress,
        param.validatorAddress,
        param.amount,
        param.denom,
      )
    );
  
    return {
      types,
      message: messages,
    };
  };
  

  export const createCosmosMultipleMsgUndelegate = (
    context: TxContext,
    params: MsgUndelegatesParams,
  ) => {
    return params.values.map(param =>
      protoMsgUndelegate(
        context.sender.accountAddress,
        param.validatorAddress,
        param.amount,
        param.denom,
      ),
    );
  };

/**
 * Creates a transaction for multiple MsgDelegate objects.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/staking#msgdelegate | MsgDelegate}
 *
 * @param context - Transaction Context
 * @param params - MultipleMsgDelegate Params
 * @returns Transaction with multiple MsgDelegate objects in the payload
 *
 */
export const createTxMultipleMsgUndelegate = (
    context: TxContext,
    params: MsgUndelegatesParams,
  ) => {
    const typedData = createEIP712MultipleMsgUndelegate(context, params);
    const cosmosMsgs = createCosmosMultipleMsgUndelegate(context, params);
  
    return createTransactionPayload(context, typedData, cosmosMsgs);
  };
  