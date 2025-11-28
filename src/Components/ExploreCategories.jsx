import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getGenres, getMoviesByGenre } from "../api/movieApi";
import CategoriesCard from "./CategoriesCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ExploreCategories() {
  const [allGenres, setAllGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const itemsPerStep = 5;

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

  useEffect(() => {
    const startIndex = currentStep * itemsPerStep;
    const endIndex = startIndex + itemsPerStep;
    setGenres(allGenres.slice(startIndex, endIndex));
  }, [currentStep, allGenres]);

  const totalSteps = Math.ceil(allGenres.length / itemsPerStep);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="bg-primary text-white w-full flex flex-col justify-between overflow-hidden md:mt-20 pt-10 px-2">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 justify-between mb-10 px-4 md:px-10 lg:px-20">
          <div className="w-full">
            <h1 className="md:text-3xl text-[24px] font-bold mb-2">
              Explore our wide variety of categories
            </h1>
            <p className="text-customGray text-[14px] md:text-[16px]">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>

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
        <div className="flex md:hidden md:px-20 px-5 flex-wrap md:justify-between md:mt-15">
          <Swiper spaceBetween={20} slidesPerView={1.5}>
            {allGenres.map((genre) => (
              <SwiperSlide key={genre.id}>
                <CategoriesCard
                  title={genre.name}
                  images={
                    moviesByGenre[genre.id] || [
                      "logo.svg",
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

        {/* === Desktop (Normal cards + navigation) === */}
        <div className="hidden md:flex px-20 flex-wrap justify-between mt-15">
          {genres.map((genre) => (
            <CategoriesCard
              key={genre.id}
              title={genre.name}
              images={
                moviesByGenre[genre.id] || [
                  "logo.svg",
                  "logo.svg",
                  "logo.svg",
                  "logo.svg",
                ]
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExploreCategories;


















































// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { getMoviesByGenre } from "../api/movieApi";
// import CategoriesCard from "./CategoriesCard";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// function ExploreCategories({ title, desc, apiUrl, isGenres = true }) {
//   const [allItems, setAllItems] = useState([]);
//   const [moviesByGenre, setMoviesByGenre] = useState({});
//   const [currentStep, setCurrentStep] = useState(0);
//   const itemsPerStep = 5;

//  useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const data = await apiUrl(); // هنا تمرر الدالة المناسبة
      
//       if (isGenres) {
//         // كما هو عندك
//         setAllItems(data);
//         const moviesData = {};
//         for (let genre of data) {
//           const movies = await getMoviesByGenre(genre.id);
//           moviesData[genre.id] = movies
//             .slice(0, 4)
//             .map(
//               (movie) => `https://image.tmdb.org/t/p/w200${movie.poster_path}`
//             );
//         }
//         setMoviesByGenre(moviesData);
//       } else {
//         // بدل setAllItems القديم
//         setAllItems(data); // هنا data لازم يكون من getTrendingMoviesWithDetails
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, [apiUrl, isGenres]);


//   const startIndex = currentStep * itemsPerStep;
//   const endIndex = startIndex + itemsPerStep;
//   const itemsToShow = allItems.slice(startIndex, endIndex);
//   const totalSteps = Math.ceil(allItems.length / itemsPerStep);

//   const handleNext = () => {
//     if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) setCurrentStep(currentStep - 1);
//   };

//   return (
//     <div className="bg-primary text-white w-full flex flex-col justify-between overflow-hidden md:mt-20 pt-10 px-2">
//       {/* عنوان + وصف + navigation */}
//       <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 justify-between mb-10 px-4 md:px-10 lg:px-20">
//         <div className="w-full">
//           <h1 className="md:text-3xl text-[24px] font-bold mb-2">{title}</h1>
//           {desc && <p className="text-customGray text-[14px] md:text-[16px]">{desc}</p>}
//         </div>

//         <div className="bg-black rounded-2xl p-4 border border-zinc-800">
//           <div className="md:flex hidden items-center gap-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentStep === 0}
//               className="w-12 h-12 cursor-pointer bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
//             >
//               <FaArrowLeft className="w-6 h-6 text-white" />
//             </button>

//             <div className="flex gap-2">
//               {[...Array(totalSteps)].map((_, index) => (
//                 <div
//                   key={index}
//                   className={`h-1 w-5 rounded-full transition-colors duration-300 ${
//                     index === currentStep ? "bg-red-600" : "bg-zinc-700"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={handleNext}
//               disabled={currentStep === totalSteps - 1}
//               className="w-12 h-12 cursor-pointer bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
//             >
//               <FaArrowRight className="w-6 h-6 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Swiper */}
//       <div className="flex md:hidden md:px-20 px-5 flex-wrap md:justify-between md:mt-15">
//         <Swiper spaceBetween={20} slidesPerView={1.5}>
//           {allItems.map((item) => (
//             <SwiperSlide key={item.id}>
//               {isGenres ? (
//                 <CategoriesCard
//                   title={item.name}
//                   genre={item.name}
//                   images={moviesByGenre[item.id] || ["logo.svg","logo.svg","logo.svg","logo.svg"]}
//                 />
//               ) : (
//                 <CategoriesCard
//                   title={item.name}
//                   runtime={item.runtime}
//                   views={item.views}
//                   releaseDate={item.releaseDate}
//                   rating={item.rating}
//                   images={[`https://image.tmdb.org/t/p/w200${item.poster_path}`]}
//                 />
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop */}
//       <div className="hidden md:flex px-20 flex-wrap justify-between mt-15">
//         {itemsToShow.map((item) =>
//           isGenres ? (
//             <CategoriesCard
//               key={item.id}
//               title={item.name}
//               genre={item.name}
//               images={moviesByGenre[item.id] || ["logo.svg","logo.svg","logo.svg","logo.svg"]}
//             />
//           ) : (
//             <CategoriesCard
//               key={item.id}
//               // title={item.name}
//               runtime={item.runtime}
//               views={item.views}
//               // releaseDate={item.releaseDate}
//               // rating={item.rating}
//               images={[`https://image.tmdb.org/t/p/w200${item.poster_path}`]}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default ExploreCategories;
//   // images={
//   //         isGenres
//   //           ? moviesByGenre[item.id] || [
//   //               "logo.svg",
//   //               "logo.svg",
//   //               "logo.svg",
//   //               "logo.svg",
//   //             ]
//   //           : [`https://image.tmdb.org/t/p/w200${item.poster_path}`]
//   //       }
