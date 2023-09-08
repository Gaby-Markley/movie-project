// movies fetch requests

const baseUrl= 'http://localhost:8080/api.movies';
// ^whatever we're running our server on

export async function fetchAllMovies() {
    try{
const response = await fetch(`${baseUrl}/`);
const return = await response.json();
return response;
    }
}
// fetchs must be async/await 
// ending of url is based upon the route we made in the server 

// ^^^^^line 8-10, look at keirans