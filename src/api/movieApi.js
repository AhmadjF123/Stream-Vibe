import axios from "axios";

const API_KEY = "1e6554e8cb05cea9f7547d6cd702d3b6";
const BASE_URL = "https://api.themoviedb.org/3";

// دالة لجلب أفلام حسب النوع (Genre)
export const getGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
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
        page: page,
      },
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
        page: page,
      },
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
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ${movieId}:`, error);
    return null;
  }
};

// دالة لجلب Trending Movies + runtime
export const getTrendingMoviesWithDetails = async (page = 1) => {
  try {
    // 1- جيب قائمة الـ trending
    const trendingResponse = await axios.get(
      `${BASE_URL}/trending/movie/week`,
      {
        params: { api_key: API_KEY, page },
      }
    );

    const trendingMovies = trendingResponse.data.results;

    // 2- لكل فيلم، جيب التفاصيل للحصول على runtime
    const detailedMovies = await Promise.all(
      trendingMovies.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return {
          id: movie.id,
          name: movie.title,
          poster_path: movie.poster_path,
          runtime: details?.runtime || "N/A",
          views: movie.popularity.toFixed(0), // عدد تقريبي للشعبية
          releaseDate: movie.release_date,
          rating: movie.vote_average,
        };
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};



// دالة لجلب أفضل 10 أفلام شعبية لكل نوع (Genre)
export const getTop10MoviesByGenre = async (genreId) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        with_genres: genreId,
        sort_by: "popularity.desc", // ترتيب حسب الشعبية
        page: 1,
      },
    });

    // ناخد أول 10 أفلام فقط
    const top10 = response.data.results.slice(0, 10);

    // جلب التفاصيل لكل فيلم (runtime وعدد المشاهدات)
    const detailedTop10 = await Promise.all(
      top10.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return {
          id: movie.id,
          name: movie.title,
          poster_path: movie.poster_path,
          runtime: details?.runtime || "N/A",
          views: movie.popularity.toFixed(0),
          releaseDate: movie.release_date,
          rating: movie.vote_average,
        };
      })
    );

    return detailedTop10;
  } catch (error) {
    console.error(`Error fetching top 10 movies for genre ${genreId}:`, error);
    return [];
  }
};
