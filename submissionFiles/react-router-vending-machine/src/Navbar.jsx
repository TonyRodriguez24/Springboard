import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/soda">Click here to go to soda</Link>
      <Link to="/chips">Click here to go to chips</Link>
      <Link to="/sardines">Click here to go to sardines</Link>
    </div>
  );
}

export default Navbar;
