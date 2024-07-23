import Link from "next/link";
import React from "react";

export default function Page() {
  const products = [
    {
      index: 1,
      image: "/assets/icons/icon.jpg",
      name: "Product 1",
      price: 12000,
    },
    {
      index: 2,
      image: "/assets/icons/icon.jpg",
      name: "Product 2",
      price: 18000,
    },
    {
      index: 3,
      image: "/assets/icons/icon.jpg",
      name: "Product 3",
      price: 15000,
    },
  ];

  const total = 36000;

  return (
    <div className="bg-white max-w-screen-full mx-auto mt-12">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-24 space-y-4 md:space-y-0">
        <Link href="/" type="submit" className="flex items-center space-x-4">
          <img
            src="/assets/icons/cancel-01.svg"
            className="w-5 h-5 object-cover"
            alt="Cancel"
          />
          <h3 className="font-DM_Sans text-base text-black font-bold">
            My Cart ({products.length})
          </h3>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-xl px-8"
          >
            <img
              src="/assets/icons/favourite-02.svg"
              className="w-5 h-5 object-cover"
              alt="Favourite"
            />
            <span className="font-bold text-black font-DM_Sans text-base">
              Save Cart For Later
            </span>
          </button>
          <button
            type="submit"
            className="p-4 border-2 border-gray-300 rounded-xl"
          >
            <img
              src="/assets/icons/delete-01.svg"
              className="w-5 h-5 object-cover"
              alt="Delete"
            />
          </button>
        </div>
      </div>
      <div className="w-full p-4 md:p-8 bg-[#F4F5F6] mt-10 px-4 md:px-24">
        <div className="flex items-center space-x-4">
          <img
            src="/assets/icons/information-circle.svg"
            className="w-6 h-6 object-cover"
            alt="Info"
          />
          <h3 className="font-DM_Sans text-lg text-[#495D69] font-normal">
            By proceeding you won&apos;t be charged yet
          </h3>
        </div>
      </div>
      <div className="w-full mt-10 px-4 md:px-24 space-y-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-3xl p-6 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-10"
          >
            <div className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0">
              <span className="font-DM_Sans font-semibold text-black">
                {product.index}.
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-[110px] h-[110px] object-cover rounded-2xl"
              />
              <div className="flex-1 space-y-2 text-center lg:text-left">
                <h3 className="font-DM_Sans text-black font-semibold text-base">
                  {product.name}
                </h3>
                <p className="font-DM_Sans text-sm text-[#495D69]">
                  {product.price.toLocaleString()} Rwf
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 lg:mt-0">
              <button
                type="submit"
                className="py-2 px-4 md:py-4 md:px-8 lg:px-12 border-2 border-gray-300 rounded-xl"
              >
                -
              </button>
              <span className="font-DM_Sans text-base text-black font-semibold py-2 px-4 md:py-4 md:px-8 lg:px-16 bg-[#F5F5F5] rounded-xl">
                0
              </span>
              <button
                type="submit"
                className="py-2 px-4 md:py-4 md:px-8 lg:px-12 border-2 border-gray-300 rounded-xl"
              >
                +
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-4 md:py-4 md:px-8 border-2 border-gray-300 rounded-xl"
              >
                <img
                  src="/assets/icons/delete-01.svg"
                  className="w-5 h-5 object-cover"
                  alt="Delete"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 border-t border-gray-300 w-full px-4 md:px-12 lg:px-28 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 space-y-2 text-center md:text-left">
            <span className="font-DM_Sans text-base font-light text-black">
              Total:
            </span>
            <p className="font-bold text-lg text-black font-DM_Sans">
              {total.toLocaleString()} Rwf
            </p>
          </div>
          <button
            type="submit"
            className="py-4 md:py-6 px-6 md:px-10 bg-[#C1CF16] rounded-xl flex items-center space-x-2"
          >
            <img
              src="/assets/icons/dollar-03.svg"
              className="w-4 h-5 object-cover"
            />
            <span className="text-base font-medium text-black">Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
