import React from "react";

export default function Welcome() {
  return (
    <div className="bg-[#1C2834] rounded-xl p-4 max-w-screen-2xl mx-2 sm:mx-8 md:mx-14 lg:mx-auto mt-20 lg:mt-10 md:mt-14 sm:mt-20">
      <div className="flex items-center justify-center mb-8">
        <div className="mt-8 w-full max-w-2xl">
          <h2 className="text-white font-extrabold font-DM_Sans text-xl text-center">
            Welcome to <span className="text-[#C1CF16]">Mark8</span>
          </h2>
          <div className="mt-6 flex-1 text-center">
            <p className="text-[#DBDBDB] font-light font-DM_Sans text-sm">
              12,932 Products
            </p>
            <div className="mt-6 flex justify-center w-full px-2 md:px-0 relative">
              <button className="absolute left-4 top-3 z-50 cursor-pointer">
                <img
                  src="assets/icons/search-02.svg"
                  className="w-6 h-6 object-cover text-[#C1CF16]"
                />
              </button>
              <input
                type="text"
                className="rounded-xl bg-[#25313C] font-DM_Sans w-[700px] h-12 px-14 text-white"
                placeholder="What are you looking for?"
              />
              <button className="absolute right-4 top-3 z-50 cursor-pointer">
                <img
                  src="assets/icons/filter-vertical.svg"
                  className="w-6 h-6 object-cover text-[#C1CF16]"
                />
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="font-semibold text-white text-xs text-center rounded-full border-2 border-white py-2 px-4 sm:px-6">
                All
              </button>
              <button className="text-xs text-center rounded-full border-2 border-[#79878F] text-[#79878F] py-2 px-4 sm:px-6">
                Vectors
              </button>
              <button className="text-xs text-center rounded-full border-2 border-[#79878F] text-[#79878F] py-2 px-4 sm:px-6">
                Icons
              </button>
              <button className="text-xs text-center rounded-full border-2 border-[#79878F] text-[#79878F] py-2 px-4 sm:px-8">
                Background
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
