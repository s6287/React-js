import React, { useContext } from 'react';
import { ThemeInstance } from './ThemeProvider';

function ThemeConsumer() {
    const { theme, toggle } = useContext(ThemeInstance);

    return (
        <div 
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                height: "100vh",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1>Current Theme: {theme.toUpperCase()}</h1>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    );
}

export default ThemeConsumer;
