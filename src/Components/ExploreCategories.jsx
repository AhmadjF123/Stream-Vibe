import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getGenres, getMoviesByGenre } from "../api/movieApi";
import CategoriesCard from "./CategoriesCard";

function ExploreCategories() {
  const [allGenres, setAllGenres] = useState([]); // كل التصنيفات
  const [genres, setGenres] = useState([]); // التصنيفات المعروضة حالياً
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [currentStep, setCurrentStep] = useState(0); // خطوة العرض الحالية
  const itemsPerStep = 5; // عدد التصنيفات لكل مرة

  // جلب التصنيفات وصور الأفلام
  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreList = await getGenres();
        setAllGenres(genreList);

        const moviesData = {};
        for (let genre of genreList) {
          const movies = await getMoviesByGenre(genre.id);
          moviesData[genre.id] = movies
            .slice(0, 4)
            .map(
              (movie) => `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            );
        }
        setMoviesByGenre(moviesData);
      } catch (error) {
        console.error("Error fetching genres or movies:", error);
      }
    };
    fetchData();
  }, []);

  // تحديث التصنيفات المعروضة حسب currentStep
  useEffect(() => {
    const startIndex = currentStep * itemsPerStep;
    const endIndex = startIndex + itemsPerStep;
    setGenres(allGenres.slice(startIndex, endIndex));
  }, [currentStep, allGenres]);

  // حساب عدد الخطوات ديناميكياً
  const totalSteps = Math.ceil(allGenres.length / itemsPerStep);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="bg-primary text-white w-full flex flex-col justify-between overflow-hidden">
        <div className="flex mx-auto text-white text-sm font-semibold bg-secondary px-5 py-3 rounded mt-10 mb-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 22v-20l18 10-18 10z" />
          </svg>
          <button>Start Watching Now</button>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 justify-between mb-10 px-4 md:px-10 lg:px-20">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-2">
              Explore our wide variety of categories
            </h1>
            <p className="text-customGray">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>

          <div className="bg-black rounded-2xl p-4 border border-zinc-800">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="w-12 h-12 cursor-pointer bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaArrowLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-2">
                {[...Array(totalSteps)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-5 rounded-full transition-colors duration-300 ${
                      index === currentStep ? "bg-red-600" : "bg-zinc-700"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentStep === totalSteps - 1}
                className="w-12 h-12 cursor-pointer bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      <div className="flex px-20 flex-wrap justify-between mt-15">
        {genres.map((genre) => (
          <CategoriesCard
            key={genre.id}
            title={genre.name}
            images={moviesByGenre[genre.id] || ["logo.svg", "logo.svg", "logo.svg", "logo.svg"]}
          />
        ))}
      </div>
      </div>

    </>
  );
}

export default ExploreCategories;
