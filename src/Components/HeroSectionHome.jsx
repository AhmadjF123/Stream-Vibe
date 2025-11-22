import React from "react";
import "../style.css";

function HeroSectionHome() {
  return (
    <>
      <div className="w-full h-screen relative bg-primary">
        <div className="grid grid-cols-9 grid-rows-4 gap-1 w-full h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
            ></div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4 text-center w-full px-4">
          <div className="relative">
            <img
              className="size-80 -blue-500 glass mb-2"
              src="logo2.svg"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 round"></div>
          </div>
          <h1 className="text-5xl font-bold text-white">
            The Best Streaming Experience
          </h1>

          <p className="text-customGray text-sm">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of <br /> content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to <br /> watch.
          </p>
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
