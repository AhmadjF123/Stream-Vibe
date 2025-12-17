import React from "react";

import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const date = new Date()

  
  return (
    <>
      <footer className="bg-black px-5 md:px-20 text-white pb-10 pt-15">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
          <div>
            <h1 >
              <Link to="/">Home</Link>
            </h1>
            <h2>Categories</h2>
            <h2>Devices</h2>
            <h2>Pricing</h2>
            <h2>FAQ</h2>
          </div>
          <div>
            <h1 >
              <Link to="/movies-shows">Movies</Link>
            </h1>
            <h2>Genres</h2>
            <h2>Trending</h2>
            <h2>New Release</h2>
            <h2>Popular</h2>
          </div>
          <div>
            <h1>
              <Link to="/movies-shows">Shows</Link>
            </h1>
            <h2>Genres</h2>
            <h2>Trending</h2>
            <h2>New Release</h2>
            <h2>Popular</h2>
          </div>
          <div>
            <h1>
              <Link to="/support">Support</Link>
            </h1>
            <h2>Contact Us</h2>
          </div>
          <div>
            <h1 >
              <Link to="/subscriptions">Subscription</Link>
            </h1>
            <h2>Plans</h2>
            <h2>Features</h2>
          </div>
          <div>
            <h1 className="">Connect With Us</h1>
            <div className="flex gap-2.5">
              <FaFacebook size={40} className="bg-third rounded-md p-2.5" />
              <FaTwitter size={40} className="bg-third rounded-md p-2.5" />
              <FaLinkedin size={40} className="bg-third rounded-md p-2.5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8 border-t pt-4 border-customGray">
          <h2>@{date.getFullYear()} streamvibe, All Rights Reserved</h2>
          <div className="flex mt-2 gap-5">
            <h2>Terms of Use</h2>
            <h2 className="border-x px-4 border-customGray ">Privacy Policy</h2>
            <h2>Cookie Policy</h2>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
