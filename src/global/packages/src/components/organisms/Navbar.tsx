import { useEffect, useState } from "react";
import { Text } from "../atoms/Text";
import Alert from "../atoms/Alert";
import styled from "@emotion/styled";
import ConnectWallet from "./ConnectWallet";
import MenuBar from "./MenuBar";
import ModalManager from "../molecules/ModalManager";
import { PageObject } from "global/config/pageList";
import ThemeSwitcher from "global/components/ThemeSwitcher";

interface Props {
  onClick: () => void;
  chainId: number;
  account: string;
  balance: string;
  isConnected: boolean;
  currency: string;
  siteLogo: string;
  currencyIcon: string;
  pageList: PageObject[];
  currentPage?: string;
}

const FontOne = styled.span`
font-family: 'Macan';
font-size: '12px;
`;

const FontTwo = styled.span`
font-family: 'MacanFont';
font-size: '12px;
`;

function parseText(text: string) {
  const words = text.split(' ');
  return words.map((word, idx) => {
    const usedChars = new Set();
    return (
      <>
        {word.split('').map(char => {
          if (!usedChars.has(char.toUpperCase()) && 'GANTO'.includes(char.toUpperCase())) {
            usedChars.add(char.toUpperCase());
            return <FontTwo>{char}</FontTwo>;
          } else {
            return <FontOne>{char}</FontOne>;
          }
        })}
        {(idx < words.length - 1) && <>&nbsp;</>}
      </>
    );
  });
}

export const NavBar = (props: Props) => {
  const { chainId, siteLogo: logo, currentPage, pageList } = props;

  const [onScroll, setOnScroll] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 2) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Container>
      <Alert />
      <nav className={onScroll ? "scroll" : ""}>
        <div className="menu">
          <MenuBar currentPage={currentPage} pageList={pageList} />
          <a id="logo" href="/althea-app">
            <img src={logo} />
            <div
              style={{
                paddingLeft: "1",
                transform: "translateY(-2px)",
              }}
            >
            </div>
          </a>
        </div>

        <Text
          id="title"
          type="title"
          size="title2"
          style={{
            transform: "translateY(-3px)",
            marginRight: "-112px",
          }}
        >
          {parseText(currentPage ?? "home")}
        </Text>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ marginRight: '15px' }}>
              <ConnectWallet {...props} />
            </div>
            <ThemeSwitcher />
          </div>
        <ModalManager chainId={chainId} />
      </nav>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 12;
  transition: all 1s;

  .scroll {
    animation: scroll-down 1s forwards ease;
  }

  @keyframes scroll-down {
    0% {
      border-bottom: 1px solid transparent;
      background-color: transparent;
      backdrop-filter: blur(0px);
    }
    100% {
      border-bottom: 1px solid var(--primary-color);
      background-color: rgba(0, 119, 255, 0.25);
      backdrop-filter: blur(5px);
    }
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
  & > nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease-in-out;
    height: 80px;
    padding: 0 1rem;
    .menu {
      display: flex;
    }
    .wallet {
      display: flex;
      justify-content: end;
    }
    #title {
      /* font-size: 44px; */
      letter-spacing: -0.08em;
    }
    #logo {
      color: var(--primary-color);
      font-weight: bold;
      font-size: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      text-decoration: none;
      margin-left: 1rem;
    }

    @media (max-width: 1000px) {
      #logo {
        display: none;
      }

      #title {
        font-size: 22px;
        flex: 8 !important;
      }

      .hide-on-mobile {
        display: none;
      }

      button {
        padding: 0.5rem;
      }
    }
  }
`;
