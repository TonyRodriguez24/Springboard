import React from "react";
import "./App.css";
import Dice from "./Dice";

/** Simple game with dice. */

function App() {
  return (
    <div className="App">
      <h1>yo</h1>
      <Dice numDice={9} maxVal={6}/>
      <Dice numDice={9} maxVal={6} title="Roll me"/>
    </div>
  );
}

export default App;
