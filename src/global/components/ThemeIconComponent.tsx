import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styled from "@emotion/styled";
import { FaMoon, FaSun } from "react-icons/fa";
import { HybirdButton } from 'global/packages/src';

const ThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;  
  height: 31px;
  border-radius: 5px;  
  background-color: transparent;
`;

const ThemeIconComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === 'dark') {
    return (
      <ThemeIcon>
        <HybirdButton
        type='outlined'
        style={{
          fontSize: "18px",
          fontWeight: "500",
          borderRadius: "4px",
          marginBottom: "-1px",
          height: "32px",
        }}
        theme={theme}
        >
          <FaSun color='#0077FF' size={18} />  
        </HybirdButton>
      </ThemeIcon>
    );
  }

  return (
    <ThemeIcon>
      <HybirdButton
      style={{
        fontSize: "18px",
        fontWeight: "500",
        borderRadius: "4px",
        marginBottom: "-1px",
        height: "32px",
        fontFamily: "Macan"
      }}
        type='outlined'
        theme={theme}
        >
        <FaMoon color='#0077FF' size={18} />  
      </HybirdButton>
    </ThemeIcon>
  );
};

export default ThemeIconComponent;
