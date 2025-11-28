import React from "react";

function StartFree() {
  return (
    <>
      {/* <div className="text-white relative w-full overflow-hidden mb-20 px-5 md:px-20 pt-15 pb-20 bg-primary ">
        <div className="relative w-full h-[280px] border">
          <div className="grid grid-cols-3 grid-rows-4 sm:grid-cols-4 sm:grid-rows-3 lg:grid-cols-9 lg:grid-rows-4 gap-1 w-full h-full">
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

        <div className="absolute inset-0 z-20 flex translate-y-1/2 justify-between md:px-30">
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
      </div> */}

      <div className="text-white relative w-full overflow-hidden bg-primary">
        {/* Mobile Layout */}
        <div className="lg:hidden relative w-full px-5 py-12">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 grid-rows-4 gap-1 w-full h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
                ></div>
              ))}
            </div>
            <div className="startLinear absolute inset-0 z-10"></div>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8">
              <h1 className="text-[24px] font-bold mb-3">
                Start your free trial today!
              </h1>
              <p className="text-gray-300 text-[14px] mb-6 max-w-md">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
              <button className="bg-secondary px-8 py-4 rounded-lg text-white cursor-pointer">
                Start a Free Trail
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full px-20 py-20">
          <div className="relative w-full h-[350px]">
            <div className="grid grid-cols-9 grid-rows-4 gap-1 w-full h-full">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/Image (${i + 1}).jpg')` }}
                ></div>
              ))}
            </div>
            <div className="startLinear absolute inset-0 z-10"></div>

            <div className="absolute inset-0 z-20 flex items-center justify-between px-12">
              <div className="max-w-[600px]">
                <h1 className="text-5xl font-bold mb-4">
                  Start your free trial today!
                </h1>
                <p className="text-gray-300 text-lg">
                  This is a clear and concise call to action that encourages
                  users to sign up for a free trial of StreamVibe.
                </p>
              </div>
              <div>
                <button className="bg-secondary px-8 py-4 rounded-lg text-white cursor-pointer text-lg">
                  Start a Free Trail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartFree;
