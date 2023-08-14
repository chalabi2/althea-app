import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import {
  DelegationResponse,
  MasterValidatorProps,
  StakingTransactionType,
  TxFeeBalanceCheck,
  UndelegationMap,
  Validator,
} from "../config/interfaces";
import {
  getDelegationsForAddress,
  getDistributionRewards,
  getUndelegationsForAddress,
  getValidators,
} from "pages/staking/utils/transactionHelpers";
import { useNetworkInfo } from "global/stores/networkInfo";
import { BigNumber } from "ethers";
import {
  getAllValidatorData,
  getSafeVals,
  getSigningInfo,
  getSlashingInfo,
  getStakingApr,
  getValconsAddresses,
  getValidatorsInfo,
} from "../utils/allUserValidatorInfo";
import { Fee } from "global/config/cosmosConstants";
import {
  claimRewardFee,
  delegateFee,
  reDelegateFee,
  unbondingFee,
} from "../config/fees";
import { parseEther } from "ethers/lib/utils";
import { claimStakingRewards, stakingTx } from "../utils/transactions";
import { useTransactionStore } from "global/stores/transactionStore";
import useValidatorModalStore, {
  ValidatorModalType,
} from "../stores/validatorModalStore";
import { getCosmosAPIEndpoint } from "global/utils/getAddressUtils";
import { delegateTransaction } from "../modals/stakingModal";

import amount from "global/components/amount";
import { convertStringToBigNumber } from "global/utils/formattingNumbers";
import { getTop10Validators } from "../utils/groupDelegationParams";

const useStaking = (): {
  validators: Validator[];
  delegations: DelegationResponse[];
  undelegations: UndelegationMap;
  userValidators: MasterValidatorProps[];
  undelagatingValidators: MasterValidatorProps[];
  handleClaimRewards: () => Promise<void>;
  handleAutoStake: () => Promise<void>;
  rewards: BigNumber;
  stakingApr: string;
  txFeeCheck: TxFeeBalanceCheck;
} => {
  const modalStore = useValidatorModalStore();
  const networkInfo = useNetworkInfo();
  const txStore = useTransactionStore();
  // get all of the validators
  const [validators, setValidators] = useState<Validator[]>([]);
  const [stakingApr, setStakingApr] = useState("0");
  // get all of the validators the user has staked to
  const [delegations, setDelegations] = useState<DelegationResponse[]>([]);
  // get all of the undelegations for the user
  const [undelegations, setUndelegations] = useState<UndelegationMap>({
    total_unbonding: BigNumber.from("0"),
  });
  // get all of the rewards for the user
  const [rewards, setRewards] = useState<BigNumber>(BigNumber.from("0"));
  async function handleClaimRewards() {
    modalStore.open(ValidatorModalType.STAKE);
    claimStakingRewards(
      txStore,
      Number(networkInfo.chainId),
      networkInfo.account ?? "",
      userValidators
    );
  }

  async function handleAutoStake() {
    modalStore.open(ValidatorModalType.AUTO_DELEGATE);

    const operators = validators.map((validator: { address: string; name: string; }) => ({
      address: validator.address,
      name: validator.name
  }));
  
    // Iterate through the operators and delegate to each one.
    for (let operator of operators) {
        const delegationDetails = {
            account: networkInfo.account ?? "",
            chainId: Number(networkInfo.chainId),
            amount: convertStringToBigNumber(amount, 18).toString(), // Amount can be dynamically decided too based on your logic.
            newOperator: {
                address: operator.address,
                name: operator.name
            },
            operator: {
                address: operator.address,
                name: operator.name
            },
        };
        
        // Trigger the delegate transaction for each operator.
        await delegateTransaction(txStore, delegationDetails); 
    }
}
   async function autoDelegate() {
  //   modalStore.open(ValidatorModalType.AUTO_DELEGATE);
  //   const delegationDetails = {
  //     account: account ?? "",
  //     chainId,
  //     amount: convertStringToBigNumber(amount, 18).toString(),
  //     newOperator: {
  //       address: validators,
  //       name: validators,
  //     },
  //     operator: {
  //       address: validators,
  //       name: validators
  //     },
  //   };
  
  //   // Trigger the delegate transaction
  //   delegateTransaction(txStore, delegationDetails);
   }

  async function getAllData() {
    if (networkInfo.account) {
      setDelegations(
        await getDelegationsForAddress(
          getCosmosAPIEndpoint(Number(networkInfo.chainId)),
          networkInfo.account
        )
      );
      setRewards(
        await getDistributionRewards(
          getCosmosAPIEndpoint(Number(networkInfo.chainId)),
          networkInfo.account
        )
      );
      setUndelegations(
        await getUndelegationsForAddress(
          getCosmosAPIEndpoint(Number(networkInfo.chainId)),
          networkInfo.account
        )
      );
    }
    setValidators(
      await getValidators(getCosmosAPIEndpoint(Number(networkInfo.chainId)))
    );
    setStakingApr(
      await getStakingApr(getCosmosAPIEndpoint(Number(networkInfo.chainId)))
    );
  }

  //get new data every 6 seconds for the block time
  useEffect(() => {
    const interval = setInterval(async () => {
      await getAllData();
    }, 6000);
    return () => clearInterval(interval);
  }, [networkInfo.account]);
  useEffect(() => {
    getAllData();
  }, [networkInfo.account]);

  const allValidatorData = getAllValidatorData(
    validators,
    delegations,
    undelegations
  );

  const undelagatingValidators = allValidatorData.filter(
    (validator) => !!validator.undelagatingInfo
  );
  const userValidators = allValidatorData.filter(
    (validator) => !!validator.userDelegations
  );

  function getTotalFee(fee: Fee, additionalFee?: BigNumber): BigNumber {
    return BigNumber.from(fee.amount)
      .add(fee.gas)
      .add(additionalFee ?? 0);
  }
  function enoughBalanceForFee(balance: BigNumber, fee: BigNumber) {
    return balance.gt(fee);
  }
  const enoughBalanceForTxFees = () => {
    const balance = networkInfo.balance;
    return {
      claimRewards: enoughBalanceForFee(balance, getTotalFee(claimRewardFee)),
      delegate: enoughBalanceForFee(
        balance,
        getTotalFee(delegateFee, parseEther("1"))
      ),
      redelegate: enoughBalanceForFee(balance, getTotalFee(reDelegateFee)),
      undelegate: enoughBalanceForFee(balance, getTotalFee(unbondingFee)),
    };
  };

  return {
    validators,
    delegations,
    undelegations,
    userValidators,
    undelagatingValidators,
    handleClaimRewards,
    handleAutoStake,
    rewards,
    stakingApr,
    txFeeCheck: enoughBalanceForTxFees(),
  };
};

export default useStaking;
