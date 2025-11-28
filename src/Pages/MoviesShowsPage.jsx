import React from "react";
import HeroSectionMoviesShows from "../Components/HeroSectionMoviesShows";
import ExploreCategories from "../Components/ExploreCategories";

import {
  getGenres,
  getPopularMovies,
  getTrendingMoviesWithDetails,
  getTop10MoviesByGenre,
} from "../api/movieApi";

function MoviesShowsPage() {
  return (
    <>
      <div className="pt-30 bg-primary">
        <HeroSectionMoviesShows />

        <ExploreCategories
          title="Our Genres"
          apiUrl={getGenres}
          isGenres={true}
        />

        
      </div>
    </>
  );
}

export default MoviesShowsPage;
