import styled from "@emotion/styled";


const Sizes = {
  "xx-sm": 12,
  "x-sm": 16,
  sm: 18,
  md: 20,
  lg: 22,
  "x-lg": 28,
};

const Height = {
  big: 56,
  normal: 42,
  small: 32,
};

const Weight = {
  normal: 400,
  light: 300,
  bold: 500,
  "x-bold": 600,
};
interface Props {
  size?: "xx-sm" | "x-sm" | "sm" | "md" | "lg" | "x-lg";
  padding?: "xx-sm" | "x-sm" | "sm" | "md" | "lg" | "x-lg";
  weight?: "light" | "normal" | "bold" | "x-bold";
  height?: "small" | "normal" | "big";
  filled?: boolean;
  theme?: string;
}
const PrimaryButton = styled.button<Props>`
  font-size: ${({ size }) => Sizes[size ?? "x-sm"] + "px"};
  font-weight: ${({ weight }) => Weight[weight ?? "normal"]};
  background-color: var(--primary-color);
  color: var(--base);
  padding: ${({ padding }) => Sizes[padding ?? "xx-sm"] + "px"};
  border: 1px solid transparent;
  display: flex;
  height: ${({ height }) => Height[height ?? "normal"] + "px"};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${({ filled }) => (filled ? "100%" : "fit-content")};

  &:hover {
    background-color: var(--button-highlight);
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--background-color-start);
    color: grey;
  }
`;

const OutlinedButton = styled(PrimaryButton)<Props>`
  /* background-color: var(--pitch-black-color); */
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);

  &:hover {
    background-color: ${({ theme }) => theme === 'light' ? '#CCE4FF' : '#0D2642'};
    /* background: rgba(6, 252, 153, 0.1); */
    cursor: pointer;
  }

  &:disabled {
    color: rgba(0, 119, 255, 0.25);
    background-color: var(--background-color-start);
    border: 1px solid rgba(0, 119, 255, 0.25);
  }
`;

const UndelegateButton = styled(PrimaryButton)<Props>`
  /* background-color: var(--pitch-black-color); */
  background-color: var(--primary-color);
  color: var(--base);

  &:hover {
    background-color: var(--button-highlight);
    /* background: rgba(6, 252, 153, 0.1); */
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--background-color-start);
    color: grey;
  }
`;

const FilledButton = styled(PrimaryButton)<Props>`
  background-color: var(--too-dark-color);
  color: var(--off-white-color);
  &:hover {
    background-color: var(--dark-grey-color);
    color: var(--off-white-color);
    border: 1px solid var(--dark-grey-color);
  }
  &:disabled {
    background-color: var(--dark-grey-color);
    color: var(--holy-grey-color);
  }
`;
const HighlightButton = styled(FilledButton)<Props>`
  background-color: #172b23;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 1rem !important;

  &:hover {
    background-color: #203128;
    color: var(--primary-dark-color);
    border: 1px solid var(--primary-darker-color);
  }

  &:disabled {
    background-color: #373737;
    color: var(--off-white-color);
    border: 1px solid var(--off-white-color);
  }
`;

interface HybridProps {
  size?: "x-sm" | "sm" | "md" | "lg" | "x-lg";
  padding?: "x-sm" | "sm" | "md" | "lg" | "x-lg";
  type: "primary" | "filled" | "highlight" | "outlined" | "undelegate";
  children: React.ReactNode;
  theme?: string; 
  style?: React.CSSProperties; 
  onClick?: () => void;
  disabled?: boolean;
}
const HybirdButton = (props: HybridProps) => {
  const { type, size, padding, children, theme, style, disabled, onClick } = props; 

  switch (type) {
    case "outlined":
      return (
        <OutlinedButton style={style} size={size} padding={padding} theme={theme} disabled={disabled} onClick={onClick}> 
          {children}
        </OutlinedButton>
      );
    case "filled":
      return (
        <FilledButton size={size} padding={padding} theme={theme} disabled={disabled} onClick={onClick}>
          {children}
        </FilledButton>
      );
    case "highlight":
      return (
        <HighlightButton size={size} padding={padding} theme={theme} disabled={disabled} onClick={onClick}>
          {children}
        </HighlightButton>
      );
      case "undelegate":
        return (
          <UndelegateButton size={size} padding={padding} theme={theme} disabled={disabled} onClick={onClick}>
            {children}
          </UndelegateButton>
        );
    case "primary":
    default:
      return (
        <PrimaryButton size={size} padding={padding} theme={theme} disabled={disabled} onClick={onClick}>
          {children}
        </PrimaryButton>
      );
  }
};

export {
  PrimaryButton,
  OutlinedButton,
  FilledButton,
  HighlightButton,
  UndelegateButton,
  HybirdButton,
};
