import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Define keyframes
const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const rotateTwo = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;

const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;

// Define styled components
const Loader = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'sm' ? '32px' : props.size === 'md' ? '96px' : '128px')};
  height: ${props => (props.size === 'sm' ? '32px' : props.size === 'md' ? '96px' : '128px')};
  border-radius: 50%;
  perspective: 800px;
`;

const Inner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const InnerOne = styled(Inner)`
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 3px solid var(--primary-color);
`;

const InnerTwo = styled(Inner)`
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 3px solid var(--primary-color);
`;

const InnerThree = styled(Inner)`
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 3px solid var(--primary-color);
`;

interface LoadingComponentProps {
  size: 'sm' | 'md' | 'lg';
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ size }) => {
  return (
    <Loader size={size}>
      <InnerOne />
      <InnerTwo />
      <InnerThree />
    </Loader>
  );
};

export default LoadingComponent;
