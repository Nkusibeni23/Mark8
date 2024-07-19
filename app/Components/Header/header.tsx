import React from "react";

export default function Header() {
  return (
    <div
      className="max-w-screen-full border"
      style={{ padding: "16px", paddingLeft: "30px", paddingRight: "30px" }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left Grid */}
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <img
              src="/assets/images/mark8 logo.svg"
              style={{ width: "50px", height: "50px" }}
              alt="Logo"
            />
            <div className="flex-1">
              <h1 className="text-base font-bold font-DM_Sans text-black">
                Mark8
              </h1>
              <p className="text-xs font-DM_Sans text-[#495d69]">
                By Awesomity Lab
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 cursor-pointer">
            <img
              src="/assets/icons/Home.svg"
              style={{ width: "20px", height: "20px" }}
              alt="Home Icon"
            />
            <p className="font-DM_Sans text-sm font-bold">Home</p>
          </div>
          <div className="flex items-center justify-center space-x-2 cursor-pointer">
            <img
              src="/assets/icons/store-02.svg"
              style={{ width: "20px", height: "20px" }}
              alt="Stores Icon"
            />
            <p className="font-DM_Sans text-sm font-extralight">Stores</p>
          </div>
        </div>

        {/* Right Grid */}
        <div className="flex items-center space-x-10">
          <div className="flex items-center justify-center space-x-2 cursor-pointer">
            <img
              src="assets/icons/search-01.svg"
              style={{ width: "24px", height: "24px" }}
              alt="Search Icon"
            />
          </div>
          <div className="flex items-center justify-center space-x-2 cursor-pointer">
            <img
              src="/assets/icons/shopping-cart-02.svg"
              style={{ width: "20px", height: "20px" }}
              alt="Shopping Cart"
            />
            <p className="font-DM_Sans text-sm font-extralight">My Cart</p>
            <img
              src="assets/icons/Ellipse 3.svg"
              style={{ width: "10px", height: "10px" }}
              alt="Dots"
            />
          </div>

          <div className=" flex items-center justify-center space-x-2 cursor-pointer">
            <img
              src="/assets/icons/favourite.svg"
              style={{ width: "20px", height: "20px" }}
              alt="Heart Icon"
            />
            <p className="font-DM_Sans text-sm font-extralight">Saved</p>
          </div>

          <div className="flex items-center justify-center cursor-pointer p-4 space-x-2 rounded-lg border">
            <p>Open A Store</p>
            <img
              src="assets/icons/store-02.svg"
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div className="border p-4 rounded-lg flex space-x-2 relative">
            <div className="flex items-center justify-center">
              <img
                src="assets/icons/user copy.svg"
                style={{ width: "24px", height: "24px" }}
                alt="User Icon"
              />
            </div>
            <div className="absolute top-0 bottom-0 w-px bg-gray-300 left-1/2 transform -translate-x-1/2 z-50" />
            <div
              className="flex items-center justify-center"
              style={{ paddingLeft: "20px" }}
            >
              <img
                src="assets/icons/arrow.svg"
                style={{ width: "16px", height: "20px" }}
                alt="Arrow Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
