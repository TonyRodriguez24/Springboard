import React from "react";

const ButtonGroup = () => {
    const printColor = (color) => {
        console.log(`you clicked ${color.toUpperCase()}`)
    }
    return (
      <div>
        <button onClick={() => printColor('Red')}>Red</button>
        <button onClick={() => printColor('Yellow')}>yellow</button>
        <button onClick={() => printColor('Green')}>green</button>
      </div>
    );
}

export default ButtonGroup;