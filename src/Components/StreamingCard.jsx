import React from "react";

function StreamingCard({ icon, title, description }) {
  return (
    <>
      <div className=" w-fit rounded-[10px] py-10 px-8 mb-7 linear">
        <div className="flex gap-2 items-center mb-2">
          <span className="text-secondary">{icon}</span>
          <h2 className="text-[20px]">{title}</h2>
        </div>
        <p className="max-w-[350px]">{description}</p>
      </div>
    </>
  );
}

export default StreamingCard;
