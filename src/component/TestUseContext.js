import React from 'react';
import { createContext, useState, useContext } from 'react';
import '../styles/TestUseContext.css';

// Zadanie nr 2
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext);
};

function ThemedComponent() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className={isDarkMode ? 'dark-h1' : 'light-h1'}>
                Tryb: {isDarkMode ? 'Ciemny' : 'Jasny'}
            </h1>
            <button
                className={isDarkMode ? 'dark' : 'light'}
                onClick={toggleTheme}
            >
                Zmień tryb
            </button>
        </div>
    );
}

function TestUseContext() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default TestUseContext;
