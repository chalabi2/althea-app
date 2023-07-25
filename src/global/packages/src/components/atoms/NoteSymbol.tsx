import noteIcon from "assets/note.svg";
import altheaIcon from "assets/logo.svg";
interface Props {
  height?: number;
  width?: number;
  padding?: number;
  token: "althea" | "note";
}
const TokenSymbol = ({ width, height, padding, token }: Props) => {
  if (!height || !width) {
    width = 20;
  }
  if (!padding) {
    padding = 4;
  }
  return (
    <img
      src={token == "althea" ? altheaIcon : noteIcon}
      width={width}
      style={{
        padding: `0 ${padding + "px"}`,
      }}
      height={height}
      alt="note token"
    />
  );
};

export default TokenSymbol;
