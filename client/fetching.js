const BASE_URL = "http://localhost:8080/api";
// =========================MOVIES=====================
// movies- getAllMovies, GetMoviebyid, createMovie, https://github.com/Gaby-Markley/movie-project/blob/main/server/helpers/movies.js

// getAllMovies
export async function fetchAllMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movies`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Cannot fetch all movies", error);
  }
}

// getmoviebyId
export const fetchSingleMovie = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movies/${movieId}`);
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error("Unable to fetch movie", error);
  }
};

// createMovie (keys: name, movieId, genreId, image)
// HOW DO I DO THISSSSS
export const createMovie = async (name, image) => {
  try {
    const response = await fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
      }),
    });
    const result = await response.json();
    console.log("Movie Added ", result);
    fetchAllMovies();
  } catch (err) {
    console.error("Oops, something went wrong with adding that movie!", err);
  }
};

// =========================USERS==========
// users- createUser, getAllUsers, getUserById, updateUser https://github.com/Gaby-Markley/movie-project/blob/main/server/helpers/users.js

// Fetch All Users
export async function fetchAllUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();
    console.log("users fetched", users);
    return users;
  } catch (error) {
    console.error("Unable to fetch all users", error);
  }
}

// Fetch User Profile
export async function fetchUserProfile(userId) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("cannot fetch user profile", error);
  }
}

// CREATE USER
export const createUser = async (username, password, dob) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        dob,
      }),
    });
    const result = await response.json();
    console.log("User Added ", result);
    fetchAllUsers();
  } catch (err) {
    console.error("Oops, something went wrong with adding that user!", err);
  }
};

// Update User
export async function updateUser(userId) {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });
    const result = await response.json();
    alert("User profile updated");
    return result;
  } catch (error) {
    alert("Can't updatte user");
    console.error(error);
  }
}
// =================================LIKE===================================
// Likes- CreateLikes, deleteLikes https://github.com/Gaby-Markley/movie-project/blob/main/server/helpers/likes.js

// createLike
// not sure what to put in the params of a create function
export const createLike = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        movieId,
      }),
    });
    const result = await response.json();
    console.log("You liked a movie!", result);
    return result;
  } catch (err) {
    console.error("Oops, couldn't like that movie", err);
  }
};

// deleteLike
export const deleteLike = async (likeId) => {
  try {
    const response = await fetch(`${API_URL}/likes/${likeId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Can't delete like ", error);
  }
};
