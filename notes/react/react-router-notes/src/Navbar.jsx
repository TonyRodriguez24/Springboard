import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/drink">Drink</Link>
      <Link to="/eat">Eat</Link>
      <Link to="/food">Food</Link>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default Navbar;
