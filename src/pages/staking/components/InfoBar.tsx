import styled from "@emotion/styled";
import { HybirdButton, OutlinedButton, Text } from "global/packages/src";
import { ThemeContext } from "ThemeProvider";
import { useContext } from "react";
import validatorModalStore, { ValidatorModalType } from "../stores/validatorModalStore";
import { getTop10Validators } from "../utils/groupDelegationParams";
import { useState } from "react";


interface Props {
  balance: string;
  totalStaked: string;
  totalUnbonding: string;
  rewards: string;
  apr: string;
  onRewards: () => Promise<void>;
  canClaim: boolean;
}
interface ValidatorInfo {
  moniker: string;
  operator_address: string;
  tokens: string; 
  commission: string; 
  missedBlocks: number;
  score: number;
  slashings: number;
  tombstoned: boolean;
  valcons_address: string;
  trueRank?: number;
}

export type ValidatorsList = ValidatorInfo[];

const InfoBar = ({ totalStaked, rewards, apr, onRewards, canClaim }: Props) => {
  const { theme } = useContext(ThemeContext);
  
  const [topValidators, setTopValidators] = useState<ValidatorInfo[]>([]); 
  const openModal = validatorModalStore((state: { open: any; }) => state.open);
  const { setActiveValidators, open } = validatorModalStore();
  const handleAutoStake = async () => {
    open(ValidatorModalType.AUTO_DELEGATE);
    const fetchedTopValidators: ValidatorsList = await getTop10Validators("https://althea.api.chandrastation.com");

    setTopValidators(fetchedTopValidators);

    setActiveValidators(fetchedTopValidators);
    
}
  return (
    <Styled>
      <div
        className="dual-item"
        style={{
          margin: "0",
        }}
      >
        <div className="top">
          <Text type="text" size="text1">
            total staked
          </Text>
        </div>
        <div className="bottom">
          <Text type="text">{totalStaked}</Text>
        </div>
      </div>
      <div className="separator"></div>
      <div className="dual-item">
        <div className="top">
          <Text type="text" size="text1">
            apr
          </Text>
        </div>
        <div className="bottom">
          <Text type="text">{apr}%</Text>
        </div>
      </div>
      <div className="separator"></div>

      <div className="dual-item">
        <div className="top">
          <Text type="text" size="text1">
            rewards
          </Text>
        </div>
        <div className="bottom">
          <Text type="text">{rewards}</Text>
        </div>
      </div>
      <div className="buttons-container">
        <HybirdButton
          type="outlined"
          style={{
            height: "big",
          }}
          theme={theme}
          disabled={Number(rewards) == 0 || !canClaim}
          onClick={onRewards}
        >
          <Text size="text2" type="text" bold>
            claim rewards
          </Text>
        </HybirdButton>
        <HybirdButton
          type="outlined"
          style={{
            height: "big",
          }}
          theme={theme}
          onClick={handleAutoStake} 
        >
          <Text size="text2" type="text" bold>
            multi stake
          </Text>
        </HybirdButton>
      </div>
    </Styled>
  );
};


const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  padding: 40px 0;

  .separator {
    height: 80px;
    border-left: 1px solid var(--primary-color);
  }
  .dual-item {
    display: flex;
    flex-grow: 1;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 0 20px;
    align-items: flex-start;
    gap: 4px;
    position: relative;
  }
  .top {
    font-size: 14px;
  }
  .bottom {
    p {
      font-size: 40px !important;
    }
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* space between buttons */
    
    /* Add equal width to the buttons */
    & > * {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    gap: 1rem;
    flex-direction: column;

    .separator {
      height: 1px;
      width: 80%;
      border-bottom: 1px solid var(--primary-color);
      opacity: 0.4;
    }
  }
`;
export default InfoBar;
