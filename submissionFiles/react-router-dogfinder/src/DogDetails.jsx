import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const navigate = useNavigate();

  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    if (!dog) {
      navigate("/dogs", { replace: true }); //tells browser to forget the incorrect page
    }
  });

  return (
    <div>
      <h1>DogDetails</h1>
      <ul>
        <li>{dog.name}</li>
              <li>{dog.age}</li>
              {dog.facts.map((f, index) => (
                  <p key={index}>{f}</p>
              ))}
              <img src={`/${dog.src}.jpg`} alt="fadf"></img>
      </ul>
    </div>
  );
}

export default DogDetails;
