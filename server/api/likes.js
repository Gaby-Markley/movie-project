const express = require("express");
const router = express.Router();

const { createLikes, deleteLikes } = require("../helpers/likes");

// Post (create) like
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const like = await createLikes(req.body);
    res.send(like);
  } catch (err) {
    next(err);
  }
});
// Delete like
router.delete("/:likesId", async (req, res, next) => {
  try {
    console.log("deleting");
    const like = await deleteLikes(req.params.likesId);
    res.send(like);
  } catch (error) {
    next(error);
  }
});

// sometimes its good for devs to just make a get all for debugging
module.exports = router;
