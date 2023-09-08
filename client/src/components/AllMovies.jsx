import React, { useState, useEffect } from "react";
import { fetchAllMovies } from "../../fetching";
// i need to import movies but i'm not understanding how this works in conjunction with movies.jsx
// import DeleteButton from "./Delete";

export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllMovies() {
      const APIResponse = await fetchAllMovies();
      if (APIResponse.success) {
        setMovies(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }

    getAllMovies();
  }, []);
  // SEARCH BAR COMPONENT
  const moviesToDisplay = searchParam
    ? movies.filter((movie) => movie.name.toLowerCase().includes(searchParam))
    : movies;

  return (
    <div>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      {error && <p>{error}</p>}
      {moviesToDisplay.map((movie) => (
        <div key={movie.movieId}>
          <h2>{movie.name}</h2>
          <p>{movie.image}</p>
          {/* <DeleteButton movie_id={movie.id} /> */}
        </div>
      ))}
    </div>
  );
}
// propstype to further investigate the props validation warning

// making a seperate movie.jsx component allows for additional functionality

// it's unclear to me what the relationship between this and ALlmovies is (or in the demo, it was pokemon and Pokemon List. )
