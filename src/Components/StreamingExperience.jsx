import React from "react";
import StreamingCard from "./StreamingCard";

// icons
import { MdSmartphone } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { FaVrCardboard } from "react-icons/fa";
//  === icons ===

function StreamingExperience() {
  return (
    <>
      <section className="bg-primary text-white px-6 md:px-20 md:pt-20 pt-8">
        <h1 className="md:text-[28px] text-[20px] font-bold">
          We Provide you streaming experience across various devices.
        </h1>

        <p className="md:hidden text-customGray text-[14px] md:text-[16px] mt-4 mb-10">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere.
        </p>

        <p className="hidden md:block text-customGray text-[14px] md:text-[16px] mt-4 mb-10">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of <br /> devices, ensuring that you never miss a moment of
          entertainment.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-between">
          <StreamingCard
            icon={<MdSmartphone />}
            title={"Smartphones"}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <StreamingCard
            icon={<FaTabletAlt />}
            title={"Tablet"}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <StreamingCard
            icon={<FaTv />}
            title={"Smart TV"}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <StreamingCard
            icon={<MdLaptop />}
            title={"Laptops"}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <StreamingCard
            icon={<MdSportsEsports />}
            title={"Gaming Consoles"}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <StreamingCard
            icon={<FaVrCardboard />}
            title={"VR Headsets"}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
        </div>
      </section>
    </>
  );
}

export default StreamingExperience;
