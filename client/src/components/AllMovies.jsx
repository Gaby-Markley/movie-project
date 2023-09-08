import React, { useState, useEffect } from "react";
import { fetchAllMovies } from "../../fetching";
import CreateMovieForm from "./CreateMovie";
// i need to import movies but i'm not understanding how this works in conjunction with movies.jsx

export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllMovies() {
      const APIResponse = await fetchAllMovies();
      if (APIResponse) {
        setMovies(APIResponse);
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
        <CreateMovieForm />
      </div>
      {error && <p>{error}</p>}
      {moviesToDisplay.map((movie) => (
        // below, if my id is called movieId, i put it like this, right?
        <div key={movie.movieId}>
          <h2>{movie.name}</h2>
          <p>{movie.genre}</p>
          {/* if i wanted to put genre, but it's currently in genreiD, how would i do this?  */}
          <p>{movie.image}</p>
        </div>
      ))}
    </div>
  );
}
// propstype to further investigate the props validation warning

// making a seperate movie.jsx component allows for additional functionality

// it's unclear to me what the relationship between this and ALlmovies is (or in the demo, it was pokemon and Pokemon List. )

// in helpers function, when we select* from genres, we need to get the name of the genre by doing a join. we can get data from 2 tables at once
// we can do a join in movies helpers or in the genres helpers.

// in postgres, instead of genreId we want the genre in our movies table. we want to get both of the tables at the same time. we do that with a join. we want a select clause, we still have a from, and we can have a where to narrow it down.

// select table.*, table.* (movies.*, genres.*) from movies join genres on movies."genreId" = genres."genreId"

// with that query we can access a genre name in a movies table. we can do that in the helpers movies.js in db, once you do that
// allmovies.jsx,  you would just look for movie.genre (line 45)
