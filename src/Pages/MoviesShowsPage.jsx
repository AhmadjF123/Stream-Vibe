import React, { useState } from "react";
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

function MoviesShowsPage() {
  const [activeTab, setActiveTab] = useState("movies");
  return (
    <>
      <div className="pt-30 bg-primary">
        <HeroSectionMoviesShows />

        <div className="md:hidden flex justify-center rounded py-2 gap-2 my-6 mx-2 px-6 border border-grayBlack text-white">
          <button
            onClick={() => setActiveTab("movies")}
            className={`cursor-pointer px-15 py-2 rounded transition
        ${activeTab === "movies" ? "bg-red-500" : "bg-transparent"}
      `}
          >
            Movies
          </button>

          <button
            onClick={() => setActiveTab("series")}
            className={`cursor-pointer px-15 py-2 rounded transition
        ${activeTab === "series" ? "bg-red-500" : "bg-transparent"}
      `}
          >
            Shows
          </button>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden">
          {activeTab === "movies" ? (
            <div>
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
            </div>
          ) : (
            <div>
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
          )}
        </div>

        {/* ===== Mobile Section ===== */}





        {/* Desktop Section */}

        <div className="hidden md:block">
          <div>
            <ExploreSection
              title="Our Genres"
              showTitle={true}
              apiFunc={getGenresWithImages}
              clickableCategory = {true}
            />

            <ExploreSection
              title="Popular Top 10 In Genres"
              isTopTen
              showTitle={true}
              apiFunc={getTopMoviesForAllGenres}
              clickableCategory
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
          </div>

          <div>
            <ExploreSection
              title="Our Genres"
              showTitle={true}
              apiFunc={getTVGenresWithImages}
              clickableCategory
            />

            <ExploreSection
              title="Popular Top 10 In Genres"
              isTopTen
              showTitle={true}
              apiFunc={getTopTVShowsForAllGenres}
              clickableCategory
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
        </div>


        {/* ===== Desktop Section ===== */}

      </div>
    </>
  );
}

export default MoviesShowsPage;
