import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { searchMulti } from "../api/movieApi";

import { useNavigate } from "react-router";

function Navbar() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      setLoading(true);
      const data = await searchMulti(searchTerm);
      setResults(data);
      setLoading(false);
    }, 400); // debounce

    return () => clearTimeout(delay);
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Overlay with blur effect */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xs z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <section
        className={`flex justify-between items-center md:px-9 py-7 text-white w-full z-40 fixed ${
          isBlurred
            ? "backdrop-blur-2xl transition-all duration-500 ease-in-out"
            : ""
        }`}
      >
        <div className="flex items-center justify-between w-full px-4">
          {/* Logo + Title */}
          <NavLink className="flex items-center gap-2">
            <img className="w-10 md:w-full" src="/logo.svg" alt="" />
            <h1 className="md:text-3xl font-semibold">StreamVibe</h1>
          </NavLink>

          {/* Mobile Navbar icon */}
          {!menuOpen && (
            <div
              className="
                      lg:hidden
                      flex flex-col justify-between gap-1
                      w-10 h-8
                      cursor-pointer
                      bg-third
                      rounded
                      border-3 border-[#262626]
                      p-1.5
                    "
              onClick={() => setMenuOpen(true)}
            >
              <span className="block h-1 w-full bg-white rounded"></span>
              <span className="block h-1 w-full bg-white rounded"></span>
              <span className="block h-1 w-1/2 bg-white rounded self-end"></span>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-3 border-3 border-gray-700 p-3 rounded-2xl bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-gray-800 px-3 py-2 rounded" : "px-3 py-2 rounded"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="movies-shows"
              className={({ isActive }) =>
                isActive ? "bg-gray-800 px-3 py-2 rounded" : "px-3 py-2 rounded"
              }
            >
              Movies&Shows
            </NavLink>
            <NavLink
              to="support"
              className={({ isActive }) =>
                isActive ? "bg-gray-800 px-3 py-2 rounded" : "px-3 py-2 rounded"
              }
            >
              Support
            </NavLink>
            <NavLink
              to="subscriptions"
              className={({ isActive }) =>
                isActive ? "bg-gray-800 px-3 py-2 rounded" : "px-3 py-2 rounded"
              }
            >
              Subscriptions
            </NavLink>
          </div>

          <div className="flex items-center text-3xl">
            {/* Search Input */}

            <div className="relative">
              {/* Search Input */}
              <div
                className={`
      text-2xl rounded-2xl overflow-hidden
      transition-all duration-500 ease-in-out 
      ${isSearchInputOpen ? "max-w-[315px]" : "max-w-0"}
    `}
              >
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-black px-4 py-2 rounded-2xl border-3 border-gray-700 w-[315px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Search Results */}
              {isSearchInputOpen && searchTerm && (
                <div className="absolute top-full right-0 mt-3 w-[350px] bg-black border border-gray-700 rounded-2xl shadow-xl max-h-[420px] overflow-y-auto z-50">
                  {loading && (
                    <p className="text-center py-4 text-gray-400">
                      Searching...
                    </p>
                  )}

                  {!loading && results.length === 0 && (
                    <p className="text-center py-4 text-gray-400">
                      No results found
                    </p>
                  )}

                  {results.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      onClick={() => {
                        navigate(
                          item.type === "movie"
                            ? `/movie-details/${item.id}`
                            : `/serie-details/${item.id}`
                        );
                        setSearchTerm("");
                        setResults([]);
                        setIsSearchInputOpen(false);
                      }}
                      className="flex gap-3 items-center px-4 py-3 hover:bg-gray-800 cursor-pointer transition"
                    >
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                            : "/no-image.png"
                        }
                        className="w-12 h-16 object-cover rounded"
                        alt={item.title}
                      />

                      <div className="flex flex-col">
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-xs text-gray-400">
                          {item.type === "movie" ? "Movie" : "TV Show"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Icon */}
            <div className=" flex items-center justify-center">
              <FaSearch
                onClick={() => setIsSearchInputOpen(!isSearchInputOpen)}
                className={`
        cursor-pointer mx-4 transition-transform duration-500 ease-in-out
        ${isSearchInputOpen ? "rotate-360" : ""}
      `}
                size={28}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          className={`
    h-screen w-60 fixed top-0 left-0 bg-black border border-gray-700 p-3 rounded-r-2xl z-40
    overflow-hidden
    transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        >
          <div className="flex justify-end">
            <FiX
              onClick={() => setMenuOpen(false)}
              size={30}
              className="cursor-pointer"
            />
          </div>
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-800 px-3 py-2 rounded block text-center"
                : "px-3 py-2 rounded block text-center"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="movies-shows"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-800 px-3 py-2 rounded block text-center"
                : "px-3 py-2 rounded block text-center"
            }
          >
            Movies&Shows
          </NavLink>
          <NavLink
            to="support"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-800 px-3 py-2 rounded block text-center"
                : "px-3 py-2 rounded block text-center"
            }
          >
            Support
          </NavLink>
          <NavLink
            to="subscriptions"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-800 px-3 py-2 rounded block text-center"
                : "px-3 py-2 rounded block text-center"
            }
          >
            Subscriptions
          </NavLink>
          <div>
           
           













           {/* Mobile Search */}
  <div className="py-4 relative">
    <input
      type="search"
      placeholder="Search..."
      className="bg-black max-w-full px-4 py-2 rounded-2xl border-3 border-gray-700 w-full focus:border-gray-300 focus:outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {/* Mobile Search Results */}
    {searchTerm && (
      <div className="absolute top-full left-0 mt-3 w-full bg-black border border-gray-700 rounded-2xl shadow-xl max-h-[420px] overflow-y-auto z-50">
        {loading && (
          <p className="text-center py-4 text-gray-400">Searching...</p>
        )}
        {!loading && results.length === 0 && (
          <p className="text-center py-4 text-gray-400">No results found</p>
        )}
        {results.map((item) => (
          <div
            key={`${item.type}-${item.id}`}
            onClick={() => {
              navigate(
                item.type === "movie"
                  ? `/movie-details/${item.id}`
                  : `/serie-details/${item.id}`
              );
              setSearchTerm("");
              setResults([]);
              setMenuOpen(false);
            }}
            className="flex gap-3 items-center px-4 py-3 hover:bg-gray-800 cursor-pointer transition"
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                  : "/no-image.png"
              }
              className="w-12 h-16 object-cover rounded"
              alt={item.title}
            />
            <div className="flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span className="text-xs text-gray-400">
                {item.type === "movie" ? "Movie" : "TV Show"}
              </span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>

         

            
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
