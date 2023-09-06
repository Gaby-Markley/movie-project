const express = require("express");
const router = express.Router();

const { createUser, getAllUsers, updateUser } = require("../helpers/users");

// fetchAll
router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// create
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
router.put("/userId", async (req, res, next) => {
  try {
    const user = await updateUser(req.params.userId, req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
