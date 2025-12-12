import React from "react";
import HeroSectionMoviesShows from "../Components/HeroSectionMoviesShows";
import ExploreSection from "../Components/ExploreSection";

import {
  getGenresWithImages,
  getTrendingMoviesWithDetails,
  getTopMoviesForAllGenres,
  getUpcomingMovies,
  getMustWatchMovies,
  getTVGenresWithImages,
  getTopTVShowsForAllGenres,
  getTrendingTVShowsWithDetails,
  getUpcomingTVShows,
  getMustWatchTVShows,
} from "../api/movieApi";
import CategoriesCard from "../Components/CategoriesCard";

function MoviesShowsPage() {
  return (
    <>
      <div className="pt-30 bg-primary">
        <HeroSectionMoviesShows />

        <ExploreSection
          title="Our Genres"
          showTitle={true}
          apiFunc={getGenresWithImages}
        />

        <ExploreSection
          title="Popular Top 10 In Genres"
          isTopTen
          showTitle={true}
          apiFunc={getTopMoviesForAllGenres}
        />

        <ExploreSection
          title="Trending Now"
          apiFunc={getTrendingMoviesWithDetails}
          showArrow={false}
          showTitle={false}
          showDuration={true}
          showViews={true}
          clickableMovie={true}
          clickableSerie={false}
        />

        <ExploreSection
          title="Upcoming Movies"
          apiFunc={getUpcomingMovies}
          showArrow={false}
          showTitle={false}
          showReleaseDate={true}
          clickableMovie={true}
          clickableSerie={false}
        />

        <ExploreSection
          title="Must - Watch Movies"
          apiFunc={getMustWatchMovies}
          showArrow={false}
          showTitle={false}
          showDuration={true}
          showRating={true}
          showViews={true}
          clickableMovie={true}
          clickableSerie={false}
        />

        <hr className="text-white" />
        {/* //////////////////////////////////////////////////// */}

        <ExploreSection
          title="Our Genres"
          showTitle={true}
          apiFunc={getTVGenresWithImages}
        />

        <ExploreSection
          title="Popular Top 10 In Genres"
          isTopTen
          showTitle={true}
          apiFunc={getTopTVShowsForAllGenres}
        />

        <ExploreSection
          title="Trending Shows Now"
          apiFunc={getTrendingTVShowsWithDetails}
          showArrow={false}
          showTitle={false}
          seriesEpisodes={true}
          clickableMovie={false}
          clickableSerie={true}
        />

        <ExploreSection
          title="Upcoming Series"
          apiFunc={getUpcomingTVShows}
          showArrow={false}
          showTitle={false}
          showReleaseDate={true}
          clickableMovie={false}
          clickableSerie={true}
        />

        <ExploreSection
          title="Must - Watch Series"
          apiFunc={getMustWatchTVShows}
          showArrow={false}
          showTitle={false}
          isSeries={true}
          clickableMovie={false}
          clickableSerie={true}
        />
      </div>
    </>
  );
}

export default MoviesShowsPage;
