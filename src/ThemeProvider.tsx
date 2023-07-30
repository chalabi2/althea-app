import { createContext, useState, useEffect, ReactNode } from 'react';

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
  children: ReactNode; //
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Default theme is light, but we'll immediately check to see if the user prefers dark mode
  const [theme, setTheme] = useState<Theme>('light');


  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  }, []);
  

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
