import React from "react";

function ChoosePlanCard({title,description,subscriptionType, monthlyPrice, yearlyPrice}) {

    const price = subscriptionType === "monthly" ? monthlyPrice : yearlyPrice
  return (
    <>
      <div className="bg-third w-fit rounded-[10px] px-8 mb-8">
        <div>
          <h1 className="text-[20px] font-bold pt-8 ">{title} Plan</h1>
          <p className="text-customGray py-4 max-w-[350px]">
            {description}
          </p>
          <div className="flex items-center py-4 gap-2">
            <h3 className="font-semibold text-[30px]">${price} </h3>
            <h5 className="text-gray-500"> /{subscriptionType ==="monthly" ? "month":"year"}</h5>
          </div>
        </div>
        <div className="flex gap-4 pb-8">
          <button className="bg-black px-8 py-3 rounded cursor-pointer">
            Start Free Trial
          </button>
          <button className="bg-secondary px-8 py-3 rounded cursor-pointer">
            Choose Plan
          </button>
        </div>
      </div>
    </>
  );
}

export default ChoosePlanCard;
