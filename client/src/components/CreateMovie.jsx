import { useState } from "react";
import { fetchAllMovies, createMovie } from "../../fetching";

// all of it shows up but it doesn't actually send anything to the api
export default function CreateMovieForm({ setMovies, token }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    async function createMovie() {
      const newMovie = {
        name,
        genre,
        image,
      };
      const result = await makeMovie(newMovie, token);
      const updateMovies = await fetchAllMovies();
      setMovies(updateMovies.data.movies);
      return result;
    }
    createMovie();

    setName("");
    setGenre("");
    setImage("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Create Movie</button>
      </form>
    </>
  );
}
