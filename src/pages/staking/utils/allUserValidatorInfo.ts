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
  const urlInflation = "https://althea.api.chandrastation.com" + "/cosmos/mint/v1beta1/annual_provisions";
  const urlStake = "https://althea.api.chandrastation.com" + "/cosmos/staking/v1beta1/pool";

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
  const urlValidators = "https://althea.api.chandrastation.com/cosmos/staking/v1beta1/validators";

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
  try {
    const bech32Prefix = "althea";
    const valconsPrefix = bech32Prefix + "valcons";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    const url = `https://althea.api.chandrastation.com/cosmos/staking/v1beta1/validators/${operatorAddress}`;
    const response = await fetch(url, options);
    const { validator } = await response.json();
    const consensusPubkeyBase64 = validator?.consensus_pubkey?.key;

    if (consensusPubkeyBase64) {
      const addressData = sha256(fromBase64(consensusPubkeyBase64)).slice(0, 20);
      return toBech32(valconsPrefix, addressData);
    }

    return "";  

  } catch (error) {
    console.error("Error in getValconsAddressForValidator:", error);
    return "";
  }
}

const fetchWithRetry = async (url: RequestInfo | URL, options: RequestInit | undefined, retries = 3) => {
  for (let i = 0; i < retries; i++) {
      try {
          const response = await fetch(url, options);
          if (response.ok) return await response.json();
          throw new Error('Failed response');
      } catch (error) {
          console.error(`Attempt ${i + 1} failed for URL: ${url}. Error: ${error}`);
          if (i >= retries - 1) throw error;
      }
  }
};

export async function getValconsAddresses(nodeAddressIP: string): Promise<string[]> {
  try {
      const valoperAddresses = (await getSafeVals("https://althea.api.chandrastation.com")).notJailed;
      const valconsPrefix = "althea" + "valcons";
      const options = {
          method: "GET",
          headers: {
              Accept: "application/json",
          },
      };

      const consensusKeysPromises = valoperAddresses.map(async (valoperInfo) => {
          const url = `https://althea.api.chandrastation.com/cosmos/staking/v1beta1/validators/${valoperInfo.operator_address}`;
          const responseData = await fetchWithRetry(url, options);
          return responseData?.validator?.consensus_pubkey?.key;
      });

      const consensusKeys = await Promise.all(consensusKeysPromises);
      const valconsAddresses = consensusKeys
          .filter(Boolean)
          .map(key => {
              const addressData = sha256(fromBase64(key as string)).slice(0, 20);
              return toBech32(valconsPrefix, addressData);
          });

      return valconsAddresses;
  } catch (error) {
      console.error("Error in getValconsAddresses:", error);
      return [];
  }
}
export async function getSigningInfo(nodeAddressIP: string) {
  try {
    const valconsAddresses = await getValconsAddresses("https://althea.api.chandrastation.com");

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    const allSigningInfoPromises = valconsAddresses.map(async (address) => {
      try {
        const urlSigningInfo = `https://althea.api.chandrastation.com/cosmos/slashing/v1beta1/signing_infos/${address}`;
        const response = await fetch(urlSigningInfo, options);
        if (response.ok) {
          return await response.json();
        } else {
          console.error(`Error fetching signing info for address: ${address}. Status: ${response.status}`);
          return null;
        }
      } catch (error) {
        console.error(`Error fetching signing info for address: ${address}. Error: ${(error as Error).message}`);
        return null; 
      }
    });

    const allResults = await Promise.all(allSigningInfoPromises);

    let signingInfos: { [key: string]: any } = {};

    allResults.forEach((result, index) => {
      if (result && result.val_signing_info) {
        const address = valconsAddresses[index];
        const { tombstoned, missed_blocks_counter } = result.val_signing_info;
        const missedBlocks = parseInt(missed_blocks_counter, 10);
        signingInfos[address] = {
          tombstoned,
          missedBlocks,
        };
      }
    });

    return signingInfos;

  } catch (error) {
    console.error("Error in getSigningInfo:", (error as Error).message);
    return {}; // returning an empty object in case of an overall error
  }
}

export async function getSlashingInfo(nodeAddressIP: string) {
  const notJailedValidators = (await getSafeVals("https://althea.api.chandrastation.com")).notJailed;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const slashingInfoPromises = notJailedValidators.map(async (valoperInfo) => {
    const urlSlashingInfo = `https://althea.api.chandrastation.com/cosmos/distribution/v1beta1/validators/${valoperInfo.operator_address}/slashes`;
    const response = await fetch(urlSlashingInfo, options);
    const result = await response.json();

    return {
      validator: valoperInfo.operator_address,
      slashes: result.slashes && result.slashes.length > 0 ? result.slashes : [],
    };
  });

  const allSlashings = await Promise.all(slashingInfoPromises);

  return {
    slashings: allSlashings,
  };
}

export async function getValidatorsInfo(nodeAddressIP: string) {
  try {
    const { notJailed: notJailedValidators } = await getSafeVals("https://althea.api.chandrastation.com");
    const valconsAddressesMap: { [operator: string]: string } = {};

    // Fetch all valcons addresses in parallel
    await Promise.all(
      notJailedValidators.map(async (valoperInfo) => {
        const valconsAddress = await getValconsAddressForValidator(valoperInfo.operator_address, "https://althea.api.chandrastation.com");
        valconsAddressesMap[valoperInfo.operator_address] = valconsAddress;
      })
    );

    // Fetch signing and slashing info concurrently
    const [signingInfos, slashingsInfoResponse] = await Promise.all([
      getSigningInfo("https://althea.api.chandrastation.com"),
      getSlashingInfo("https://althea.api.chandrastation.com")
    ]);

    // Map slashing info for easy lookup
    const slashingsInfoMap: { [key: string]: number } = {};
    slashingsInfoResponse.slashings.forEach((slashInfo) => {
      slashingsInfoMap[slashInfo.validator] = slashInfo.slashes.length;
    });

    // Map validator data to desired format
    const validatorsData = notJailedValidators.map((valoperInfo) => {
      const valconsAddress = valconsAddressesMap[valoperInfo.operator_address];
      const validatorSignInfo = signingInfos[valconsAddress];
      return {
        moniker: valoperInfo.moniker,
        operator_address: valoperInfo.operator_address,
        tokens: valoperInfo.tokens,
        commission: valoperInfo.commission,
        valcons_address: valconsAddress,
        missedBlocks: validatorSignInfo?.missedBlocks || 0,
        tombstoned: validatorSignInfo?.tombstoned || false,
        slashings: slashingsInfoMap[valoperInfo.operator_address] || 0,
        score: 0,
        trueRank: 0,
      };
    });

   
    validatorsData.sort((a, b) => parseFloat(b.tokens) - parseFloat(a.tokens))
      .forEach((validator, index) => {
        validator.trueRank = index + 1; 
      });

    return validatorsData;

  } catch (error) {
    console.error("Error in getValidatorsInfo:", error);
    return []; 
  }
}


