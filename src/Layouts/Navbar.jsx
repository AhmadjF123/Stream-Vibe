import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaSearch, FaBell } from "react-icons/fa";
import { FiX } from "react-icons/fi";

function Navbar() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay with blur effect */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xs z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <section className="flex justify-between items-center md:px-25 py-7 text-white absolute w-full z-40">
        <div className="flex items-center justify-between w-full px-9">
          {/* Logo + Title */}
          <NavLink className="flex items-center gap-2">
            <img className="w-10 md:w-full" src="/logo.svg" alt="" />
            <h1 className="md:text-3xl font-semibold">StreamVibe</h1>
          </NavLink>

          {/* Mobile Navbar icon */}
          {!menuOpen && (
            <div
              className="lg:hidden flex gap-1 flex-col justify-between w-7 h-6 cursor-pointer bg-third rounded border-3 border-[#262626] p-0.5"
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
                className="w-full border px-4 py-2 rounded-2xl focus:outline-white"
              />
            </div>

            <FaSearch
              onClick={() => setIsSearchInputOpen(!isSearchInputOpen)}
              className={`cursor-pointer mx-4 transition-all duration-500 ease-in-out ${
                isSearchInputOpen ? "rotate-360" : ""
              }`}
            />
            <FaBell className="cursor-pointer" />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          className={`
            h-screen w-60 fixed top-0 left-0 bg-black border border-gray-700 p-3 rounded-r-2xl z-40
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
            <div className="py-4">
              <input
                type="search"
                placeholder="Search..."
                className="w-full border text-lg px-4 py-2 rounded-2xl focus:outline-white"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <FaBell className="cursor-pointer text-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;