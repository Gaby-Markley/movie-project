const client = require("../db/client");
const util = require("../db/util");
// ^ in keirans code this is /utils w/o node_modules, but putting this got the server to run. it still doesn't want to update though.

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

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * 
    from users; 
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};

async function getUserById(userId) {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
    SELECT * 
    FROM users
    WHERE "userId" = ${userId};
    `
    );
    return users;
  } catch (error) {
    throw error;
  }
}
async function updateUser(userId, fields) {
  try {
    const toUpdate = {};
    for (let column in fields) {
      if (fields[column] !== undefined) toUpdate[column] = fields[column];
    }
    let users;

    if (util.dbFields(toUpdate).insert.length > 0) {
      const { rows } = await client.query(
        `
          UPDATE users
          SET ${util.dbFields(toUpdate).insert}
          WHERE "userId"=${userId}
          RETURNING *;
        `,
        Object.values(toUpdate)
      );
      users = rows[0];
    }

    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser, getAllUsers, updateUser, getUserById };
