import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMoviesByGenre } from "../api/movieApi";

function CategoryDetailsPage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchMovies = async () => {
      try {
        const data = await getMoviesByGenre(id);
        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [id]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl text-white mb-6">Category Movies</h1>

      <div className="flex flex-wrap gap-6">
        {movies.map((movie) => (
          <CategoriesCard
            key={movie.id}
            movieTitle={movie.title}
            images={[
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            ]}
            item={movie}
            clickableMovie={true}
            showTitle={true}
            showRating={true}
            showViews={true}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryDetailsPage;
