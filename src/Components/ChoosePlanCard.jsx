import React from "react";

function ChoosePlanCard({title,description,subscriptionType, monthlyPrice, yearlyPrice}) {

    const price = subscriptionType === "monthly" ? monthlyPrice : yearlyPrice
  return (
    <>
      <div className="bg-third w-fit rounded-[10px] px-4 md:px-8 md:mb-8">
        <div>
          <h1 className="md:text-[20px] text-[18px] font-bold pt-8 ">{title} Plan</h1>
          <p className="text-customGray md:text-[16px] text-[14px] py-4 max-w-[350px]">
            {description}
          </p>
          <div className="flex items-center py-4 gap-2">
            <h3 className="font-semibold text-[24px] md:text-[30px]">${price} </h3>
            <h5 className="text-gray-500 text-[14px] md:text-[16px]  "> /{subscriptionType ==="monthly" ? "month":"year"}</h5>
          </div>
        </div>
        <div className="flex justify-center gap-4 pb-8">
          <button className="bg-black px-5 md:px-8 py-3 rounded cursor-pointer text-[15px] md:text-316px] ">
            Start Free Trial
          </button>
          <button className="bg-secondary px-5 md:px-8 py-3 rounded cursor-pointer text-[14px] md:text-[16px] ">
            Choose Plan
          </button>
        </div>
      </div>
    </>
  );
}

export default ChoosePlanCard;
