import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styled from "@emotion/styled";
import ThemeIconComponent from './ThemeIconComponent';

const ThemeSwitcherButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ThemeSwitcher: React.FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherButton onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
      <ThemeIconComponent />
    </ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
