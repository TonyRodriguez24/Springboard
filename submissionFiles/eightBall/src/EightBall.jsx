import React, { useState } from "react";

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a question");
  const [color, setColor] = useState("black");

  const buttonClicked = () => {
    //this part i understand
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];

    //this was confusing
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <button
      className="EightBall"
      onClick={buttonClicked}
      style={{ backgroundColor: color, color: "white"}}>{message}
    </button>
  );
};

export default EightBall;
