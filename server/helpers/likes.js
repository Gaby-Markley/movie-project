// NEED TO COMPLETE. SEE GENRES.JS helper note at the top
const client = require("../client");

async function createLike({ name, image }) {
  try {
    const {
      rows: [name],
      // insert sql query (for each function we created in seed.js
    } = await client.query(
      `
    INSERT INTO movies (name, image) 
    VALUES($1, $2)
    RETURNING *;
    `,
      // similar to a dependency array, which stops an infinite loop
      [name, image]
    );
    return movie;
  } catch (error) {
    throw error;
  }
}

module.exports = { createMovie };
