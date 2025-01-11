import React from "react";
import ShoppingCart from "./ShoppingCart";
import items from "./items";
import Alert from "./Alert";
import moreItems from "./moreItems";

import "./App.css";

function App() {
  return (
    <div>
      <Alert variant="success">
        <h1>Welcome back</h1>
      </Alert>
      <Alert variant="danger">
        <h1>Oh no</h1>
      </Alert>
      <ShoppingCart items={items} username="carly" />
      <ShoppingCart items={moreItems} username="randy" />
    </div>
  );
}

export default App;
