import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <div className="mt-8 bg-white rounded-xl max-w-screen-2xl mx-2 sm:mx-8 md:mx-14 lg:mx-auto p-4">
      {/* product header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="assets/icons/delivery-box-01.svg"
            className="w-7 h-7 object-cover"
          />
          <h2 className="font-DM_Sans font-semibold text-black text-base">
            Recent Products (100)
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="border border-gray-300 rounded-lg p-2">
            <img
              src="assets/icons/filter.svg"
              className="w-4 h-4 object-cover"
            />
          </div>
          <div className="border border-gray-300 rounded-lg p-2">
            <img
              src="assets/icons/arrange-by-letters-a-z.svg"
              className="w-4 h-4 object-cover"
            />
          </div>
        </div>
      </div>

      {/* product cards grid */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 mt-8">
        {/* product cards */}
        <div className="flex-1">
          <Link
            href="/product"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6"
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-300"
              >
                <img
                  src="assets/icons/icon.jpg"
                  alt={`Product ${index + 1}`}
                  className="w-full mb-4 object-cover"
                />
                <div className="flex items-center justify-between mb-6 px-4">
                  <div>
                    <h3 className="font-DM_Sans font-normal text-base text-black mb-2">
                      Product {index + 1}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <p className="font-semibold text-base text-[#C1CF16]">
                        9,000 Rwf
                      </p>
                      <p className="font-semibold text-base text-[#DBDBDB] line-through">
                        12,000 Rwf
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="border border-[#DBDBDB] rounded-lg p-2">
                      <img src="assets/icons/shopping-cart-check-in-03.svg" />
                    </div>
                    <div className="border border-[#DBDBDB] rounded-lg p-2">
                      <img src="/assets/icons/favourite.svg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Link>
          <div className="flex w-full items-center justify-center">
            <div className="mt-6 p-3 flex items-center justify-center border border-[#DBDBDD] rounded-lg w-1/3 sm:w-2/3 md:w-1/4 lg:w-1/5 space-x-2">
              <img
                src="/assets/icons/arrow-down-01.svg"
                className="w-4 h-4 object-cover md:w-6 md:h-6"
              />
              <p className="font-DM_Sans text-black font-semibold text-xs md:text-sm cursor-pointer">
                Load More
              </p>
            </div>
          </div>
        </div>

        {/* right div with border */}
        <div className="border border-gray-300 rounded-2xl hidden lg:block lg:w-1/4">
          <div className="flex items-center justify-between px-6 mt-8 mb-8 w-full">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/store-03.svg"
                className="w-6 h-6 object-cover"
              />
              <p className=" font-semibold font-DM_Sans text-[#0C0D0D]">
                Top 10 Stores
              </p>
            </div>
            <div>
              <img
                src="/assets/icons/link-square-02.svg"
                className="w-6 h-6 object-cover"
              />
            </div>
          </div>
          <div className="bg-primary-custom p-6 object-cover w-full px-6">
            <div className="relative">
              <img
                src="/assets/icons/search-03.svg"
                className=" w-6 h-6 object-cover absolute top-3 left-4 cursor-pointer"
              />
              <input
                type="text"
                className="w-full p-3 bg-white rounded-lg font-DM_Sans placeholder:font-DM_Sans px-14 text-[#495D69] placeholder:font-light"
                placeholder="Search a store"
              />
              <img
                src="/assets/icons/filter-vertical-01.svg"
                className=" w-6 h-6 object-cover absolute top-3 right-4 cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-6 px-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden mb-6 flex items-center space-x-4"
              >
                <img
                  src="assets/icons/icon-01.svg"
                  alt={`Product ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
                <div className=" flex-1">
                  <h3 className="font-DM_Sans text-sm text-black mb-2 font-medium md:text-base">
                    Awesome Shop 1 {index + 1}
                  </h3>
                  <p className="font-DM_Sans text-xs text-[#495D69] md:text-sm">
                    134 Products
                  </p>
                </div>
                {/*  */}
                <img
                  src="/assets/icons/arrow-down-03.svg"
                  className=" w-6 h-6 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-8 mb-4 rounded-lg p-8 bg-primary-custom">
        <div className="flex flex-col md:flex-row items-center justify-between px-2">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="text-[#C1CF16] font-bold text-xl">
              Open <span className="text-black"> your Store</span>
            </p>
          </div>
          <div className="flex items-center space-x-4 w-full md:w-1/3 lg:w-1/2 relative mt-4 md:mt-0">
            <button
              type="submit"
              className="cursor-pointer absolute left-7 top-3"
            >
              <img
                src="/assets/icons/mail-02.svg"
                className="w-6 h-6 object-cover"
              />
            </button>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#EEEFF1] placeholder:text-[#6F7071] pl-12 text-black font-DM_Sans placeholder:font-DM_Sans"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="bg-[#C1CF16] p-3 rounded-lg font-bold flex items-center gap-2 justify-center md:text-sm text-xs px-8"
            >
              Submit
              <img
                src="/assets/icons/arrow-right-03.svg"
                className="w-3 md:w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
