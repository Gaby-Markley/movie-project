const client = require("./client");

const users = [
  { username: "jsmsith123", password: "fjdksla;", DOB: "1967/08/21" },
  { username: "gmarkley456", password: "lovemovies", DOB: "1995/05/21" },
  { username: "georgiegirl", password: "cjkei3!", DOB: "2000/01/05" },
  { username: "horrormovieluvr", password: "breakbEetle$", DOB: "1983/09/25" },
  { username: "cl0720", password: "fjeisl31!", DOB: "1995/07/20" },
];

const movies = [
  {
    name: "Eternal Sunshine of the Spotless Mind",
    genre: 4,
    image: "https://rb.gy/qbxfq",
  },
  { name: "The Orphanage", genreId: 1, image: "https://rb.gy/wn8xg" },
  { name: "Werewolves Within", genreId: 2, image: "https://rb.gy/2jahw" },
  { name: "Parasite", genreId: 5, image: "https://rb.gy/fbrpg" },
  {
    name: "About Time",
    genre: 6,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg",
  },
];

const genres = ["horror", "comedy", "action", "drama", "thriller", "sci-fi"];

const likes = [
  { user_id: 1, movie_id: 5 },
  { user_id: 3, movie_id: 5 },
  { user_id: 2, movie_id: 3 },
  { user_id: 1, movie_id: 2 },
  { user_id: 5, movie_id: 2 },
  { user_id: 4, movie_id: 4 },
];

module.exports = { users, movies, genres, likes };
