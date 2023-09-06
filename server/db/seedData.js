const client = require("./client");

const users = [
  { username: "jsmsith123", password: "fjdksla;", dob: "1967/08/21" },
  { username: "gmarkley456", password: "lovemovies", dob: "1995/05/21" },
  { username: "georgiegirl", password: "cjkei3!", dob: "2000/01/05" },
  { username: "horrormovieluvr", password: "breakbEetle$", dob: "1983/09/25" },
  { username: "cl0720", password: "fjeisl31!", dob: "1995/07/20" },
];

const genres = [
  { genre: "horror" },
  { genre: "comedy" },
  { genre: "action" },
  { genre: "drama" },
  { genre: "thriller" },
  { genre: "sci-fi" },
];

const movies = [
  // 1
  {
    name: "Eternal Sunshine of the Spotless Mind",
    genreId: 4,
    image: "https://rb.gy/qbxfq",
  },
  // 2
  { name: "The Orphanage", genreId: 1, image: "https://rb.gy/wn8xg" },
  // 3
  { name: "Werewolves Within", genreId: 2, image: "https://rb.gy/2jahw" },
  // 4
  { name: "Parasite", genreId: 5, image: "https://rb.gy/fbrpg" },
  // 5
  {
    name: "About Time",
    genreId: 6,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg",
  },
];

const likes = [
  { userId: 1, movieId: 5 },
  { userId: 3, movieId: 5 },
  { userId: 2, movieId: 3 },
  { userId: 1, movieId: 2 },
  { userId: 5, movieId: 2 },
  { userId: 4, movieId: 4 },
];

module.exports = { users, genres, movies, likes };
