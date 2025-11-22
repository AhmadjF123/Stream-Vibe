import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaSearch, FaBell } from "react-icons/fa"; // FontAwesome

function Navbar() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  return (
    <>
      <section className="flex justify-between items-center px-25 py-7 text-white absolute w-full z-40">
        <NavLink className="flex items-center">
          <img src="/logo.svg" alt="" />
          <h1 className="text-3xl font-semibold">StreamVibe</h1>
        </NavLink>

        <div className="flex gap-3 border-3 border-gray-700 p-3 rounded-2xl bg-black     absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
          <div
            className={`
              text-2xl rounded-2xl overflow-hidden
              transition-all duration-500 ease-in-out
              ${isSearchInputOpen ? "max-w-80 " : "max-w-0 mx-0"} 
              
            `}
          >
            <input
              type="search"
              placeholder="Search..."
              className="w-full border px-4 py-2 rounded-2xl focus:outline-white
"
            />
          </div>
          {/* <div
            className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
              isSearchInputOpen ? "max-w-40 mt-2" : "max-w-0 mt-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 rounded-2xl"
            />
          </div>{" "} */}
          <FaSearch
            onClick={() => setIsSearchInputOpen(!isSearchInputOpen)}
            className={`cursor-pointer mx-4 transition-all duration-500 ease-in-out  ${
              isSearchInputOpen ? "rotate-360" : ""
            }`}
          />
          <FaBell className="cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default Navbar;
