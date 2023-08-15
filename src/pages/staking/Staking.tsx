import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyStaking from "./tabs/myStaking";
import AllDerevatives from "./tabs/allDerevatives";
import Styled from "./style";
import { useState } from "react";
import { useNetworkInfo } from "global/stores/networkInfo";
import {
  calculateTotalStaked,
  getAllValidatorData,
} from "./utils/allUserValidatorInfo";
import { ModalManager } from "./modals/modalManager";
import HelmetSEO from "global/components/seo";
import { Selected } from "pages/staking/components/selected";
import Select from "react-select";

import { CSearch } from "global/packages/src/components/atoms/Input";
import useStakingStore from "./stores/stakingStore";
import useStaking from "./hooks/useStaking";
import { onAltheaNetwork } from "global/utils/getAddressUtils";

const Staking = () => {
  const networkInfo = useNetworkInfo();
  const stakingStore = useStakingStore();
  const [isHovering, setIsHovering] = useState(false);

  const {
    validators,
    delegations,
    undelegations,
    userValidators,
    undelagatingValidators,
    handleClaimRewards,
    rewards,
    stakingApr,
    txFeeCheck,
  } = useStaking();

  return (
    <>
      <HelmetSEO
        title="Althea - Staking"
        description="Stake your ALTG tokens to participate in governance"
        link="staking"
      />
      <Styled>
        <ModalManager allValidators={validators} txBalanceChecks={txFeeCheck} />
        <Tabs className="tabs">
          <TabList className="tablist">
            <Tab
              className={isHovering ? "tab tab-hover" : "tab"}
              onMouseEnter={() => {
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
              onClick={() => {
                stakingStore.setInAllValidators(false);
              }}
            >
              my staking
            </Tab>
            <Tab
              className={isHovering ? "tab tab-hover" : "tab"}
              onClick={() => {
                stakingStore.setInAllValidators(true);
              }}
              onMouseEnter={() => {
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
            >
              all validators
            </Tab>

            <div
              className="sort-search"
              style={{
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                display: stakingStore.inAllValidators ? "flex" : "none",
              }}
            >
              <Selected
                style={{
                  width: "10rem",
                }}
              >
                <Select
                  className="react-select-container"
                  styles={{
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      color: "var(--primary-color)",
                    }),
                  }}
                  classNamePrefix="react-select"
                  options={[
                    {
                      label: "active",
                      value: 1,
                    },
                    {
                      label: "inactive",
                      value: 2,
                    },
                    {
                      label: "all",
                      value: 3,
                    },
                  ]}
                  onChange={(val) => {
                    stakingStore.setValidatorSort(val?.value ?? 1);
                  }}
                  defaultValue={{
                    label: "active",
                    value: 1,
                  }}
                  isSearchable={false}
                  placeholder="active"
                />
              </Selected>
              <CSearch
                //   type={"search"}
                style={{
                  textAlign: "left",
                  paddingRight: "1rem",
                }}
                value={stakingStore.searchQuery}
                onChange={(e) => stakingStore.setSearchQuery(e.target.value)}
                placeholder="search..."
              />
            </div>
          </TabList>
          <TabPanel>
            <MyStaking
              onRewards={handleClaimRewards}
              connected={onAltheaNetwork(Number(networkInfo.chainId))}
              account={networkInfo.account ?? ""}
              balance={networkInfo.balance}
              totalStaked={calculateTotalStaked(delegations)}
              totalUnbonding={undelegations.total_unbonding}
              totalRewards={rewards}
              apr={stakingApr}
              userValidationInfo={userValidators}
              undelegationValidators={undelagatingValidators}
              canClaim={txFeeCheck.claimRewards}
            />
          </TabPanel>
          <TabPanel>
            <AllDerevatives
              validators={getAllValidatorData(
                validators,
                delegations,
                undelegations
              )}
            />
          </TabPanel>
        </Tabs>
      </Styled>
    </>
  );
};

export default Staking;
