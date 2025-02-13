import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <h1>Welcome to React Router Vending Machine</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            Home page
          </Route>
          <Route path="/soda" element={<Soda />}>
            Soda
          </Route>
          <Route path="/chips" element={<Chips />}>
            Chips
          </Route>
          <Route path="/sardines" element={<Sardines />}>
            Sardine
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
