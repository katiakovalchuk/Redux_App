import {createContext} from "react";

export const themes = {
    dark: {
        color: 'white',
        background: '#CCCCCC'
    },
    light: {
        color: 'black',
        background: 'white'
    }
}

const ThemeContext = createContext(themes.light);

export default ThemeContext;
