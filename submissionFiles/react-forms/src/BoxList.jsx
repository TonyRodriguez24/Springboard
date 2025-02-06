import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export default function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  return (
    <>
      <h1>BoxList</h1>
      {boxes.map((box, index) => (
        <Box
          key={index}
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
        />
      ))}
          <NewBoxForm addBox={addBox}/>
    </>
  );
}
