import React, { useState } from "react";

function QuestionCard({ number, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:m-8 mt-4 linearBorder mb-8 pb-6 px-2">
      
      {/* الجزء العلوي */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="bg-grayBlack p-3 rounded-lg">{number}</span>
          <h2 className="text-[20px] font-semibold">{title}</h2>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl cursor-pointer"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {/* النص يفتح تحت بدون ما يحرك العنوان والزر */}
      <div
        className={`
          overflow-hidden 
          transition-all 
          duration-300 
          ${isOpen ? "max-h-40 mt-3" : "max-h-0 mt-0"}
        `}
      >
        <p className="text-customGray">{description}</p>
      </div>

    </div>
  );
}

export default QuestionCard;
