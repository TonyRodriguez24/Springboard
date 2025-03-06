import axios from "axios";
import { useEffect, useState } from "react";

export default function NumberFacts({ num }) {
    const [facts, setFacts] = useState([]);
    console.log(facts)

  useEffect(() => {
    const fetchData = async () => {
      //generate random number
      //generate random numbers array
      const randomNumbersArr = [];

      //populate array
      for (let i = 0; i < num; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        randomNumbersArr.push(randomNumber);
      }

      const randomArrString = randomNumbersArr.join(",");

      const response = await axios.get(
        `http://numbersapi.com/${randomArrString}`
      );

      setFacts(response.data);
    };

    fetchData();
  }, [num]);

  return (
    <div>
          <h1>Number Facts</h1>
          <ul>
              {Object.entries(facts).map(([number,fact]) => {
                  return <li key={number}>{`${fact}`}</li>
              })}
          </ul>
    </div>
  );
}
