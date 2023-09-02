// 1) require client from postgres
const { Client } = require("pg");

// 2) Establish connection to database
const moviesdb = "moviesdb";
const client = new Client(`postgres://localhost:5493/${moviesdb}`);

// 3) export too ouse in other files
module.exports = client;
