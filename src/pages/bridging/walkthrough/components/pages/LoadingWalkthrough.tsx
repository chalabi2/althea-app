import styled from "@emotion/styled";
import LoadingComponent from "global/components/loadingComponent";
import { Text } from "global/packages/src";
import { useEffect, useState } from "react";

interface Props {
  delay: number;
}
const LoadingWalkthrough = ({ delay }: Props) => {
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setDone(true), delay);
  }, []);

  if (isDone) {
    return <></>;
  }
  return (
    <Styled>
      <Text type="text" size="title2">
        Bridge Walkthrough
      </Text>

     <LoadingComponent size="lg"/>
      <div
        style={{
          maxWidth: "500px",
        }}
      >
        <Text type="text">Setting up the walkthrough for you</Text>
        <Text type="text" size="text3">
          This walkthrough steps you through bridging for a simpler experience.
        </Text>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: transparent;
  z-index: 2;
  padding: 2rem;
  top: 0;
  left: 0;
`;

export default LoadingWalkthrough;
