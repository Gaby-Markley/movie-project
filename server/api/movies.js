const data = require("./seedData");

// GET - /api/movies - get all sales
async function getAllMovies() {
  try {
    const rows = data.movies;
    return rows;
  } catch (error) {
    throw error;
  }
}

// GET - /api/movies/:movieId - get movie by id
async function getMovieById(movieId) {
  try {
    const rows = data.movies;
    const movie = rows.find((movie) => movie.id === Number(movieId));
    return movie;
  } catch (error) {
    throw error;
  }
}

// POST - /api/movies - create a new sale
async function createMovie(body) {
  try {
    const movie = body;
    const movies = data.movies;
    movies.push(movie);
    return movie;
  } catch (error) {
    throw error;
  }
}

// PUT - /api/movies/:movieId - update a sale
async function updateMovie(movieId, body) {
  try {
    const movies = data.movies;
    const movie = movies.find((movie) => movie.id === Number(movieId));
    const index = movies.findIndex((movie) => movie.id === Number(movieId));
    let newMovie = { ...movie, ...body };
    console.log(newMovie);
    movies[index] = newMovie;
    return newMovie;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
};
