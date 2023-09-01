const client = require("./client");

const { createUser, getAllUsers } = require("./helpers/users");
const { createMovie } = require("./helpers/movies");
const { createLikes } = require("./helpers/likes");

const { users, movies, likes } = require("./seedData");

// //Drop Tables for cleanliness
async function dropTables() {
  try {
    console.log("Starting to drop tables");
    await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS movies;
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
            dob integer NOT NULL
        );
        CREATE TABLE movies (
             "movieId" SERIAL PRIMARY KEY,
            "genreId" SERIAL REFERENCES genres ("genreId"), 
            image varchar(255)

        );
        CREATE TABLE genres(
            "genreId" SERIAL PRIMARY KEY,
            genres varchar(255) UNIQUE NOT NULL
        );
        CREATE TABLE likes (
            "userId" INTEGER REFERENCES users ("userId") NOT NULL, 
            "movieId" INTEGER REFERENCES movies("movieId")
        );
    `);
  console.log("Tables built!");
};

// //Insert mock data from seedData.js
// //Create trainers
// const createInitialTrainers = async () => {
//     try {
//         //Looping through the "trainers" array from seedData
//         for (const trainer of trainers) {
//             //Insert each trainer into the table
//             await createTrainer(trainer)
//         }
//         console.log("created trainers")
//     } catch (error) {
//         throw error
//     }
// }

// //Create types
// const createInitialTypes = async () => {
//     try {
//         for (const typeName of types) {
//             //Structured like this because we only have an array of strings in the seed data, and we want to put that in object format for the function
//             await createType( { type: typeName } )
//         }
//         console.log("created types")
//     } catch (error) {
//         throw error
//     }
// }

// //Create species
// const createInitialSpecies = async () => {
//     try {
//         for (const specy of species) {
//             //Single specy because we're popping one at a time in the DB
//             await createSpecies(specy)
//         }
//         console.log("created species")
//     } catch (error) {
//         throw error
//     }
// }

// //Create pokemon
// const createInitialPokemon = async () => {
//     try {
//         for (const pokeman of pokemon) {
//             //Single pokeman because we're popping one at a time in the DB
//             await createPokemon(pokeman)
//         }
//         console.log("created pokemon")
//     } catch (error) {
//         throw error
//     }
// }

// //Call all my functions and 'BUILD' my database
// const rebuildDb = async () => {
//     try {
//         //ACTUALLY connect to my local database
//         client.connect()
//         //Run our functions
//         await dropTables()
//         await createTables()

//         //Generating starting data
//         console.log("starting to seed...")
//         await createInitialTrainers()
//         await createInitialTypes()
//         await createInitialSpecies()
//         await createInitialPokemon()

//     } catch (error) {
//         console.error(error)
//     } finally {
//         //close our connection
//         client.end()
//     }
// }

// rebuildDb()
