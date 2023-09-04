const client = require("./client");

const { createUser } = require("../helpers/users");
const { createMovie } = require("../helpers/movies");
const { createLike } = require("../helpers/likes");
const { createGenre } = require("../helpers/genres");

const { users, genres, movies, likes } = require("./seedData");

// //Drop Tables for cleanliness
async function dropTables() {
  try {
    console.log("Starting to drop tables");
    await client.query(`
        DROP TABLE IF EXISTS users cascade;
        DROP TABLE IF EXISTS movies cascade;
        DROP TABLE IF EXISTS genres cascade;
        DROP TABLE IF EXISTS likes;
        `);
    console.log("Tables dropped!");
  } catch (error) {
    console.log("Error dropping tables");
    throw error;
  }
}

//Create Tables because we need a place for the data to live

const createTables = async () => {
  console.log("Building tables...");
  await client.query(`
        CREATE TABLE users (
            "userId" SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            dob DATE
            );
            CREATE TABLE genres(
                "genreId" SERIAL PRIMARY KEY,
                genre varchar(255) UNIQUE NOT NULL
            );
        CREATE TABLE movies (
          "movieId" SERIAL PRIMARY KEY,
          name varchar(255) UNIQUE NOT NULL,
            "genreId" SERIAL REFERENCES genres ("genreId"), 
            image varchar(255)

        );
        CREATE TABLE likes (
            "userId" INTEGER REFERENCES users ("userId") NOT NULL, 
            "movieId" INTEGER REFERENCES movies("movieId")
        );
    `);
  console.log("Tables built!");
};

// //Insert mock data from seedData.js

//Create users

const createInitialUsers = async () => {
  try {
    //Looping through the "users" array from seedData
    for (const user of users) {
      //Insert each  user into the table
      await createUser(user);
    }
    console.log("created users");
  } catch (error) {
    throw error;
  }
};

//Create genres
const createInitialGenres = async () => {
  try {
    for (const genre of genres) {
      //Structured like this because we only have an array of strings in the seed data, and we want to put that in object format for the function
      await createGenre({ genre });
    }
    console.log("created genres");
  } catch (error) {
    throw error;
  }
};
// Create Movies
const createInitialMovies = async () => {
  try {
    //Looping through the "users" array from seedData
    for (const movie of movies) {
      //Insert each  user into the table
      // should i be putting movie below in curly brackets?
      await createMovie({ name: movie.name, image: movie.image });
    }
    console.log("created movies");
  } catch (error) {
    throw error;
  }
};

//Create likes
const createInitialLikes = async () => {
  try {
    for (const like of likes) {
      await createLike(like);
    }
    console.log("created likes");
  } catch (error) {
    throw error;
  }
};

// calling all my functions and "BUILD" my database. we're also nesting async functions because we want to make sure that when we createTables, we've given it an opportunity to dropTables first.
async function rebuildDb() {
  try {
    // actually connect to local db. we have to manually open a connection and close it because we can't be connected to a database all the time
    client.connect();

    // run our functions
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialGenres();
    await createInitialMovies();
    await createInitialLikes();
  } catch (error) {
    console.error(error);
  } finally {
    // ^ new concept: we can put a 3rd cause on a try catch called "finally"
    // close our connections
    client.end();
  }
}
rebuildDb();

// last step- we need to make a script to run the whole thing. in our package.json, we add "seed": "node ./db/seed.js"
