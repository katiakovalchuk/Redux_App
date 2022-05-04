import {createContext, useContext, useState} from 'react';

export const mode = {
    dark: {
        color: '#FFFFFF',
        background: '#808080B3'
    },
    light: {
        color: '#000000',
        background: '#E0FFFFFF'
    }
}

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(mode.light);

    const toggleTheme = () => {
        theme === mode.light ? setTheme(mode.dark) : setTheme(mode.light);
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
