import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

import { useNavigate } from "react-router";

function CategoriesCard({
  movieTitle,
  images = [],
  showArrow = true,
  isTopTen = false,
  showTitle = true,
  showViews = false,
  showReleaseDate = false,
  showDuration = false,
  showRating = false,
  item,
  clickableMovie = false,
  clickableSerie = false,
  clickableCategory = false,
  isSeries = false,
  seriesEpisodes = false,
}) {
  const navigate = useNavigate();

  const handleNavigateMovie = () => {
    if (!clickableMovie) return; // ما بدي يروح للتفاصيل
    if (!item?.id) return; // لازم ID

    navigate(`/movie-details/${item.id}`);
  };

  const handleNavigateSerie = () => {
    if (!clickableSerie) return; // ما بدي يروح للتفاصيل
    if (!item?.id) return; // لازم ID

    navigate(`/serie-details/${item.id}`);
  };

  const handleNavigateCategories = () => {
    if (!clickableCategory) return; // ما بدي يروح للتفاصيل
    if (!item?.id) return; // لازم ID

    const mediaType = isSeries ? "tv" : "movie";

    navigate(`/category-details/${mediaType}/${item.id}`);
  };

  const handleCardClick = () => {
    if (clickableMovie) {
      handleNavigateMovie();
    } else if (clickableSerie) {
      handleNavigateSerie();
    } else if (clickableCategory) {
      handleNavigateCategories();
    }
  };

  const isSingleImage = images.length === 1;

  const formatDuration = (mins) => {
    if (!mins) return "";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}min`;
  };

  const formatViews = (num) => {
    if (!num) return "";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M ";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K ";
    return num + " ";
  };

  const formatReleaseDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const renderStars = (rating) => {
    const stars = Math.round(rating / 2);

    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span
            className={`${
              i < stars ? "text-red-500" : "text-white"
            } text-[20px] md:text-[10px]`}
            key={i}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className={`w-fit flex flex-col justify-between border border-gray-700 p-4 rounded-2xl mb-7 bg-zinc-900 ${
        clickableMovie || clickableSerie || clickableCategory
          ? "cursor-pointer hover:bg-zinc-800"
          : ""
      }`}
    >
      {isSingleImage ? (
        <img
          src={images[0]}
          alt={movieTitle || "Movie"}
          className="rounded w-55 h-72 object-cover"
        />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={movieTitle || "Movie"}
              className="rounded w-24 h-24 object-cover"
            />
          ))}
        </div>
      )}
      <div className="mt-4">
        {isTopTen && (
          <div className="bg-secondary mb-2 text-sm text-white w-fit px-2 py-1 rounded">
            <h2>Top 10 In</h2>
          </div>
        )}

        <div className="flex justify-between w-full mb-1">
          {showTitle && movieTitle && (
            <h3 className="text-white text-sm font-medium wrap-break-words max-w-[150px]">
              {movieTitle}
            </h3>
          )}
          {showArrow && (
            <FaArrowRight className="w-5 h-5 ml-auto text-white shrink-0" />
          )}
        </div>

        <div className="text-xs text-customGray">
          <div className="flex flex-col items-center md:flex-row justify-between">
            {showDuration && item?.runtime && (
              <div className="flex items-center gap-1 border border-primary w-fit rounded-2xl px-2 bg-black py-1">
                <FaClock size={15} />
                <span>{formatDuration(item.runtime)}</span>
              </div>
            )}

            {showViews && !showRating && (
              <div className="flex items-center gap-1 border border-primary w-fit rounded-2xl px-2 bg-black py-1">
                <FaEye size={15} />
                {formatViews(
                  item.viewCount || item.vote_count || item.popularity
                )}
              </div>
            )}

            {showViews && showRating && (
              <div className="flex items-center gap-1 border border-primary w-fit rounded-2xl px-2 bg-black py-1">
                <div>{renderStars(item.rating)}</div>
                {formatViews(
                  item.viewCount || item.vote_count || item.popularity
                )}
              </div>
            )}
          </div>

          {showReleaseDate && item?.release_date && (
            // <div ></div>
            <p className="text-center mx-auto border border-primary w-fit rounded-2xl px-4 bg-black py-1">
              Released at {formatReleaseDate(item.release_date)}
            </p>
          )}

          {isSeries && (
            <div className="flex text-[20px] md:text-[14px] gap-2 flex-col items-center md:flex-row justify-between">
              <h1 className=" border border-primary w-fit rounded-2xl px-4 bg-black py-1">
                {item.seasons} {item.seasons > 1 ? "Seasons" : "Season"}
              </h1>

              <div className="flex items-center gap-1 border border-primary w-fit rounded-2xl px-2 bg-black py-1">
                <h1>{renderStars(item.rating)}</h1>
                {formatViews(item.viewCount)}
              </div>
            </div>
          )}

          {seriesEpisodes && (
            <div className="flex text-[20px] md:text-[14px] gap-2 flex-col items-center md:flex-row justify-between">
              <h1 className=" border border-primary w-fit rounded-2xl px-4 bg-black py-1">
                {item.episodes} Episodes
              </h1>

              <div className="flex items-center gap-1 border border-primary w-fit rounded-2xl px-2 bg-black py-1">
                <h1>{renderStars(item.rating)}</h1>
                {formatViews(item.viewCount)}
              </div>
            </div>
          )}

          {/* {showRating && } */}
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
