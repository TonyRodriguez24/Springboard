import React, { useState } from "react";
import NumberItem from "./NumberItem";

const NumbersList = () => {
  const [numbers, setNumbers] = useState([43, 34, 3, 54, 34]);

  const remove = (num) => {
    setNumbers(numbers.filter((n) => n !== num));
    console.log("removing", num);
  };

  return (
    <ul>
      {numbers.map((n) => (
        <NumberItem number={n} key={n} remove = {remove} />
      ))}
    </ul>
  );
};

export default NumbersList;
