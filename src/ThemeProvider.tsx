import { createContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextProps {
  theme: Theme;
  changeTheme: (arg0: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    changeTheme: theme => console.warn('changeTheme function not yet defined'),
  });

interface ThemeProviderProps {
  children: ReactNode; // <-- Ensure you have this
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
