import React, { useState } from "react";

function QuestionCard({ number, title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex m-8 items-center mt-4 linearBorder mb-8 pb-6">
        <div className="flex items-center gap-4">
          <span className="bg-grayBlack p-3 rounded-lg">{number}</span>
          <div>
            <h2 className="text-[20px] font-semibold">{title}</h2>
            <div
              className={`
                overflow-hidden 
                transition-all 
                duration-300
                ${isOpen ? "max-h-40" : "max-h-0"}
            `}
            >
              <p className="text-customGray">{description}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-3xl cursor-pointer`}
        >
          {" "}
          {isOpen ? "-" : "+"}
        </button>
      </div>
    </>
  );
}

export default QuestionCard;
