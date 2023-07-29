/* eslint-disable jsx-a11y/no-static-element-interactions */
import menuImg from "assets/icons/menu.svg";
import closeImg from "assets/icons/close.svg";
import ImageButton from "global/components/ImageButton";
import { useState, useContext } from "react";
import styled from "@emotion/styled";
import logoLight from "assets/logo.svg";
import logoDark from "assets/altheadark.svg";
import { ThemeContext } from "ThemeProvider";
import { Link } from "react-router-dom";
import { OutlinedButton } from "../atoms/Button";
import { addAltheaToKeplr } from "../../utils/walletFunctionality";
import useGlobalModals, { ModalType } from "../../stores/useModals";
import { Text } from "../atoms/Text";
import { PageObject } from "global/config/pageList";
import { Mixpanel } from "mixpanel";
import { addNetwork } from "global/utils/walletConnect/addAltheaToWallet";
interface BurgerMenuProps {
  pageList?: PageObject[];
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

const MenuBar = ({ currentPage, pageList }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const setModalType = useGlobalModals((state) => state.setModalType);
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useContext(ThemeContext);
  const altheaFullImg = theme === 'light' ? logoDark : logoLight;

  return (
    <Styled isOpen={isOpen} theme={theme}>
      {/* <Styled className={isOpen ? "active" : ""}> */}
      <div
        className="menu-btn burger"
        // style={{
        //   transform: isOpen ? "translateX(200px)" : "translateX(0)",
        // }}
      >
        <ImageButton
          src={menuImg}
          height={45}
          width={27}
          alt="menu"
          rotateImage={true}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div
        className="overlay"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div className="content">
        <header>
          <img width={140} src={altheaFullImg} alt="althea logo" />
          <div className="menu-btn" id="close">
            <ImageButton
              src={closeImg}
              width={27}
              height={27}
              alt="menu"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </header>
        <div className="nav-container">
          <div
            className="navlinks"
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            {pageList?.map((page) => {
              return page.showInMenu ? (
<StyledNavLink
                  id={page.name}
                  to={page.link}
                  key={page.name}
                  className={`menu-item ${currentPage == page.name && !isHovering
                      ? "active-bar active"
                      : currentPage == page.name && isHovering
                        ? "active-bar "
                        : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    Mixpanel.events.landingPageActions.navigatedTo(page.name);
                  } } theme={theme === 'dark' ? 'light' : 'dark'}>
    <Text
        size="title2"
        type="title"
        align="left"
        id={page.name}
        className="navLink"
    >
        {parseText(page.name)}
    </Text>
</StyledNavLink>
              ) : null;
            })}
          </div>
        </div>
        <footer>
        <OutlinedButton
    filled
    weight="bold"
    onClick={async () => {
        // addTokens(chainId);
        await addNetwork();
    }}
>
    ADD TO METAMASK
</OutlinedButton>
          {/* <OutlinedButton
          onClick={() => {
            addCTokens(chainId);
          }}
          style={styles.buttonStyle}
        >
          import cTokens
        </OutlinedButton> */}
          <OutlinedButton
            filled
            weight="bold"
            onClick={() => {
              addAltheaToKeplr();
            }}
          >
            ADD TO KEPLR
          </OutlinedButton>
          <div className="links">
            <a href="https://althea.canny.io/" target="_blank" rel="noreferrer">
              report a bug
            </a>
            <a href="https://docs.althea.io/" target="_blank" rel="noreferrer">
              docs
            </a>
          </div>
        </footer>
      </div>
    </Styled>
  );
};

interface StyledProps {
  isOpen: boolean;
  theme: string;
}
const Styled = styled.div<StyledProps>`
  .menu-btn {
    transition: all 0.3s;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #close {
    transition: transform 0.3s;
    padding-top: -10px;

    &:hover {
      transform: rotateZ(90deg);
    }
  }

  .nav-container {
    flex: 2;
    align-items: center;
    display: flex;
  }
  .navlinks {
    display: flex;
    width: 100%;
    height: min-content;
    flex-direction: column;
  }
  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: calc(100%);
    height: 100vh;
    background-color: #05030b52;
    /* backdrop-filter: blur(1px); */
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

    transition: opacity 0.3s ease;
    pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  }

  .content {
    position: absolute;
    top: 0%;
    left: ${({ isOpen }) => (isOpen ? "0px" : "-260px")};
    background-color: ${({ theme }) => theme === 'light' ? '#ffffff' : '#101112'};
    width: 260px;
    height: 100vh;
    z-index: 100;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .links {
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: -0.03em;
    text-decoration-line: underline;
    color: #101112;
    opacity: 0.7;
    a {
      transition: color 0.2s ease;

      &:hover {
          color: #0099FF;
      }
  }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 28px 24px 28px 2rem;
  }
  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;

    button {
      height: 48px;
    }
  }

  .active {
    &::before {
      transform: scaleY(1);
    }
    opacity: 1;
  }

  .active-bar {
    opacity: 1;
    border-right: 4px solid ;
  }

  @media (max-width: 1000px) {
    .burger {
      transform: translateY(-10px);
    }
  }
`;

interface StyledPropsTwo {
  theme: string;
  to: string;
}
const StyledNavLink = styled(Link)<StyledPropsTwo>`
  display: flex;
  text-align: left;
  width: 100%;
  padding: 1rem 2rem;
  opacity: 0.5;
  position: relative;
  transition: all 0.1s;

  /* &:hover {
    background-color: #101112;
    opacity: 1;
  } */

  &:hover {
    opacity: 1;
  }
  &:hover::before {
    transform: scaleY(1);
  }
  &:before {
    content: " ";
    position: absolute;
    transition: all 130ms ease-in;
    background-color: ${props => {
      if (props.theme === 'light') return '#101112';
      if (props.theme === 'dark') return 'white';
    }};
    transform: scaleY(0);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export default MenuBar;
