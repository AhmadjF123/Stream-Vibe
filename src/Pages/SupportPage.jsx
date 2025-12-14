import React from "react";
import Questions from "../Components/Questions";
import StartFree from "../Components/StartFree";

function SupportPage() {
  return (
    <>
      <div className="pt-30 md:pt-50 text-white bg-primary">
        <div className="flex flex-col md:flex-row gap-10 mb-10 px-4 md:px-35 items-stretch">
          <div className="flex-1 flex flex-col basis-[40%]">
            <h1 className="text-[28px] md:text-5xl ">
              Welcome to our support page!
            </h1>

            <p className="text-[14px] md:text-[18px] text-customGray my-8">
              We're here to help you with any problems you may be having with
              our product.
            </p>

            <div
              className=" grid grid-cols-4 grid-rows-3
    gap-1 w-full
    min-h-[200px]
    sm:min-h-[300px]
    md:min-h-full
    border-4 rounded-2xl border-grayBlack
                      "
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex-1 basis-[60%] bg-black px-4 md:px-10 pt-15 pb-5 border-4 rounded-2xl border-third flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
              <div className="flex flex-col col-span-2 md:col-span-1">
                <label className="">First Name</label>
                <input
                  className="bg-primary p-4 my-4 border border-[#262626] rounded"
                  placeholder="Enter First Name"
                  type="text"
                />
              </div>

              <div className="flex flex-col col-span-2 md:col-span-1">
                <label>Last Name</label>
                <input
                  className="bg-primary p-4 my-4 border border-[#262626] rounded"
                  placeholder="Enter Last Name"
                  type="text"
                />
              </div>

              <div className="flex flex-col col-span-2 md:col-span-1">
                <label>Email</label>
                <input
                  className="bg-primary p-4 my-4 border border-[#262626] rounded"
                  placeholder="Enter your Email"
                  type="email"
                />
              </div>

              <div className="flex flex-col col-span-2 md:col-span-1">
                <label>Phone Number</label>
                <input
                  className="bg-primary p-4 my-4 border border-[#262626] rounded"
                  placeholder="Enter Phone Number"
                  type="phone"
                />
              </div>

              <div className="flex flex-col col-span-2 flex-1">
                <label>Message</label>
                <input
                  type="text"
                  className="bg-primary pb-25 p-4 my-4 border border-[#262626] rounded"
                  placeholder="Enter your Message"
                />
              </div>
            </div>

            <div className="md:flex items-center justify-between mt-5">
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" />
                <p>I agree with Terms of Use and Privacy Policy</p>
              </div>

              <button className="px-5 py-3 bg-secondary rounded w-full md:w-fit">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <Questions />
        <StartFree />
      </div>
    </>
  );
}

export default SupportPage;
