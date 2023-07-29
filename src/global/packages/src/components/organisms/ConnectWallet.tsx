import { HybirdButton, OutlinedButton, Text } from "global/packages/src";
import { formatBigNumber } from "../../utils/formatNumbers";
import Popup from "reactjs-popup";
import WalletModal from "./WalletModal";
import { useEthers } from "@usedapp/core";
import { Mixpanel } from "mixpanel";
import { useContext } from "react";
import { ThemeContext } from "ThemeProvider";

interface Props {
  isConnected: boolean;
  balance: string;
  currency: string;
  account: string;
  chainId: number;
  currencyIcon: string;
  onClick: () => void;
}
const ConnectWallet = ({ balance, currency, onClick, currencyIcon }: Props) => {
  const { account } = useEthers();
  const { theme } = useContext(ThemeContext);
  return (
    <div className="wallet">
      {account != null ? (
        <Popup
          arrow={false}
          offsetY={18}
          closeOnEscape
          position="bottom right"
          trigger={
            <div>
              <HybirdButton
              type="outlined"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  letterSpacing: "-0.03em",
                  borderRadius: "4px",
                  height: "32px",
                  fontFamily: "Macan"
                }}
                theme={theme}
              >
                <span className="center ">
                  <img src={currencyIcon} height={14} />
                  {formatBigNumber(balance)}&nbsp;
                </span>
                <span
                  className="hide-on-mobile"
                  style={{
                    fontWeight: "500",
                    gap: "10px",
                    fontFamily: "Macan"
                  }}
                >
                  {currency != "ALTHEA" && currency != "ETH" ? currency : null}
                </span>
                <div
                  className="hide-on-mobile"
                  style={{
                    marginLeft: "10px",
                    marginRight: "2px",
                    height: "32px",
                    background: "var(--primary-color)",
                    width: "1px",
                    fontFamily: "Macan"
                  }}
                ></div>
                <span className="hide-on-mobile">
                  &nbsp;
                  {account?.substring(0, 5) + "..." + account.slice(-4)}
                </span>
              </HybirdButton>
            </div>
          }
        >
          <WalletModal
            account={account}
            balance={balance}
            currency={currency}
            icon={currencyIcon}
          />
        </Popup>
      ) : (
        <OutlinedButton
          onClick={() => {
            Mixpanel.events.connections.walletConnect(true);
            onClick();
          }}
          style={{
            fontSize: "18px",
            borderRadius: "4px",
            height: "32px",
            fontFamily: "Macan"
          }}
        >
          <Text type="text" size="text4" bold>
            CONNECT WALLET
          </Text>
        </OutlinedButton>
      )}
    </div>
  );
};

export default ConnectWallet;
