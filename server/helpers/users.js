const client = require("../db/client");

async function createUser({ username, password, dob }) {
  try {
    const {
      rows: [user],
      // insert sql query (for each function we created in seed.js
    } = await client.query(
      `
    INSERT INTO users (username, password, dob) 
    VALUES($1, $2, $3)
    RETURNING *;
    `,
      // similar to a dependency array, which stops an infinite loop
      [username, password, dob]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser };
