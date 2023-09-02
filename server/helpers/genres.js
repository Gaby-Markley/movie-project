// if we are making a helper file for a table that is just made of foreign keys, do we need to do these steps? also, does this have to do with adding or posting toan api?

// NEED TO COMPLETE
const client = require("../client");

async function createGenre({ name, image }) {
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
