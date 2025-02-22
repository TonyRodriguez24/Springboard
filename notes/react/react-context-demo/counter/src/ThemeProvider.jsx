import ThemeContext from "./ThemeContext";
import React, { useState } from "react";

export default function ThemeProvider({ children }) {
    const [color, setColor] = useState('olive')

    const toggleColor = () => {
        setColor(color => color === 'olive' ? 'orange' : 'green')
    }

    return (
        <ThemeContext.Provider value={{color, toggleColor}}>
            {children}
        </ThemeContext.Provider>
    )
}