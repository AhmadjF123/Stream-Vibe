import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMoviesByGenre, getSeriesByGenre } from "../api/movieApi";
import CategoriesCard from "../Components/CategoriesCard";

function CategoryDetailsPage() {
  const { genreId, mediaType } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!genreId || !mediaType) return;

    const fetchData = async () => {
      try {
        const data =
          mediaType === "movie"
            ? await getMoviesByGenre(genreId)
            : await getSeriesByGenre(genreId);

        setItems(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [genreId, mediaType]);

  return (
    <div className="px-6 py-10 pt-30">
      <h1 className="text-2xl text-white mb-6">
        {mediaType === "movie" ? "Movies" : "Series"}
      </h1>

      <div className="flex flex-wrap gap-6">
        {items.map((item) => (
          <CategoriesCard
            key={item.id}
            movieTitle={item.title || item.name}
            images={[
              `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            ]}
            item={item}
            clickableMovie={mediaType === "movie"}
            clickableSerie={mediaType === "tv"}
            showTitle
            showRating
            showViews
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryDetailsPage;
