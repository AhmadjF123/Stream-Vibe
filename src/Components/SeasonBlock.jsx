import React, { useState, useEffect } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { getSeasonDetails } from "../api/movieApi";
import EpisodeCard from "./EpisodeCard";

function SeasonBlock({ season, tvId }) {
  const [open, setOpen] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  const loadEpisodes = async () => {
    if (!open) {
      const data = await getSeasonDetails(tvId, season.season_number);
      setEpisodes(data?.episodes || []);
    }
    setOpen(!open);
  };

  return (
    <div className="bg-black rounded-2xl p-4 md:px-10 mb-4">
      {/* Header */}
      <div
        onClick={loadEpisodes}
        className="flex cursor-pointer justify-between items-center border-grayBlack rounded-2xl"
      >
        <div className="flex items-center gap-2 ">
          <h1 className="text-[16px] md:text-2xl">Season {season.season_number}</h1>
          <h3 className="text-customGray text-[14px]">
            {season.episode_count} Episodes
          </h3>
        </div>
        <div className="border border-grayBlack bg-[#2b2929] rounded-full p-4">
          {open ? <FiArrowUp size={20} /> : <FiArrowDown size={20} />}
        </div>
      </div>

      {/* Episodes */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-fit" : "max-h-0"
        }`}
      >
        {episodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  );
}

export default SeasonBlock;
