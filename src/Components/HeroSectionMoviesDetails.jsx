import React, { useState } from "react";

import { HiVolumeUp } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";

function HeroSectionMoviesDetails() {
  return (
    <>
      <div
        className="relative w-full h-[80vh] bg-cover bg-center rounded-lg overflow-hidden text-white"
        // style={{
        //   backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        // }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[60%] z-10 text-center">
          <h1 className="text-4xl font-bold mb-4"></h1>
          <p className="text-sm mb-6"></p>

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

       
      </div>
    </>
  );
}

export default HeroSectionMoviesDetails;
