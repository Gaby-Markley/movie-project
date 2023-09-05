const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  // updateMovie,
} = require("../helpers/movies");

// GET - /api/movie - get all movies

router.get("/", async (req, res, next) => {
  try {
    const movies = await getAllMovies();
    res.send(movies);
  } catch (error) {
    next(error);
  }
});

// GET movie by ID
router.get("/:id", async (req, res, next) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.send(movie);
  } catch (error) {
    next(error);
  }
});

// Post (create) movie
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const movie = await createMovie(req.body);
    res.send(movie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
