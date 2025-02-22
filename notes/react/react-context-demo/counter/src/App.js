import React from "react";
import Child from "./Child";
import Navbar from "./Navbar";
import ThemeProvider from "./ThemeProvider";

function App() {


  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Child />
      </ThemeProvider>
    </div>
  );
}

export default App;
