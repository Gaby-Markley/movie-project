// 1) require client from postgres
const { client } = require("pg");

// 2) Establish connection to database
const moviedB = "moviedB";
const client = new Client(`postgres://localhost:5499/${moviedB}`);

// 3) export too ouse in other files
module.exports = client;
