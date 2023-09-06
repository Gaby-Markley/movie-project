const { createUsers, getAllUsers } = require("../helpers/users");

// GET - /api/users - get all users
async function getAllUsers() {
  try {
    const rows = data.users;
    return rows;
  } catch (error) {
    throw error;
  }
}

// GET - /api/users/:userId - get user by id
async function getUserById(userId) {
  try {
    const rows = data.users;
    const movie = rows.find((user) => user.id === Number(userId));
    return user;
  } catch (error) {
    throw error;
  }
}

// POST - /api/users - create a new user
async function createUser(body) {
  try {
    const user = body;
    const users = data.users;
    users.push(user);
    return user;
  } catch (error) {
    throw error;
  }
}

// PUT - /api/users/:userId - update a user
async function updateUser(userId, body) {
  try {
    const users = data.users;
    const user = users.find((user) => user.id === Number(userId));
    const index = users.findIndex((user) => user.id === Number(userId));
    let newUser = { ...user, ...body };
    console.log(newUser);
    users[index] = newUser;
    return newUser;
  } catch (error) {
    throw error;
  }
}

//   DELETE -/api/movies:movieId- delete a movie

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
};
