import styled from "@emotion/styled";
import { OutlinedButton, Text } from "global/packages/src";
import bannerImg from "assets/blocksbackground.png";

export const Banner = () => {
  return (
    <Styled>
      <Text type="text" size="title2" align="left" >
        The Althea iFI Hackathon
      </Text>
      <Text align="left">- 40 Days</Text>
      <Text align="left">- june 19 - August 16</Text>
      <Text align="left">
        Join the Althea iFI Hackathon for apps, infrastructure, and original
        work.
      </Text>
      <div className="spacer"></div>
      <OutlinedButton
        onClick={() => {
          window.open("https://thecoh.build/");
        }}
      >
        Apply to hack &gt;
      </OutlinedButton>
    </Styled>
  );
};

const Styled = styled.div`
  color: grey; // This will apply the grey color to all text within this component
  width: 400px;
  height: 500px;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #0077FF;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: url(${bannerImg});
  background-size: cover;
  .spacer {
    flex-grow: 1;
  }
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 1.4rem;
  }
`;
