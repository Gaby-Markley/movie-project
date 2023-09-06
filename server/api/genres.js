const express = require("express");
const router = express.Router();

const { getAllGenres, createGenres } = require("../helpers/genres");

// GET - /api/genres - get all genres

router.get("/", async (req, res, next) => {
  try {
    const genres = await getAllGenres();
    res.send(genres);
  } catch (error) {
    next(error);
  }
});

// Post (create) genres
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const genre = await createGenres(req.body);
    res.send(genre);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
