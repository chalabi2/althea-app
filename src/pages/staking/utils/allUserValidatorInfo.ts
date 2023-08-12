import { BigNumber } from "ethers";
import { toBech32, fromBase64 } from '@cosmjs/encoding';
import { sha256 } from '@cosmjs/crypto'
import {
  DelegationResponse,
  MasterValidatorProps,
  UndelegationMap,
  Validator,
} from "../config/interfaces";

export function getAllValidatorData(
  validators: Validator[],
  delegations: DelegationResponse[],
  undelegations: UndelegationMap
): MasterValidatorProps[] {
  function find_matched_address(
    op_address: string,
    undelegations: UndelegationMap
  ) {
    const operator_address = op_address;
    return undelegations.validators?.find((o) => o.name === operator_address);
  }

  return validators.map((validator) => {
    const userDelegation = delegations.find((delegation) => {
      return (
        delegation.delegation.validator_address === validator.operator_address
      );
    });
    return {
      validator: validator,
      userDelegations: userDelegation,
      undelagatingInfo: find_matched_address(
        validator["operator_address"],
        undelegations
      ),
    };
  });
}

export const calculateTotalStaked = (delegations: DelegationResponse[]) => {
  let total = BigNumber.from("0");
  delegations.forEach((delegation) => {
    if (delegation.balance.denom.includes("aalthea")) {
      total = total.add(delegation.balance.amount);
    }
  });
  return total;
};

export async function getStakingApr(nodeAddressIP: string) {
  const urlInflation =
    nodeAddressIP + "/cosmos/mint/v1beta1/annual_provisions";
  const urlStake = nodeAddressIP + "/cosmos/staking/v1beta1/pool";

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const totalStake = await fetch(urlStake, options)
    .then((response) => response.json())
    .then((result) => {
      return parseFloat(result.pool.bonded_tokens);
    })
    .catch(() => {
      return 0;
    });

  const mintProvision = await fetch(urlInflation, options)
    .then((response) => response.json())
    .then((result) => {
      return parseFloat(result.annual_provisions);
    })
    .catch(() => {
      return 0;
    });

  let apr = (mintProvision / totalStake) * 100;
  
  return apr.toFixed(2);
}

export async function getSafeVals(nodeAddressIP: string) {
  const urlValidators = `${nodeAddressIP}/cosmos/staking/v1beta1/validators`;

  const options = {
      method: "GET",
      headers: {
          Accept: "application/json",
      },
  };

  let jailedValidators: any[] = [];
  let notJailedValidators: any[] = [];

  try {
      const response = await fetch(urlValidators, options);
      const result = await response.json();

      result.validators.forEach((validator: { jailed: boolean; operator_address: any; moniker: string; }) => {
          const validatorInfo = { operator_address: validator.operator_address, moniker: validator.moniker };
          if (validator.jailed) {
              jailedValidators.push(validatorInfo);
          } else {
              notJailedValidators.push(validatorInfo);
          }
      });

  } catch (error) {
      console.error("Error fetching validators:", error);
  }

  return {
      jailed: jailedValidators,
      notJailed: notJailedValidators
  };
}


export async function getValconsAddresses(nodeAddressIP: string): Promise<string[]> {
  const valoperAddresses = (await getSafeVals(nodeAddressIP)).notJailed;
  const bech32Prefix = 'althea';
  const valconsPrefix = bech32Prefix + 'valcons';
  const options = {
      method: "GET",
      headers: {
          Accept: "application/json",
      },
  };

  // A helper function to fetch the consensus pubkey for a given valoperAddress
  const getConsensusPubkey = async (valoperAddress: string) => {
      const url = `${nodeAddressIP}/cosmos/staking/v1beta1/validators/${valoperAddress}`;
      const response = await fetch(url, options);
      const { validator } = await response.json();
      return validator?.consensus_pubkey?.key;
  };

  const valconsAddresses = [];

  // Iterate through each valoperAddress to get the respective valconsAddress
  for (const valoperInfo of valoperAddresses) {
      const consensusPubkeyBase64 = await getConsensusPubkey(valoperInfo.operator_address);
      if (consensusPubkeyBase64) {
          const addressData = sha256(fromBase64(consensusPubkeyBase64)).slice(0, 20);
          valconsAddresses.push(toBech32(valconsPrefix, addressData));
      }
  }

  return valconsAddresses;
}

export async function getSigningInfo(nodeAddressIP: string) {
  const valconsAddresses = getValconsAddresses(nodeAddressIP);
  const urlSigningInfo = `${nodeAddressIP}/cosmos/slashing/v1beta1/signing_infos/${valconsAddresses}`;

  const options = {
      method: "GET",
      headers: {
          Accept: "application/json",
      },
  };
  
      const response = await fetch(urlSigningInfo, options);
      const result = await response.json();
      const signingInfo = result.val_signing_info;
      const tombstoned = signingInfo.tombstoned;
      const missedBlocks = signingInfo.missedBlocks;
      tombstoned.push(signingInfo.tombstoned); 
      missedBlocks.push(signingInfo.missedBlocks); 

  return {
      tombstoned,
      missedBlocks
  };
}

export async function getSlashingInfo(nodeAddressIP: string) {
  const notJailedValidators = (await getSafeVals(nodeAddressIP)).notJailed;

  const options = {
      method: "GET",
      headers: {
          Accept: "application/json",
      },
  };

  let allSlashings = [];

  for (const valoperInfo of notJailedValidators) {
    const urlSlashingInfo = `${nodeAddressIP}/cosmos/slashing/v1beta1/signing_infos/${valoperInfo.operator_address}`;
    const response = await fetch(urlSlashingInfo, options);
    const result = await response.json();
    allSlashings.push(result.slashes); 
  }

  return {
      slashings: allSlashings.flat()  
  };
}