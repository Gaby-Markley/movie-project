const express = require("express");
const router = express.Router();

router.get("/health", (req, res, next) => {
  res.send("OK");
});

// ROUTER: /api/movies
Router.use("/movies", require("./movies"));

module.exports = router;

// are routes only if you're trying to display data?
