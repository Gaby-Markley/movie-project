const client = require("../db/client");
async function getAllMovies() {
  try {
    const { rows } = await client.query(`
    SELECT*
    FROM movies;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getMovieById(movieId) {
  try {
    const {
      rows: [movies],
    } = await client.query(
      `
    SELECT * 
    FROM movies
    WHERE "movieId" = ${movieId};
    `
    );
    return movies;
  } catch (error) {
    throw error;
  }
}

async function createMovie({ name, genreId, image }) {
  try {
    const {
      rows: [movies],
      // insert sql query (for each function we created in seed.js
    } = await client.query(
      `
    INSERT INTO movies (name,"genreId", image) 
    VALUES($1, $2, $3)
    RETURNING *;
    `,
      // similar to a dependency array, which stops an infinite loop
      [name, genreId, image]
    );
    return movies;
  } catch (error) {
    throw error;
  }
}

module.exports = { createMovie, getAllMovies, getMovieById };

// we're writing the sql querys here. export helper into the api files to use to

// getAllMovies,
// getMovieById,
// createMovie
