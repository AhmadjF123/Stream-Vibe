import React from "react";
import HeroSectionHome from "../Components/HeroSectionHome";
import ExploreCategories from "../Components/ExploreCategories";
import StreamingExperience from "../Components/StreamingExperience";
import Questions from "../Components/Questions";
import ChoosePlan from "../Components/ChoosePlan";
import StartFree from "../Components/StartFree";

function HomePage() {
  return (
    <>
      <div className="flex flex-col px-10 bg-black">
        <HeroSectionHome />
        <ExploreCategories />
        <StreamingExperience />
        <Questions />
        <ChoosePlan />
        <StartFree />
      </div>
    </>
  );
}

export default HomePage;
