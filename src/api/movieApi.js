import axios from "axios";

const API_KEY = "1e6554e8cb05cea9f7547d6cd702d3b6";
const BASE_URL = "https://api.themoviedb.org/3";

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

export const getGenresWithImages = async () => {
  try {
    const genres = await getGenres();
    const result = await Promise.all(
      genres.map(async (genre) => {
        const movies = await getMoviesByGenre(genre.id);
        return {
          id: genre.id,
          name: genre.name,
          images: movies
            .slice(0, 4)
            .map((m) => `https://image.tmdb.org/t/p/w200${m.poster_path}`),
        };
      })
    );
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getTopMoviesForAllGenres = async () => {
  try {
    const genres = await getGenres();
    const results = await Promise.all(
      genres.map(async (genre) => {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            with_genres: genre.id,
            sort_by: "vote_average.desc",
            "vote_count.gte": 300,
            page: 1,
          },
        });

        const top10 = response.data.results.slice(0, 10);

        return {
          genreId: genre.id,
          title: genre.name,
          images: top10
            .slice(0, 4)
            .map(
              (movie) => `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            ), // للعرض في الكارد
          allMovies: top10, // لتفتح عند الضغط
        };
      })
    );

    return results;
  } catch (error) {
    console.error("Error fetching top movies for all genres:", error);
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

// دالة لتنسيق العدد بـ K/M
function formatCount(num) {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return `${Math.round(num)}`;
}

export const getTrendingMoviesWithDetails = async (page = 1) => {
  try {
    const trendingResponse = await axios.get(
      `${BASE_URL}/trending/movie/week`,
      {
        params: { api_key: API_KEY, page },
      }
    );

    const trendingMovies = trendingResponse.data.results;

    // معامل لتقدير عدد المشاهدات من مؤشر الشعبية
    const EST_VIEWS_MULTIPLIER = 1000;

    const detailedMovies = await Promise.all(
      trendingMovies.map(async (movie) => {
        const details = await getMovieDetails(movie.id);

        const rawEstimatedViews =
          (movie.popularity || 0) * EST_VIEWS_MULTIPLIER;

        return {
          id: movie.id,
          name: movie.title,
          poster_path: movie.poster_path,
          runtime: details?.runtime || "N/A",
          viewCountRaw: Math.round(rawEstimatedViews), // الرقم الفعلي المقترَح
          viewCount: formatCount(rawEstimatedViews), // نص K/M
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

export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page,
      },
    });

    return response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date, // الاسم المطلوب
      overview: movie.overview,
    }));
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
};

export const getMustWatchMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        sort_by: "vote_average.desc",
        "vote_count.gte": 500,
        page,
      },
    });

    const movies = response.data.results;

    const EST_VIEWS_MULTIPLIER = 1000; // معامل تقدير عدد المشاهدات

    const detailedMovies = await Promise.all(
      movies.map(async (movie) => {
        const details = await getMovieDetails(movie.id);

        const rawEstimatedViews =
          (movie.popularity || 0) * EST_VIEWS_MULTIPLIER;

        return {
          id: movie.id,
          name: movie.title,
          poster_path: movie.poster_path,
          runtime: details?.runtime || "N/A",
          viewCountRaw: Math.round(rawEstimatedViews), // الرقم المقَرَّب
          viewCount: formatCount(rawEstimatedViews), // نص K/M
          rating: movie.vote_average,
        };
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching must watch movies:", error);
    return [];
  }
};

export const getFullMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        append_to_response: "credits,videos,images",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching full movie details:", error);
    return null;
  }
};

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

export const getTVShowsByGenre = async (genreId, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        with_genres: genreId,
        sort_by: "popularity.desc",
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching TV shows for genre ID ${genreId}:`, error);
    return [];
  }
};

export const getTVGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/tv/list`, {
      params: { api_key: API_KEY, language: "en-US" },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching TV genres:", error);
    return [];
  }
};

export const getTVShowDetails = async (tvId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvId}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        append_to_response: "credits,videos,images",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching TV show details for ID ${tvId}:`, error);
    return null;
  }
};

