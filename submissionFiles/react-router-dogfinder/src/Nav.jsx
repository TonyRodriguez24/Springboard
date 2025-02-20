import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
      <ul>
          <Link to ='/'>Home</Link>
          <Link to ='/colors'>Colors</Link>
      {dogs.map((dog, index) => (
          <Link to={`dogs/${dog.name}`} key={index}>{dog.name}</Link>
      ))}
    </ul>
  );
}

export default Nav;
