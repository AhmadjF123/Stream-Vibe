import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-black px-20 text-white pb-10">
        <div className="grid grid-cols-6 ">
          <div>
            <h1 className="">Home</h1>
            <h2>Categories</h2>
            <h2>Devices</h2>
            <h2>Pricing</h2>
            <h2>FAQ</h2>
          </div>
          <div>
            <h1 className="">Movies</h1>
            <h2>Genres</h2>
            <h2>Trending</h2>
            <h2>New Release</h2>
            <h2>Popular</h2>
          </div>
          <div>
            <h1 className="">Shows</h1>
            <h2>Genres</h2>
            <h2>Trending</h2>
            <h2>New Release</h2>
            <h2>Popular</h2>
          </div>
          <div>
            <h1 className="">Support</h1>
            <h2>Contact Us</h2>
          </div>
          <div>
            <h1 className="">Subscription</h1>
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

        <div className="flex justify-between mt-8   border-t pt-4 border-customGray">
          <h2>@2023 streamvibe, All Rights Reserved</h2>
          <div className="flex gap-5">
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
