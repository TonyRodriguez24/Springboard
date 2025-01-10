import React from "react";
import ShoppingCart from "./ShoppingCart";
import items from "./items";
import moreItems from "./moreItems";

import "./App.css";

function App() {
  return (
    <div>
      <ShoppingCart items={items} username="carly" />
      <ShoppingCart items={moreItems} username="randy" />
    </div>
  );
}

export default App;
