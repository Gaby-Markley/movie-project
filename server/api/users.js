const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
} = require("../helpers/users");

// fetchAll-- working
router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET user by ID---working
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await getUserById(req.params.userId);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// create---working
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await createUser(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// update
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await updateUser(req.params.userId, req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
