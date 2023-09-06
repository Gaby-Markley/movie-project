import Movie from "./movie";
export default function MoviesList({ allMovies }) {
  return (
    <>
      {/* you need {} to do js in jsx */}

      {allMovies.map((movies) => {
        return <p key={movies.movieId}>{movies.name}</p>;
      })}
    </>
  );
}

// propstype to further investigate the props validation warning

// making a seperate movie.jsx component allows for additional functionality
