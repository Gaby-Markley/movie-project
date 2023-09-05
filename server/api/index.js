const express = require("express");
const app = express();
const PORT = 8080;

router.get("/health", (req, res, next) => {
  res.send("OK");
});

// ROUTER: /api/movies
Router.use("/movies", require("./movies"));

module.exports = router;

// routes are only for if you're trying to display data.
