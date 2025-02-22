import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
    const {color, toggleColor} = useContext(ThemeContext)
  return (
    <>
      <nav style={{backgroundColor : color}}>
        <span>Website</span>
        <button onClick={toggleColor}>Toggle Theme</button>
      </nav>
    </>
  );
}

export default Navbar;
