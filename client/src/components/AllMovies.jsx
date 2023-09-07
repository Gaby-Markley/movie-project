import movie from "./Movie";
export default function AllMovies({ allMovies }) {
  return (
    <>
      {/* you need {} to do js in jsx */}

      {allMovies.map((movie) => {
        return <p key={movie.movieId}>{movie.name}</p>;
      })}
    </>
  );
}

// propstype to further investigate the props validation warning

// making a seperate movie.jsx component allows for additional functionality

// it's unclear to me what the relationship between this and ALlmovies is (or in the demo, it was pokemon and Pokemon List. )
