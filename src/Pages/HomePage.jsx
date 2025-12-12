import React from "react";
import HeroSectionHome from "../Components/HeroSectionHome";
import ExploreSection from "../Components/ExploreSection";
import StreamingExperience from "../Components/StreamingExperience";
import Questions from "../Components/Questions";
import ChoosePlan from "../Components/ChoosePlan";
import StartFree from "../Components/StartFree";

import { getGenresWithImages } from "../api/movieApi";

import { FaClock } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-black">
        <HeroSectionHome />

        <ExploreSection
          title="Explore our wide variety of categories"
          desc="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          showTitle={true}
          apiFunc={getGenresWithImages}
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
