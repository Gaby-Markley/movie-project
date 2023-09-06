// if we are making a helper file for a table that is just made of foreign keys, do we need to do these steps? also, does this have to do with adding or posting toan api?

// NEED TO COMPLETE
const client = require("../db/client");

async function createGenres({ genre }) {
  try {
    const {
      rows: [genreName],
      // insert sql query (for each function we created in seed.js
    } = await client.query(
      `
    INSERT INTO genres(genre) 
    VALUES($1)
    RETURNING *;
    `,
      // similar to a dependency array, which stops an infinite loop
      [genre]
    );
    return genreName;
  } catch (error) {
    throw error;
  }
}

async function getAllGenres() {
  try {
    const { rows } = await client.query(`
    SELECT*
    FROM genres;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { createGenres, getAllGenres };
