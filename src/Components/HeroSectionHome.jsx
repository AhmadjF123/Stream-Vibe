import React from "react";
import "../style.css";

function HeroSectionHome() {
  return (
    <>
      <div className="w-full h-screen relative bg-primary ">
        <div className="grid grid-cols-3 grid-rows-4 sm:grid-cols-4 sm:grid-rows-3 lg:grid-cols-9 lg:grid-rows-4 gap-1 w-full h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
            ></div>
          ))}
        </div>

        <div className="absolute md:top-1/3 top-40 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4 text-center w-full px-4 pb-20">
          <div className="relative">
            <img
              className="md:size-80 size-40 glass mb-2"
              src="logo2.svg"
              alt=""
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-0 h-0 round"></div>
          </div>

          <h1 className="md:text-5xl text-[28px] font-bold text-white">
            The Best Streaming Experience
          </h1>

          <p className="text-customGray text-sm hidden md:block">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of <br /> content,
            including the latest blockbusters, classic movies, popular TV shows,
            and more. You can also create your own watchlists, so you can easily
            find the content you want to <br /> watch.
          </p>

          <p className="text-customGray text-sm md:hidden">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime.
          </p>

          <div className="flex mx-auto w-fit text-white text-sm font-semibold bg-secondary px-5 py-3 rounded ">
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
        </div>

        <div className="absolute inset-0  opacity-50 z-10   line"></div>
        <div className="absolute inset-0  opacity-50 z-10   line"></div>

        <div className="absolute inset-0  opacity-50 z-10   line-2"></div>
        <div className="absolute inset-0  opacity-50 z-10   line-2"></div>
        <div className="absolute inset-0  opacity-50 z-10   line-2"></div>
        <div className="absolute inset-0  opacity-50 z-10   line-2"></div>
      </div>
    </>
  );
}

export default HeroSectionHome;
