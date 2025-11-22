import React from "react";
import { NavLink } from "react-router";
import { FaSearch, FaBell } from "react-icons/fa"; // FontAwesome

function Navbar() {
  return (
    <>
      <section className="flex justify-between items-center px-30 py-7 text-white absolute w-full z-40">
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

        <div className="flex gap-7 text-3xl">
          <FaSearch className="cursor-pointer" />
          <FaBell className="cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default Navbar;
