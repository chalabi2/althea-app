import styled from "@emotion/styled";

interface Props {
  type?: "title" | "text";
  color?: "white" | "primary" | "dark" | "primaryDark" | "darkFont";
  bold?: boolean;
  align?: "left" | "center" | "right";
  size?: "text1" | "text2" | "text3" | "text4" | "title1" | "title2" | "title3";
}

const Mapper = {
  white: "white",
  primary: "var(--primary-color)",
  primaryDark: "#08ac6b",
  dark: "var(--base-reverse)",
  darkFont: "#101113",
  size: {
    title1: 44,
    title2: 26,
    title3: 18,
    text1: 18,
    text2: 16,
    text3: 14,
    text4: 12,
  },
};

export const Text = styled.p<Props>`
  color: ${({ color }) => Mapper[color ?? "primary"]};
  letter-spacing: ${({ type }) => (type == "title" ? "-8%" : "-3%")};
  font-family: ${({ type }) =>
    type == "title" ? "MacanFont" : "Macan"};
  line-height: 140%;
  font-size: ${({ size }) => Mapper.size[size ?? "text2"] + "px"};
  text-align: ${({ align }) => align ?? "center"};
  font-weight: ${({ bold }) => (bold ? "500" : "400")};
`;
