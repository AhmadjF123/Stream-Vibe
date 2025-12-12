import React, { useState } from "react";
import { getPopularMovies } from "../api/movieApi";
import { useEffect } from "react";

import { HiVolumeUp } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HeroSectionMoviesShows() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getPopularMovies();
        setMovies(moviesData.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const itemsPerStep = 1;

  const totalSteps = Math.ceil(movies.length / itemsPerStep);

  const handleNext = () => {
    if (currentIndex < totalSteps - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const movie = movies[currentIndex];

  if (movies.length === 0)
    return (
      <div className="flex justify-center items-center mx-auto w-20 h-20 border-t-white border-r-transparent border-b-white border-l-transparent border-4 rounded-full animate-spin"></div>
    );

  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center rounded-lg overflow-hidden text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[60%] z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-sm mb-6">{movie.overview}</p>

        <div className="flex justify-center items-center gap-4">
          <button className="flex items-center bg-secondary px-6 py-3 rounded font-semibold text-sm cursor-pointer hover:bg-[#aa3232] transition-colors duration-300">
            Play Now
          </button>
          <button className="bg-[#0f0f0f] px-4 py-3 rounded-2xl hover:bg-[#605b5b] cursor-pointer transition-colors duration-300">
            +
          </button>
          <button className="bg-[#0f0f0f] p-4 rounded-2xl hover:bg-[#605b5b] cursor-pointer">
            <FaRegThumbsUp />
          </button>
          <button className="bg-[#0f0f0f] p-4 rounded-2xl hover:bg-[#605b5b] cursor-pointer">
            <HiVolumeUp />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between absolute bottom-4 z-10 w-full px-20">
        <button onClick={handlePrev}>
          <FaArrowLeft
            size={50}
            className="bg-[#0f0f0f] p-4 rounded-2xl hover:bg-[#605b5b] cursor-pointer"
          />
        </button>

        <div className="flex gap-2">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              className={`h-1 w-5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-red-600" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
        <button onClick={handleNext}>
          <FaArrowRight
            size={50}
            className="bg-[#0f0f0f] p-4 rounded-2xl hover:bg-[#605b5b] cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export default HeroSectionMoviesShows;
