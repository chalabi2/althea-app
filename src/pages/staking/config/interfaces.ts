import { BigNumber } from "ethers";

export interface Validator {
  commission: {
    commission_rates: {
      max_change_rate: string;
      max_rate: string;
      rate: string;
    };
    update_time: string;
  };
  consensus_pubkey: {
    "@type": string;
    key: string;
  };
  delegator_shares: string;
  description: {
    details: string;
    identity: string;
    moniker: string;
    security_contact: string;
    website: string;
  };
  jailed: boolean;
  min_self_delegation: string;
  operator_address: string;
  moniker: string;
  status: string;
  tokens: string;
  unbonding_height: string;
  unbonding_time: string;
}
interface Coin {
  denom: string;
  amount: string;
}
export interface DelegationResponse {
  balance: Coin;
  delegation: {
    delegator_address: string;
    shares: string;
    validator_address: string;
  };
}

export interface lockout {
  complete_time_stamp: string;
  value_of_coin: BigNumber;
}
export interface UndelegatingValidator {
  name: string;
  validator_unbonding: BigNumber;
  lockouts?: lockout[];
}

export interface UndelegationMap {
  total_unbonding: BigNumber;
  validators?: UndelegatingValidator[];
}

export interface MyStakingProps {
  connected: boolean;
  account: string;
  balance: BigNumber;
  totalStaked: BigNumber;
  totalUnbonding: BigNumber;
  totalRewards: BigNumber;
  apr: string;
  userValidationInfo: MasterValidatorProps[];
  undelegationValidators: MasterValidatorProps[];
  onRewards: () => Promise<void>;
  canClaim: boolean;
}
export interface AllStakingProps {
  validators: Validator[];
}
export enum StakingTransactionType {
  DELEGATE = "DELEGATE",
  UNDELEGATE = "UNDELEGATE",
  REDELEGATE = "REDELEGATE",
  CLAIM_REWARDS = "CLAIM_REWARDS",
}

export interface ValidatorTableProps {
  validators: Validator[];
  userDelegations: DelegationResponse[];
  userUndelegations: UndelegationMap;
}

export interface MasterValidatorProps {
  validator: Validator;
  userDelegations: DelegationResponse | undefined;
  undelagatingInfo?: UndelegatingValidator | undefined;
}

//used to check if the user has enough funds to perform each transaction
export interface TxFeeBalanceCheck {
  claimRewards: boolean;
  delegate: boolean;
  redelegate: boolean;
  undelegate: boolean;
}

//used to initiate the modal validator so it is never undefined
export const EmptyActiveValidator: MasterValidatorProps = {
  validator: {
    commission: {
      commission_rates: {
        max_change_rate: "0",
        max_rate: "0",
        rate: "0",
      },
      update_time: "0",
    },
    consensus_pubkey: {
      "@type": "0",
      key: "0",
    },
    delegator_shares: "0",
    description: {
      details: "0",
      identity: "0",
      moniker: "0",
      security_contact: "0",
      website: "0",
    },
    moniker: "",
    jailed: false,
    min_self_delegation: "0",
    operator_address: "0",
    status: "0",
    tokens: "0",
    unbonding_height: "0",
    unbonding_time: "0",
  },
  userDelegations: undefined,
  undelagatingInfo: undefined,
};
