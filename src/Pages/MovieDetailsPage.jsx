import React from "react";
import HeroSectionMoviesDetails from "../Components/HeroSectionMoviesDetails";
import StartFree from "../Components/StartFree";
import MovieDetails from "../Components/MovieDetails";

function MovieDetailsPage() {
  return (
    <>
      <div className="pt-30 bg-black">

        <MovieDetails />

        <StartFree />
      </div>
    </>
  );
}

export default MovieDetailsPage;
