import React, {useMemo, useState} from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from "../lib/ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const contextValue = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme
        }),
        [theme]
    );

    return <ThemeContext.Provider
        value={contextValue}>{children}
    </ThemeContext.Provider>;
};

export default ThemeProvider;
