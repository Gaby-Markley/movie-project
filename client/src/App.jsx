import "./App.css";

import { useState, useEffect } from "react";
import { fetchAllMovies } from "./helpers/movies";
import MoviesList from "./components/MoviesList";
// why is it not in curly brackets

function App() {
  // hold stuff with useState hook
  const [allmovies, setAllMovies] = useState([]);

  // useEffect- how we get initial datapop from backend. connects your component to the data you're getting from db, prepares it to render
  useEffect(() => {
    async function fetchData() {
      // run heleper function we made
      const movies = await fetchAllMovies();
      setAllMovies(movies);
      console.log(movies);
      return movies;
    }
    fetchData();
  }, []);

  return (
    <>
      <MoviesList movies={allMovies} />
    </>
  );
}

export default App;
