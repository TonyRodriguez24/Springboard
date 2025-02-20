import { Link } from "react-router-dom";

function Colors({ colors }) {
  return (
    <div>
      <Link to="/colors/form">Add Color</Link>
      <ul>
        {colors.map((color, index) => (
          <li key={index} style={{color: color.name}}>{color.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
