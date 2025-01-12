import React from "react";
import "./App.css";
import EightBall from "./EightBall";
import Answers from "./Answers";

const App = () => (
  <>
    <EightBall answers={Answers}/>
  </>
);

export default App;
