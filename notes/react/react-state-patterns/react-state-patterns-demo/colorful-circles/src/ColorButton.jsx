import React from "react";

const ColorButton = ({ color, addCircle }) => {
  return (
    <div>
      <button
        onClick={() => addCircle(color)}
        className="ColorButton"
        style={{ backgroundColor: color }}>
        {color}
      </button>
    </div>
  );
};

export default ColorButton;
