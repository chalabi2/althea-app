import styled from "@emotion/styled";
import LoadingComponent from "./loadingComponent";

const Loading = () => {
  return (
    <Styled>
     <LoadingComponent/>
    </Styled>
  );
};

export default Loading;
const Styled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
