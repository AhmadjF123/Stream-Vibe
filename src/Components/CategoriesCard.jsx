import React from "react";
import { FaArrowRight } from "react-icons/fa"; // FontAwesome

function CategoriesCard({ title, images=[] }) {
  return (
    <>
      <div className="w-fit border border-gray-700 p-4 rounded-2xl mb-7 bg-third">
        <div className="grid grid-cols-2 gap-2">
          {images.map((img, index) => (
            <img key={index} src={img} alt={title} className="rounded size-25" />
          ))}
        </div>

        <div className="flex items-center mt-4 justify-between">
          <h3>{title}</h3>
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}

export default CategoriesCard;
