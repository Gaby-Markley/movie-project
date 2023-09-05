// DONE

const express = require("express");
const app = express();
const PORT = 8080;
// ============================Middleware==========================
// init morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// init cors
const cors = require("cors");
app.use(cors());
// ====================Connects backend server and DB===============
const client = require("./db/client");
client.connect();

// ==================Check to make sure connection works============
// GET/api/moviedb
app.get("/", (req, res, next) => {
  res.send("Hello World");
});
// ==============Establishes umbrella for all other /api/ routes====
//   Router: /api
app.use("/api", require("./api"));

// =============tells server listen to this http port ==============
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
