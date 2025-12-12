import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CategoriesCard from "./CategoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ExploreStyle from "./ExploreStyle";

function ExploreSection({
  title,
  desc,
  apiFunc,
  showArrow = true,
  isTopTen = false,
  showTitle = true,
  showViews = false,
  showReleaseDate = false,
  showDuration = false,
  showRating = false,
  clickableMovie = false,
  clickableSerie = false,
  isSeries = false,
  seriesEpisodes = false
}) {
  const [items, setItems] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const itemsPerStep = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiFunc(); // أي دالة ترسلها
        setItems(data);
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    };
    fetchData();
  }, [apiFunc]);

  const totalSteps = Math.ceil(items.length / itemsPerStep);
  const startIndex = currentStep * itemsPerStep;
  const itemsToShow = items.slice(startIndex, startIndex + itemsPerStep);

  const handleNext = () =>
    currentStep < totalSteps - 1 && setCurrentStep(currentStep + 1);
  const handlePrev = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  // if (items.length === 0)
  //   return (
  //     <div className="text-center text-white text-4xl pb-4 pt-20">
  //       Loading...
  //     </div>
  //   );

  if (items.length === 0)
    return (
      // <ExploreStyle/>
      <div className="flex justify-center items-center mx-auto w-20 h-20 border-t-white border-r-transparent border-b-white border-l-transparent border-4 rounded-full animate-spin pb-20 my-20"></div>
    );

  return (
    <div className="bg-primary text-white w-full flex flex-col justify-between overflow-hidden md:mt-20 px-2">
      {/* Header */}
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 justify-between px-4 md:px-10 lg:px-20">
        <div className="w-full">
          <h1 className="md:text-3xl text-[24px] font-bold mb-2">{title}</h1>
          {desc && (
            <p className="text-customGray text-[14px] md:text-[16px]">{desc}</p>
          )}
        </div>

        {/* Desktop navigation */}
        <div className="bg-black rounded-2xl p-4 border border-zinc-800">
          <div className="md:flex hidden items-center gap-4">
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

      {/* Mobile Swiper */}
      <div className="flex md:hidden md:px-20 px-5 flex-wrap md:justify-between md:mt-15">
        <Swiper spaceBetween={20} slidesPerView={1.5}>
          {items.map((item) => (
            <SwiperSlide key={item.id || item.title}>
              <CategoriesCard
                title={item.name || item.title || "Unknown"}
                images={
                  item.images || [
                    `https://image.tmdb.org/t/p/w200${
                      item.poster_path || item.poster || ""
                    }`,
                    "logo.svg",
                    "logo.svg",
                    "logo.svg",
                  ]
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex px-20 flex-wrap justify-between mt-15">
        {itemsToShow.map((item) => (
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
            seriesEpisodes = {seriesEpisodes}
          />
        ))}
      </div>
    </div>
  );
}

export default ExploreSection;
