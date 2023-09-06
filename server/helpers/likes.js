// NEED TO COMPLETE. SEE GENRES.JS helper note at the top
const client = require("../db/client");

async function createLikes({ userId, movieId }) {
  try {
    const {
      rows: [like],
      // insert sql query (for each function we created in seed.js
    } = await client.query(
      `
    INSERT INTO likes ("userId", "movieId") 
    VALUES($1, $2)
    RETURNING *;
    `,
      // similar to a dependency array, which stops an infinite loop
      [userId, movieId]
    );
    return like;
  } catch (error) {
    throw error;
  }
}

async function deleteLikes(likesId) {
  try {
    const {
      rows: [like],
    } = await client.query(
      `
      DELETE 
      FROM likes
      WHERE "likesId" = $1;
      RETURNING *;
      `[likesId]
    );
    console.log("Deleted like");
    return like;
  } catch (error) {
    throw error;
  }
}

module.exports = { createLikes, deleteLikes };

// check if like 31 is correct
