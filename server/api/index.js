const express = require("express");
const app = express();
const PORT = 8080;

const morgan = require("morgan");
app.use(morgan("dev"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const client = require("./db/client");

client.connect();

// GET/api/movies
app.get("/movies", (req, res, next) => {
  res.send("OK");
});

// ROUTER: /api/movies
Router.use("/movies", require("./movies"));

module.exports = router;
