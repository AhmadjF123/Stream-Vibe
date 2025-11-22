import axios from "axios";

const API_KEY = "1e6554e8cb05cea9f7547d6cd702d3b6";
const BASE_URL = "https://api.themoviedb.org/3";

// دالة لجلب أفلام حسب النوع (Genre)
export const getGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language: "en-US"
      }
    });
    return response.data.genres; // ترجع array من التصنيفات
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};



export const getPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: page
      }
    });
    return response.data.results; // ترجع فقط قائمة الأفلام
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};




// دالة لجلب أفلام حسب النوع (Genre)
export const getMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        with_genres: genreId,
        page: page
      }
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies for genre ${genreId}:`, error);
    return [];
  }
};



// دالة لجلب تفاصيل فيلم واحد
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: "en-US"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ${movieId}:`, error);
    return null;
  }
};