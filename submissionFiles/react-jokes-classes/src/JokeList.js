import axios from "axios";
import React, { useEffect, useState } from "react";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */
export default function JokeList({ numberOfJokes = 5 }) {
  const [jokes, setJokes] = useState([]);
  //set jokes to an empty array
  const [loading, setLoading] = useState(false);
  //set loading to false

  //define getJokes function which is asynchronous
  const getJokes = async () => {
    //we set loading to true while we get data
    setLoading(true);

    try {
    
      //temporarily holds jokes until all of them are fetches
      let jokes = [];
      let seenJokes = new Set();

      //while the length of this jokes array is less than the number of jokes
      while (jokes.length < numberOfJokes) {
        //get response
        let response = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }  // Fixed 'header' to 'headers'
        });

        //get individual joke
        let joke = response.data;

        //if it is not in seen jokes we add it to seen jokes set, we add a joke to jokes which is an object. We set votes to 0
        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokes.push({ ...joke, votes: 0 });
        } else {
          console.log("Duplicate found!");
        }
      }

      //setJokes to local jokes array once we fetch all of them to reduce unneccessary rerenders
      setJokes(jokes);  
      setLoading(false);  // set the loading state to false now that we are done with requests
    } catch (error) {
      console.error("Error fetching jokes:", error);
      setLoading(false);  // Ensure loading stops even if there's an error
    }
  };

  /* Fetch jokes when the component initially mounts */
  useEffect(() => {
    getJokes();
  }, []);

  /* Reset joke list and fetch new jokes */
  const generateNewJokes = () => {
    setJokes([]); //empty out jokes
    getJokes(); //get new ones
  };

  /* Function to upvote or downvote a joke */
  const vote = (id, delta) => {
    setJokes(prevJokes =>
      prevJokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke  // Fixed return value
      )
    );
  };

  /* Render: either loading spinner or sorted list of jokes */
  if (loading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {jokes.map(j => (
        <Joke
          key={j.id}
          text={j.joke}
          id={j.id}
          votes={j.votes}
          vote={vote}  // Fixed incorrect 'this.vote'
        />
      ))}
    </div>
  );
}
