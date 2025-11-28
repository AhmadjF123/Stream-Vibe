import React from "react";
import HeroSectionHome from "../Components/HeroSectionHome";
import ExploreCategories from "../Components/ExploreCategories";
import StreamingExperience from "../Components/StreamingExperience";
import Questions from "../Components/Questions";
import ChoosePlan from "../Components/ChoosePlan";
import StartFree from "../Components/StartFree";

import { getGenres } from "../api/movieApi";

function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-black">
        <HeroSectionHome />

        <ExploreCategories
          title="Explore our wide variety of categories"
          desc="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          apiUrl={getGenres}
          isGenres={true}
        />

        <StreamingExperience />
        <Questions />
        <ChoosePlan />
        <StartFree />
      </div>
    </>
  );
}

export default HomePage;
