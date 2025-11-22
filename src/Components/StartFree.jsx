import React from "react";

function StartFree() {
  return (
    <>
      <div className="text-white relative w-full overflow-hidden mb-40 px-20 pt-15 pb-20 bg-primary">
        <div className="relative w-full h-[280px]">
          <div className="grid grid-cols-9 gap-4 grid-rows-4 w-full h-full z-0">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
              ></div>
            ))}
          </div>

          <div className="startLinear absolute inset-0 z-10"></div>
        </div>

        <div className="absolute inset-0 z-20 flex translate-y-1/2 justify-between px-30">
          <div className="max-w-[500px]">
            <h1 className="text-[28px] font-bold">
              Start your free trial today!
            </h1>
            <p className="text-customGray mt-2">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>

          <div>
            <button className="bg-secondary px-8 py-4 rounded-lg text-white cursor-pointer">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartFree;
