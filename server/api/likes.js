const express = require("express");
const router = express.Router();

const { createLike, deleteLike } = require("../helpers/likes");

// Post (create) like
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const like = await createLike(req.body);
    res.send(like);
  } catch (err) {
    next(err);
  }
});
// Delete like
router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const like = await deleteLike(req.body);
    res.send(like);
  } catch (error) {
    next(err);
  }
});
module.exports = router;
