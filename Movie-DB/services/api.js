const api_key = "e58b2ac2f65cf68d95ad39f2dcf1e437" ;
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${api_key}`);
    const data = await response.json();
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${api_key}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    return data.results
};