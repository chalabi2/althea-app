import styled from "@emotion/styled";
import { Text } from "global/packages/src";
import BaseStyled from "../layout";

import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

const NoFunds = () => {
  return (
    <Styled>
      <FaExclamationTriangle color="var(--primary-color)" size={"80px"} />
      <Text type="text" size="title2">
        Oops, looks like you have no funds to transfer
      </Text>
      <Text type="text">
        To use the bridge, you must have either USDC, USDT, or WETH on the
        Ethereum network, or USDC, USDT, ETH, or ATOM on the Althea network.
        Currently, it appears that you do not have any funds on either network.
      </Text>
    </Styled>
  );
};

const Styled = styled(BaseStyled)`
  padding: 2rem;
  justify-content: center;
  max-width: 700px;
  background-color: transparent;
`;

export default NoFunds;
