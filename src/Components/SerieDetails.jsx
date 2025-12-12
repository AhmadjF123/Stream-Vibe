import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTVShowDetails } from "../api/movieApi";

import { HiVolumeUp } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { BsGrid } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdEventBusy } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";

import SeasonBlock from "./SeasonBlock";

function SerieDetails() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getTVShowDetails(id);
      setSerie(data);
    };
    fetchDetails();
  }, [id]);

  if (!serie) {
    return (
      <div className="flex justify-center items-center mx-auto w-20 h-20 border-t-white border-r-transparent border-b-white border-l-transparent border-4 rounded-full animate-spin pb-20"></div>
    );
  }
  return (
    <>
      <div className="text-white flex flex-col gap-4 pt-4 pb-10 px-20 bg-black">
        <div
          className="relative w-full h-[80vh] bg-cover bg-center rounded-lg overflow-hidden text-white"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[60%] z-10 text-center">
            <div>
              <h1 className="text-5xl mb-4">{serie.name}</h1>
              <h1>{serie.overview}</h1>
            </div>
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

        <div className="flex gap-4">
          <div className="w-[70%] flex flex-col gap-4">
            {/* <div className="bg-primary px-10 py-4 rounded-2xl">
              <h1 className="text-[24px] mb-4">Seasons and Episodes</h1>
              <div className="bg-black rounded-2xl py-4 px-10">
                <div
                  onClick={() => setEpisodeOpen(!episodeOpen)}
                  className="flex cursor-pointer justify-between items-center  border-grayBlack rounded-2xl"
                >
                  <div className="flex items-center gap-2 ">
                    <h1 className="text-2xl">Season 01</h1>
                    <h3 className="text-customGray">9 Episodes</h3>
                  </div>
                  <div className="border border-grayBlack bg-[#2b2929] rounded-full p-4">
                    {episodeOpen ? (
                      <FiArrowUp size={20} />
                    ) : (
                      <FiArrowDown size={20} />
                    )}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    episodeOpen ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                  <EpisodeCard />
                </div>
              </div>
            </div> */}

            <div className="bg-primary px-10 py-4 rounded-2xl">
              <h1 className="text-[24px] mb-4">Seasons and Episodes</h1>

              {serie.seasons
                .filter((s) => s.season_number !== 0)
                .map((season) => (
                  <SeasonBlock
                    key={season.id}
                    season={season}
                    tvId={serie.id}
                  />
                ))}
            </div>

            <div className="border border-grayBlack bg-primary rounded px-10 py-5">
              <h1 className="text-customGray">Description</h1>
              <p>{serie.overview}</p>
            </div>

            <div className="border border-grayBlack bg-primary rounded px-10 py-5">
              <div className="flex items-center justify-between">
                <h1 className="text-customGray">Cast</h1>
              </div>

              <div className="flex gap-4 overflow-x-auto py-3">
                {serie.credits?.cast?.slice(0, 10).map((actor) => (
                  <div key={actor.id} className="w-24">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      className="rounded mb-2"
                      alt={actor.name}
                    />
                    {/* <p className="text-sm text-center">{actor.name}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[30%] h-fit border border-grayBlack rounded-2xl bg-primary px-10 py-5">
            <div className="flex justify-between">
              <div className="mb-4">
                <div className="text-customGray mb-2 flex items-center gap-1 ">
                  <h1>
                    <AiOutlineCalendar />
                  </h1>
                  <h1 className="text-[18px]"> Released Year</h1>
                </div>
                <h2 className="text-[20px]">
                  {serie.first_air_date?.slice(0, 4)}
                </h2>
              </div>

              <div className="mb-4">
                <div className="text-customGray mb-2 flex items-center gap-1 ">
                  <h1>{serie.status === "Ended" ? <MdEventBusy /> : <MdLiveTv />}</h1>
                  <h1 className="text-[18px]">
                    {serie.status == "Ended" ? "End Year" : "Still Airing"}
                  </h1>
                </div>
                <h2 className="text-[20px]">
                  {serie.last_air_date?.slice(0, 4)} {serie.status !== "Ended" ? "- Present" :""}
                </h2>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-customGray mb-2 flex items-center gap-1">
                <h1>
                  <IoLanguageSharp />
                </h1>
                <h1 className="text-[18px]">Available Languages</h1>
              </div>
              <div className="flex gap-1">
                {serie.spoken_languages?.map((l) => (
                    <div className="bg-black w-fit px-4 py-2 border border-grayBlack rounded-[10px] text-[20px]">{l.english_name}</div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-customGray mb-2 flex items-center gap-1">
                <h1>
                  <CiStar />
                </h1>
                <h1 className="text-[18px]"> Ratings</h1>
              </div>
              <h2 className="bg-black w-fit px-4 py-2 border border-grayBlack rounded-[10px] text-[20px]">{serie.vote_average}</h2>
            </div>

            <div className="mb-4">
              <div className="text-customGray mb-2 flex items-center gap-1">
                <h1>
                  <BsGrid />
                </h1>
                <h1 className="text-[18px]">Genres</h1>
              </div>
              <h2 className="flex gap-1">
                {serie.genres?.map((g) => (
                    <div className="bg-black w-fit px-4 py-2 border border-grayBlack rounded-[10px] text-[20px]">{g.name}</div>
                ))}
              </h2>
            </div>

            <div className="mb-4">
              <h1 className="text-customGray text-[18px]">Creator</h1>
              <h2 className="text-[20px]">
                {serie.created_by?.map((c) => c.name).join(", ") || "Unknown"}
              </h2>
            </div>

            <div className="mb-4">
              <h1 className="text-customGray text-[18px]">Music</h1>
              <h2 className="text-[20px]">
                {serie.credits?.crew
                  ?.filter((p) => p.job === "Original Music Composer")
                  .map((p) => p.name)
                  .join(", ") || "Unknown"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SerieDetails;
