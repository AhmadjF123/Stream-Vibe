import React, { useState } from "react";
import ChoosePlanCard from "./ChoosePlanCard";

function ChoosePlan() {
  const [subscriptionType, setSubscriptionType] = useState("monthly");

  return (
    <>
      <div className="text-white bg-primary px-20 ">
        <div className="text-white bg-primary flex justify-between items-center pt-15 mb-15">
          <div className="">
            <h1 className="text-[28px] font-bold">
              Choose the plan that's right for you
            </h1>
            <p className="text-customGray pt-2">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>

          <div className="border border-grayBlack rounded-lg flex gap-2 p-2">
            <button
              onClick={() => setSubscriptionType("monthly")}
              className={`${
                subscriptionType === "monthly" ? "bg-grayBlack" : ""
              }   rounded-lg cursor-pointer px-4 py-3`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSubscriptionType("yearly")}
              className={`${
                subscriptionType === "yearly" ? "bg-grayBlack" : ""
              }  rounded-lg cursor-pointer px-4 py-3`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <ChoosePlanCard
            title={"Basic"}
            description={
              "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
            }
            monthlyPrice={9.99}
            yearlyPrice={109.99}
            subscriptionType={subscriptionType}
          />

          <ChoosePlanCard
            title={"Standard"}
            description={
              "Access to a wider selection of movies and shows, including most new releases and exclusive content"
            }
            monthlyPrice={12.99}
            yearlyPrice={149.99}
            subscriptionType={subscriptionType}
          />

          <ChoosePlanCard
            title={"Premium"}
            description={
              "Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
            }
            monthlyPrice={14.99}
            yearlyPrice={169.99}
            subscriptionType={subscriptionType}
          />
        </div>
      </div>
    </>
  );
}

export default ChoosePlan;
