import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

// import { useState, useEffect } from "react";
// import { fetchAllMovies } from "./helpers/movies";
// import MoviesList from "./components/MoviesList";
// ^need to figure out where to put these, tthey aren't typically in app.jsx file, right?

function App() {
  // hold stuff with useState hook
  // const [allmovies, setAllMovies] = useState([]);

  // useEffect- how we get initial datapop from backend. connects your component to the data you're getting from db, prepares it to render
  //   useEffect(() => {
  //     async function fetchData() {
  //       // run heleper function we made
  //       const movies = await fetchAllMovies();
  //       setAllMovies(movies);
  //       console.log(movies);
  //       return movies;
  //     }
  //     fetchData();
  //   }, []);

  //   return (
  //     <>
  //       <MoviesList movies={allMovies} />
  //     </>
  //   );
  // }
  return (
    <>
      <NavBar />
      <Header />
      <div id="app-container">
        <MainSection />
      </div>
    </>
  );
}
export default App;
