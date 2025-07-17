const API_KEY = "3f15293f3983259bb5efd09855ba75d4";
const BASE_URL = 'https://api.themoviedb.org/3';

// MAINLY WE WILL PERFORM 2 OPERATIONS USING API,
// 1. SEARCH FOR MOVIES
// 2. DISPLAYING TODAY'S POPULAR MOVIES

export const getPopularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query)=>{
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
};