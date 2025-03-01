import React, { createContext, useState } from "react";

//  Create Context
export const ThemeInstance = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    //  Corrected Toggle Function (Regular Function)
    function toggle() {
        setTheme(function (prev) {
            if (prev === "light") {
                return "dark";
            } else {
                return "light";
            }
        });
    }

    return (
        <ThemeInstance.Provider value={{ theme, toggle }}>  
            {children}
        </ThemeInstance.Provider>
    );
}

export default ThemeProvider;
