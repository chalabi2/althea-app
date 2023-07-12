import styled from "@emotion/styled";

interface Props {
  onClick: () => void;
  src: string;
  alt: string;
  height?: number;
  width?: number;
  rotateImage?: boolean; // New Prop
}

const Style = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.2;
  }
  &:active {
    opacity: 0.2;
  }
`;
const ImageButton = ({ onClick, alt, src, height, width, rotateImage }: Props) => {
  return (
    <Style
      onClick={onClick}
      style={{
        height,
        width,
      }}
    >
      <img src={src} alt={alt} height={height} width={width} style={{ transform: rotateImage ? 'rotate(180deg)' : 'none' }} />
    </Style>
  );
};

export default ImageButton;
