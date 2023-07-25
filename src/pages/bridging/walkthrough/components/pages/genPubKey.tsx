import styled from "@emotion/styled";
import { PrimaryButton, Text } from "global/packages/src";
import BaseStyled from "../layout";
import { PubKeyStyled } from "../../Walkthrough";
import warningRedIcon from "assets/warning_red.svg";
import NotConnected from "global/packages/src/components/molecules/NotConnected";
import { useEtherBalance } from "@usedapp/core";
import { useNetworkInfo } from "global/stores/networkInfo";
import { onAltheaNetwork } from "global/utils/getAddressUtils";
import { addNetwork } from "global/utils/walletConnect/addAltheaToWallet";
import { generatePubKey } from "global/utils/altheaTransactions/publicKey";
import { AltheaMainnet, AltheaTestnet, onTestnet } from "global/config/networks";
import { parseUnits } from "ethers/lib/utils";
import { useNavigate } from "react-router-dom";

interface GenPubKeyProps {
  pubKeySuccess: string;
  setPubKeySuccess: (status: string) => void;
}
export const GenPubKeyWalkthrough = ({
  pubKeySuccess,
  setPubKeySuccess,
}: GenPubKeyProps) => {
  const navigate = useNavigate();
  const networkInfo = useNetworkInfo();
  const altheaBalance = useEtherBalance(networkInfo.account, {
    chainId: AltheaMainnet.chainId,
  });
  const altheaTestBalance = useEtherBalance(networkInfo.account, {
    chainId: AltheaTestnet.chainId,
  });
  const ethBalance = useEtherBalance(networkInfo.account, { chainId: 1 });
  const canPubKey =
    (ethBalance?.gte(parseUnits("0.01")) ||
      (onTestnet(Number(networkInfo.chainId)) &&
        altheaTestBalance?.gte(parseUnits("0.5"))) ||
      altheaBalance?.gte(parseUnits("0.5"))) ??
    false;

  return (
    <Styled>
      {!canPubKey && (
        <ErrorStyle>
          <NotConnected
            title="you don’t have enough Althea or ETH to generate a public key"
            subtext="In order to generate a public key, you must have at least 0.5 ALTHEA or 0.01 ETH on mainnet"
            buttonText="Home"
            onClick={() => {
              navigate("/");
            }}
            icon={warningRedIcon}
          />
        </ErrorStyle>
      )}{" "}
      {canPubKey && (
        <>
          <header>
            <Text type="title" size="title2">
              Generate Public Key
            </Text>
            <div>
              <Text type="text" size="text2">
                By clicking &quot;generate&quot; you are creating a public key
                for your account to allow you to make transactions on the Althea
                network
              </Text>
            </div>
          </header>
          <section>
            <div className="box">
              <Text type="text" size="title3">
                Transaction Type
              </Text>
              <Text type="text" size="title3">
                Generate public key
              </Text>
              <Text type="text" size="title3">
                Transaction Status:
              </Text>
              <Text type="text" size="title3">
                {pubKeySuccess ?? "None"}
              </Text>
            </div>
            <PrimaryButton
              onClick={() => {
                if (!onAltheaNetwork(Number(networkInfo.chainId))) {
                  addNetwork(
                    onTestnet(Number(networkInfo.chainId))
                      ? AltheaTestnet.chainId
                      : AltheaMainnet.chainId
                  );
                } else {
                  generatePubKey(
                    networkInfo.account,
                    setPubKeySuccess,
                    Number(networkInfo.chainId)
                  );
                }
              }}
              disabled={pubKeySuccess != "None"}
              weight="bold"
            >
              Confirm
            </PrimaryButton>
          </section>
        </>
      )}
    </Styled>
  );
};

const Styled = styled(BaseStyled)`
  padding: 2rem;
  justify-content: center;
  margin: 0.1rem 0;
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border: 1px solid #222;
    background-color: #111;
    border-radius: 4px;
    grid-gap: 0;
    & > * {
      border: 1px solid #1e1e1e;
      padding: 1rem;
    }
  }
  section {
    align-items: center;
    button {
      width: 16rem;
    }
  }
`;
const ErrorStyle = styled.div`
  p {
    color: var(--error-color);
  }

  button {
    background: var(--error-color);
    &:hover {
      background: #e13838;
    }
  }
`;
