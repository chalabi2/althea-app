import styled from "@emotion/styled";
import HelmetSEO from "global/components/seo";
import { pageList } from "global/config/pageList";
import { Text } from "global/packages/src";
import { Mixpanel } from "mixpanel";
import { NavLink } from "react-router-dom";
import bg from "assets/bg.jpg";
import React, { useContext} from "react";
import { Banner } from "./components/Banner";
import { ThemeContext } from "ThemeProvider";


const FontOne = styled.span`
font-family: 'Macan';
`;

const FontTwo = styled.span`
font-family: 'MacanFont';
`;

export function parseText(text: string): JSX.Element {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, idx) => {
        const usedChars = new Set();
        return (
          <React.Fragment key={idx}>
            {word.split('').map((char, i) => {
              if (!usedChars.has(char.toUpperCase()) && 'GANTO'.includes(char.toUpperCase())) {
                usedChars.add(char.toUpperCase());
                return <FontTwo key={i}>{char}</FontTwo>;
              } else {
                return <FontOne key={i}>{char}</FontOne>;
              }
            })}
            {(idx < words.length - 1) && <>&nbsp;</>}
          </React.Fragment>
        );
      })}
    </>
  );
}

const Homepage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HelmetSEO
        title="Althea Web App"
        description="Althea Web App enables IFi accesibility"
        link=""
      />
    <Styled theme={theme}>
        <ul className="options" id="routes">
          {pageList.map((page, idx) => {
            return page.showInMenu ? (
<NavLink
    to={page.link}
    key={page.name}
    id={page.name}
    onClick={() =>
        Mixpanel.events.landingPageActions.navigatedTo(page.name)
    }
>
    <Text
        type="title"
        size="title1"
        align="left"
        className="navLink"
    >
        {parseText(page.name)}
    </Text>
</NavLink>
            ) : null;
          })}
        </ul>
        <div className="right">
        {/*<Banner />*/}
        </div>
        {/* <div className="bg"> </div> */}
      </Styled>
    </>
  );
};
interface StyledProps {
  theme: string;
}
const Styled = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  height: 100%;
  z-index: 0;

  .right {
    display: grid;
    place-items: center;
  }
  .options {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 2;
    align-items: flex-start;
    width: 100%;
  }
  .bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: black;
    background: url(${bg}),
      linear-gradient(90deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 60%),
      linear-gradient(180deg, #0077FF 0%, #0077FF 50%, rgba(0, 0, 0, 1) 100%);
    background-position: 100%;
    background-size: auto 100%;
    top: 0;
    background-repeat: no-repeat, repeat;

    &::after {
      content: " ";
      position: absolute;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(
        90deg,
        #00000015,
        #000000b9,
        #00000013,
        #000000c0
      );
      background-size: 200% 200%;
      animation: movingFade 10s ease infinite;
      @keyframes movingFade {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  a {
    width: 60%;
  }

.navLink {
  height: 68px;
  transition: all 0.3s ease;
  width: 100%;
  /* padding-left: 1rem; */
  border-radius: 4px;
  transition: background-color 0.6s ease-in;
  transition: transform 0.3s ease-in-out;
  background-color: transparent;
  background-size: 0% 100%;
  &:hover {
    padding-left: 1rem;

    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    background-image: ${props => props.theme === 'dark' 
      ? "linear-gradient(to right, #0E2137 0%, #0E2137 40%, #0E2137 100%)" 
      : "linear-gradient(to right, #f3f3f3 0%, #f3f3f3 40%, #f3f3f3 100%)"};
    background-repeat: no-repeat;
    background-size: 200% 100%;
    transition: background-size 0.7s, background-color 0.7s;
    transform: scale(1.1);
  }
}
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .options {
      width: 100vw;
    }
    .right {
      display: flex;
      width: 100%;
    }
    a {
      width: 80%;
      margin: 0 auto;
    }

    .navLink {
      font-size: 24px;
      width: 100%;
    }
  }
`;
export default Homepage;
