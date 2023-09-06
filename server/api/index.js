const express = require("express");
const router = express.Router();

router.get("/health", (req, res, next) => {
  res.send("OK");
});

// ROUTER: /api/movies
router.use("/movies", require("./movies"));

// ROUTER :/api/genres
router.use("/genres", require("./genres"));

// // Router : /api/users
router.use("/users", require("/users"));

// // Router : /api/likes
router.use("/likes", require("/likes"));

module.exports = router;

// are routes only if you're trying to display data?

// schema
// movies- get, movies- put(update),movies- delete,movies- post(adding)
// users- delete, get, post, put
// genres- get
// likes- get, delete
