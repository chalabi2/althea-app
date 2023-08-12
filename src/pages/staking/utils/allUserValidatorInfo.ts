import { BigNumber } from "ethers";
import { toBech32, fromBase64 } from "@cosmjs/encoding";
import { sha256 } from "@cosmjs/crypto";
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
  const urlInflation = nodeAddressIP + "/cosmos/mint/v1beta1/annual_provisions";
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

    result.validators.forEach(
      (validator: {
        description: { moniker: string };
        jailed: boolean;
        operator_address: string;
        commission: { commission_rates: { rate: string } };
        tokens: string;
      }) => {
        const validatorInfo = {
          operator_address: validator.operator_address,
          moniker: validator.description.moniker,
          commission: validator.commission.commission_rates.rate,
          tokens: validator.tokens,
        };

        if (validator.jailed) {
          jailedValidators.push(validatorInfo);
        } else {
          notJailedValidators.push(validatorInfo);
        }
      }
    );
  } catch (error) {
    console.error("Error fetching validators:", error);
  }

  return {
    jailed: jailedValidators,
    notJailed: notJailedValidators,
  };
}

async function getValconsAddressForValidator(
  operatorAddress: string,
  nodeAddressIP: string
): Promise<string> {
  const bech32Prefix = "althea";
  const valconsPrefix = bech32Prefix + "valcons";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const url = `${nodeAddressIP}/cosmos/staking/v1beta1/validators/${operatorAddress}`;
  const response = await fetch(url, options);
  const { validator } = await response.json();
  const consensusPubkeyBase64 = validator?.consensus_pubkey?.key;

  if (consensusPubkeyBase64) {
    const addressData = sha256(fromBase64(consensusPubkeyBase64)).slice(0, 20);
    return toBech32(valconsPrefix, addressData);
  }

  return "";
}

export async function getValconsAddresses(
  nodeAddressIP: string
): Promise<string[]> {
  const valoperAddresses = (await getSafeVals(nodeAddressIP)).notJailed;
  const bech32Prefix = "althea";
  const valconsPrefix = bech32Prefix + "valcons";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const getConsensusPubkey = async (valoperAddress: string) => {
    const url = `${nodeAddressIP}/cosmos/staking/v1beta1/validators/${valoperAddress}`;
    const response = await fetch(url, options);
    const { validator } = await response.json();
    return validator?.consensus_pubkey?.key;
  };

  const valconsAddresses = [];

  for (const valoperInfo of valoperAddresses) {
    const consensusPubkeyBase64 = await getConsensusPubkey(
      valoperInfo.operator_address
    );
    if (consensusPubkeyBase64) {
      const addressData = sha256(fromBase64(consensusPubkeyBase64)).slice(
        0,
        20
      );
      valconsAddresses.push(toBech32(valconsPrefix, addressData));
    }
  }

  return valconsAddresses;
}

export async function getSigningInfo(nodeAddressIP: string) {
  const valconsAddresses = await getValconsAddresses(nodeAddressIP);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const allSigningInfoPromises = valconsAddresses.map(async (address) => {
    const urlSigningInfo = `${nodeAddressIP}/cosmos/slashing/v1beta1/signing_infos/${address}`;
    const response = await fetch(urlSigningInfo, options);
    return response.json();
  });

  const allResults = await Promise.all(allSigningInfoPromises);

  let signingInfos: { [key: string]: any } = {};

  allResults.forEach((result, index) => {
    const address = valconsAddresses[index];
    if (result.val_signing_info) {
      const { tombstoned, missed_blocks_counter } = result.val_signing_info;
      const missedBlocks = parseInt(missed_blocks_counter, 10);
      signingInfos[address] = {
        tombstoned,
        missedBlocks,
      };
    } else {
      signingInfos[address] = {
        tombstoned: null,
        missedBlocks: null,
      };
    }
  });

  return signingInfos;
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
    const urlSlashingInfo = `${nodeAddressIP}/cosmos/distribution/v1beta1/validators/${valoperInfo.operator_address}/slashes`;
    const response = await fetch(urlSlashingInfo, options);
    const result = await response.json();

    if (result.slashes && result.slashes.length > 0) {
      allSlashings.push({
        validator: valoperInfo.operator_address,
        slashes: result.slashes,
      });
    } else {
      allSlashings.push({
        validator: valoperInfo.operator_address,
        slashes: [],
      });
    }
  }

  return {
    slashings: allSlashings,
  };
}

export async function getValidatorsInfo(nodeAddressIP: string) {
  const notJailedValidators = (await getSafeVals(nodeAddressIP)).notJailed;

  const valconsAddressesMap: { [operator: string]: string } = {};

  const allValconsAddressPromises = notJailedValidators.map(
    async (valoperInfo) => {
      const valconsAddress = await getValconsAddressForValidator(
        valoperInfo.operator_address,
        nodeAddressIP
      );
      valconsAddressesMap[valoperInfo.operator_address] = valconsAddress;
      return valconsAddress;
    }
  );

  await Promise.all(allValconsAddressPromises);

  const signingInfos = await getSigningInfo(nodeAddressIP);
  const slashingsInfoResponse = await getSlashingInfo(nodeAddressIP);

  const slashingsInfoMap: { [key: string]: number } = {};
  slashingsInfoResponse.slashings.forEach((slashInfo) => {
    slashingsInfoMap[slashInfo.validator] = slashInfo.slashes.length;
  });

  const validatorsInfo = notJailedValidators.map((valoperInfo) => {
    const valconsAddress = valconsAddressesMap[valoperInfo.operator_address];
    const validatorSignInfo = signingInfos[valconsAddress];

    return {
      moniker: valoperInfo.moniker,
      operator_address: valoperInfo.operator_address,
      tokens: valoperInfo.tokens,
      commission: valoperInfo.commission,
      valcons_address: valconsAddress,
      missedBlocks: validatorSignInfo ? validatorSignInfo.missedBlocks : 0,
      tombstoned: validatorSignInfo ? validatorSignInfo.tombstoned : false,
      slashings: slashingsInfoMap[valoperInfo.operator_address] || 0,
      score: 0,
    };
  });

  return validatorsInfo;
}
