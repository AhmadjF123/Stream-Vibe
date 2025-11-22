import React from "react";
import QuestionCard from "./QuestionCard";

function Questions() {
  return (
    <>
      <div className="bg-primary text-white px-20 pt-15">
        <div>
          <h1 className="text-[28px] font-bold">Frequently Asked Questions</h1>
          <p className="text-customGray">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-15">
          {/* Left Column */}
          <div className="flex flex-col">
            <QuestionCard
              number="01"
              title="What is StreamVibe?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
            <QuestionCard
              number="02"
              title="How much does StreamVibe cost?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
            <QuestionCard
              number="03"
              title="What content is available on StreamVibe?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
            <QuestionCard
              number="04"
              title="How can I watch StreamVibe?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <QuestionCard
              number="05"
              title="How do I sign up for StreamVibe?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
            <QuestionCard
              number="06"
              title="What is the StreamVibe free trial?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
            <QuestionCard
              number="07"
              title="How do I contact StreamVibe customer support?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
            <QuestionCard
              number="08"
              title="What are the StreamVibe payment methods?"
              description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
