import React, { useState } from "react";
import { getPopularMovies } from "../api/movieApi";
import { useEffect } from "react";

import { HiVolumeUp } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

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
    <>
      <div
        className="relative w-full h-[75vh] md:h-[80vh] bg-cover bg-center rounded-2xl overflow-hidden text-white"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute left-1/2 bottom-30 md:bottom-20 -translate-x-1/2 z-10 text-center">
          <div className="mb-4">
            <h1 className="text-[24px]">{movie.title}</h1>
            <h1 className="hidden md:block">{movie.overview}</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="w-full md:w-auto">
              <button className="flex justify-center items-center bg-secondary w-full md:px-6 py-3 rounded font-semibold text-sm cursor-pointer hover:bg-[#aa3232] transition-colors duration-300">
                Play Now
              </button>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#0f0f0f] px-4 py-3 rounded hover:bg-[#605b5b] cursor-pointer transition-colors duration-300">
                +
              </button>
              <button className="bg-[#0f0f0f] p-4 rounded hover:bg-[#605b5b] cursor-pointer">
                <FaRegThumbsUp />
              </button>
              <button className="bg-[#0f0f0f] p-4 rounded hover:bg-[#605b5b] cursor-pointer">
                <HiVolumeUp />
              </button>
            </div>
          </div>
        </div>

        {/* <Swiper spaceBetween={20} slidesPerView={1.5}>
          {items.map((item) => (
            <SwiperSlide key={item.id || item.title}>
              <CategoriesCard
                key={item.id || item.title}
                movieTitle={item.name || item.title || "Unknown"}
                images={
                  item.images
                    ? item.images // لو فيه array من الصور (Genres أو Top 10)
                    : [
                        `https://image.tmdb.org/t/p/w200${
                          item.poster_path || item.poster
                        }`,
                      ] // صورة واحدة للأفلام العادية
                }
                showArrow={showArrow}
                isTopTen={isTopTen}
                showTitle={showTitle}
                showViews={showViews} // true أو false
                showReleaseDate={showReleaseDate} // true أو false
                showDuration={showDuration} // true أو false
                showRating={showRating} // true أو false
                item={item}
                clickableMovie={clickableMovie}
                clickableSerie={clickableSerie}
                isSeries={isSeries}
                seriesEpisodes={seriesEpisodes}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}


{/* Mobile Swiper */}
<div className="md:hidden absolute bottom-6 left-0 w-full z-10 px-4">
  <Swiper
    spaceBetween={12}
    slidesPerView={1}
    onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
  >
    {movies.map((movieItem, index) => (
      <SwiperSlide key={movieItem.id}>
        {/* <div className="flex justify-center gap-2">
          {[...Array(totalSteps)].map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                index === dotIndex ? "bg-red-600" : "bg-zinc-700"
              }`}
            />
          ))}
        </div> */}
      </SwiperSlide>
    ))}
  </Swiper>
</div>

















        <div className="hidden md:flex items-center justify-between absolute bottom-4 z-10 w-full px-20">
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
    </>
  );
}

export default HeroSectionMoviesShows;
