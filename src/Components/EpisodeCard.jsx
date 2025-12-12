import React from "react";
import { FaClock } from "react-icons/fa";

function EpisodeCard({ episode }) {
  return (
    <div className="flex items-center gap-10 py-4 mt-10 border-t-2 border-grayBlack">
      {/* Episode number */}
      <div>
        <h1 className="text-[30px] text-customGray">
          {episode.episode_number.toString().padStart(2, "0")}
        </h1>
      </div>

      {/* Episode image */}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
          className="rounded"
        />
      </div>

      {/* Episode content */}
      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-[20px]">{episode.name}</h1>

          <div className="flex gap-1 items-center bg-third px-2 py-1 rounded">
            <FaClock />
            <h2>{episode.runtime || 0} min</h2>
          </div>
        </div>

        <p className="text-[18px]  text-customGray">{episode.overview}</p>
      </div>
    </div>
  );
}

export default EpisodeCard;
