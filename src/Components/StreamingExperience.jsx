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
      <section className="bg-primary text-white px-20 pt-20">
        <h1 className="text-[28px] font-bold">We Provide you streaming experience across various devices.</h1>
        <p className="text-customGray mt-4 mb-10">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>

        <div className="flex flex-wrap justify-between">
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
