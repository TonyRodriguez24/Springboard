import React from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";

const ColorPicker = () => {
  const [color, setColor] = useLocalStorageState('color', 'teal');
 
  const changeColor = e => {
    setColor(e.target.value)
  }

  return (
    <>
      <h1 style={{ color }}>Color is {color}</h1>
      <select value={color} onChange={changeColor}>
        <option value = 'red'>Red</option>
        <option value = 'teal'>Teal</option>
        <option value = 'yellow'>Yellow</option>
        <option value = 'purple'>Purple</option>

      </select>
    </>
  )
}

export default ColorPicker;