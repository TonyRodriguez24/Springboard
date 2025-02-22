import React, { useContext } from "react";
import CountContext from "./countContext";
import ThemeContext from "./ThemeContext";

function GreatGrandReadOnly() {
  const num = useContext(CountContext);
  const {color} = useContext(ThemeContext);

  return (
    <div>
      <p style={{color}}>I'm a great-grandchild!</p>
      <p>Here's the count: {num}.</p>
    </div>
  );
}

export default GreatGrandReadOnly;
