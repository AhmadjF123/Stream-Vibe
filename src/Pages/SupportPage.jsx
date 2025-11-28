import React from "react";
import Questions from "../Components/Questions";
import StartFree from "../Components/StartFree";



function SupportPage() {
  return (
    <>
     <div className="pt-50 text-white bg-primary">
  <div className="flex gap-10 mb-10 px-35 items-stretch">

    {/* القسم الأول */}
    <div className="flex-1 flex flex-col basis-[40%]">
      <h1 className="text-5xl">Welcome to our support page!</h1>

      <p className="text-[18px] text-customGray my-8">
        We're here to help you with any problems you may be having with our product.
      </p>

      {/* خليت الشبكة تتمدد لملء الارتفاع */}
      <div className="grid grid-cols-4 grid-rows-4 sm:grid-cols-4 sm:grid-rows-3 
                      gap-1 w-full h-full border-4 rounded-2xl border-grayBlack flex-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-full bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
          ></div>
        ))}
      </div>
    </div>


    <div className="flex-1 basis-[60%] bg-black px-10 py-15 border-4 rounded-2xl border-third flex flex-col">

      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            className="bg-primary p-4 my-4 border border-[#262626] rounded"
            placeholder="Enter First Name"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            className="bg-primary p-4 my-4 border border-[#262626] rounded"
            placeholder="Enter Last Name"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="bg-primary p-4 my-4 border border-[#262626] rounded"
            placeholder="Enter your Email"
            type="email"
          />
        </div>

        <div className="flex flex-col">
          <label>Phone Number</label>
          <input
            className="bg-primary p-4 my-4 border border-[#262626] rounded"
            placeholder="Enter Phone Number"
            type="phone"
          />
        </div>

        <div className="flex flex-col col-span-2 flex-1">
          <label>Message</label>
          <textarea
            className="bg-primary p-4 my-4 border border-[#262626] rounded h-full"
            placeholder="Enter your Message"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>I agree with Terms of Use and Privacy Policy</p>
        </div>

        <button className="px-5 py-3 bg-secondary rounded">Send Message</button>
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
