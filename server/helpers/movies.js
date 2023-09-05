const client = require("../db/client");

async function createMovie({ name, image }) {
  try {
    const {
      rows: [movie],
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

// running into issues with name in movies, i'm getting an error taht says it violate the not-null constraintt but i can't figure out why

// we're writing the sql querys here. export helper into the api files to use to