export const getTVGenresWithImages = async () => {
  try {
    const genres = await getTVGenres();
    const result = await Promise.all(
      genres.map(async (genre) => {
        const shows = await getTVShowsByGenre(genre.id);
        return {
          id: genre.id,
          name: genre.name,
          images: shows
            .slice(0, 4)
            .map((s) => `https://image.tmdb.org/t/p/w200${s.poster_path}`),
        };
      })
    );
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getMustWatchTVShows = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        sort_by: "vote_average.desc",
        "vote_count.gte": 300,
        page,
      },
    });

    const tvShows = response.data.results;

    const EST_VIEWS_MULTIPLIER = 1000;

    const detailedTVShows = await Promise.all(
      tvShows.map(async (show) => {
        const details = await getTVShowDetails(show.id);

        const rawEstimatedViews = (show.popularity || 0) * EST_VIEWS_MULTIPLIER;

        return {
          id: show.id,
          name: show.name,
          poster_path: show.poster_path,
          runtime: details?.episode_run_time?.[0] || "N/A",

          viewCountRaw: Math.round(rawEstimatedViews),

          viewCount: formatCount(rawEstimatedViews),
          rating: show.vote_average,
          seasons: details?.number_of_seasons || 0,
        };
      })
    );

    return detailedTVShows;
  } catch (error) {
    console.error("Error fetching must-watch TV shows:", error);
    return [];
  }
};

export const getUpcomingTVShows = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/on_the_air`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page,
      },
    });

    return response.data.results.map((show) => ({
      id: show.id,
      title: show.name,
      poster_path: show.poster_path,
      release_date: show.first_air_date,
      overview: show.overview,
    }));
  } catch (error) {
    console.error("Error fetching upcoming TV shows:", error);
    return [];
  }
};

export const getTrendingTVShowsWithDetails = async (page = 1) => {
  try {
    const trendingResponse = await axios.get(`${BASE_URL}/trending/tv/week`, {
      params: { api_key: API_KEY, page },
    });

    const trendingTVShows = trendingResponse.data.results;

    const EST_VIEWS_MULTIPLIER = 1000; // معامل تقدير عدد المشاهدات

    const detailedTVShows = await Promise.all(
      trendingTVShows.map(async (show) => {
        const details = await getTVShowDetails(show.id);

        const rawEstimatedViews = (show.popularity || 0) * EST_VIEWS_MULTIPLIER;

        // اختيار آخر موسم (اللي غالباً هو الموسم الحالي)
        const currentSeason = details?.seasons?.find(
          (season) => season.season_number === details?.number_of_seasons
        );

        return {
          id: show.id,
          name: show.name,
          poster_path: show.poster_path,
          runtime: details?.episode_run_time?.[0] || "N/A",
          viewCountRaw: Math.round(rawEstimatedViews),
          viewCount: formatCount(rawEstimatedViews),
          firstAirDate: show.first_air_date,
          rating: show.vote_average,
          episodes: currentSeason?.episode_count || "N/A", // عدد حلقات الموسم الحالي
          seasonNumber: currentSeason?.season_number || "N/A",
        };
      })
    );

    return detailedTVShows;
  } catch (error) {
    console.error("Error fetching trending TV shows:", error);
    return [];
  }
};

export const getTopTVShowsForAllGenres = async () => {
  try {
    const genres = await getTVGenres(); // لازم تعمل دالة مشابهة لـ getGenres لكنها للـ TV
    const results = await Promise.all(
      genres.map(async (genre) => {
        const response = await axios.get(`${BASE_URL}/discover/tv`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            with_genres: genre.id,
            sort_by: "vote_average.desc",
            "vote_count.gte": 200,
            page: 1,
          },
        });

        const top10 = response.data.results.slice(0, 10);

        return {
          genreId: genre.id,
          title: genre.name,
          images: top10
            .slice(0, 4)
            .map(
              (show) => `https://image.tmdb.org/t/p/w200${show.poster_path}`
            ),
          allShows: top10,
        };
      })
    );

    return results;
  } catch (error) {
    console.error("Error fetching top TV shows for all genres:", error);
    return [];
  }
};


export const getSeasonDetails = async (tvId, seasonNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvId}/season/${seasonNumber}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      }
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching season details:`, error);
    return null;
  }
};
