const BASE_URL = "http://localhost:8080/api";

export async function fetchAllMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movies`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Cannot fetch all movies", error);
  }
}

export async function fetchAllUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    console.log("users fetched", users);
    return users;
  } catch (error) {
    console.error("Unable to fetch all users", error);
  }
}

export async function fetchUserProfile(userId) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("cannot fetch user profile", error);
  }
}

export async function fetchLike(likeId) {
  try {
    const response = await fetch(`${BASE_URL}/likes/${likeId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("cannot fetch like", error);
  }
}
