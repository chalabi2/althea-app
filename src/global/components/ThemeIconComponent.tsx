import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styled from "@emotion/styled";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;  
  height: 20px;
  border-radius: 45px;  
  background-color: transparent;
`;

const Square = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #0077FF;
  border-radius: 2px;  
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SquareComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Square>{children}</Square>;
};


const ThemeIconComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  // Return a moon icon for dark mode
  if (theme === 'dark') {
    return (
      <ThemeIcon>
        <SquareComponent>
          <FaMoon color='#0077FF' size={20} />
        </SquareComponent>
      </ThemeIcon>
    );
  }

  // Return a sun icon for light mode
  return (
    <ThemeIcon>
      <SquareComponent>
        <FaSun color='#0077FF' size={20} />
      </SquareComponent>
    </ThemeIcon>
  );
};

export default ThemeIconComponent;
