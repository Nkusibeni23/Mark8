"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "../../Context/userContext";

const Header: React.FC = () => {
  const { user } = useUser();
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log("user details:", user);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 border-b border-gray-300 p-4 sm:p-4 md:p-4 lg:px-16 xl:px-20">
      <div className="flex items-center justify-between">
        {/* Logo and Main Link */}
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/assets/images/mark8 logo.svg"
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="Logo"
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold font-DM_Sans text-black md:text-base">
                  Mark8
                </h1>
                <p className="text-xs font-DM_Sans text-[#495d69]">
                  By Awesomity Lab
                </p>
              </div>
            </Link>
          </div>
          {/* Show on large screens and hidden on medium screens and below */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center justify-center space-x-2 cursor-pointer"
            >
              <img
                src="/assets/icons/home-04.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Home Icon"
              />
              <p className="font-DM_Sans text-xs lg:text-base font-semibold md:text-sm">
                Home
              </p>
            </Link>
            <Link
              href="/stores"
              className="flex items-center justify-center space-x-2 cursor-pointer"
            >
              <img
                src="/assets/icons/store-02.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Stores Icon"
              />
              <p className="font-DM_Sans text-xs lg:text-base font-extralight md:text-sm">
                Stores
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Right Grid - Visible on larger screens */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center justify-center space-x-2 cursor-pointer">
              <img
                src="/assets/icons/search-01.svg"
                className="w-4 h-4 md:w-6 md:h-6"
                alt="Search Icon"
              />
            </div>
            <Link
              href="/cart"
              className="flex items-center justify-center space-x-2 cursor-pointer"
            >
              <img
                src="/assets/icons/shopping-cart-02.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Shopping Cart"
              />
              <p className="font-DM_Sans text-xs font-extralight md:text-sm">
                My Cart
              </p>
              <img
                src="/assets/icons/Ellipse 3.svg"
                className="w-2 h-2"
                alt="Dots"
              />
            </Link>
            <Link
              href="/saved"
              className="flex items-center justify-center space-x-2 cursor-pointer"
            >
              <img
                src="/assets/icons/favourite.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Heart Icon"
              />
              <p className="font-DM_Sans text-xs font-extralight md:text-sm">
                Saved
              </p>
            </Link>
            <div className="flex items-center justify-center cursor-pointer p-4 space-x-2 rounded-lg border">
              <p className="font-DM_Sans text-xs md:text-sm">Open A Store</p>
              <img
                src="/assets/icons/store-02.svg"
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Store Icon"
              />
            </div>
          </div>

          {/* User Login Section - Always Visible */}
          <div className="border p-4 rounded-lg flex space-x-2">
            <Link href="/login" className="flex items-center justify-center">
              <img
                src="/assets/icons/user copy.svg"
                className="w-5 h-5 md:w-6 md:h-6"
                alt="User Icon"
              />
            </Link>
            <div className="w-px bg-gray-300"></div>
            <button
              type="button"
              onClick={togglePopup}
              className="flex items-center justify-center"
            >
              <img
                src="/assets/icons/arrow.svg"
                className="w-3 h-4 md:w-4 md:h-5"
                alt="Arrow Icon"
              />
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button type="button" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* User Popup Menu */}
        {showPopup && (
          <div className="absolute right-0 top-[75px] w-80 bg-white border-b border-r border-l border-gray-300 rounded-b-xl z-50 px-8">
            <div className="flex items-center space-x-4 border-b border-gray-300 py-6">
              <img
                src="/assets/icons/icon-01.svg"
                className="w-20 h-20 rounded-3xl"
                alt="User"
              />

              {user ? (
                <div className="flex-1 space-y-1">
                  <p className="font-DM_Sans text-base font-semibold">
                    {user.firstName}
                  </p>
                  <p className="font-DM_Sans text-xs text-[#495D69]">
                    {user.email}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="w-full mt-6 flex-1 mb-6">
              <div className="flex space-x-3 hover:bg-gray-100 p-4 rounded-md">
                <img
                  src="/assets/icons/user-011.svg"
                  className="w-6 h-6 object-cover"
                />
                <Link
                  href="#"
                  className="font-DM_Sans text-base font-light text-[#1C2834]"
                >
                  My Account
                </Link>
              </div>
              <div className="flex space-x-3 hover:bg-gray-100 p-4 rounded-md">
                <img
                  src="/assets/icons/shopping-cart-02.svg"
                  className="w-6 h-6 object-cover"
                />
                <Link
                  href="#"
                  className="font-DM_Sans text-base font-light text-[#1C2834]"
                >
                  My Orders
                </Link>
              </div>
              <div className="flex space-x-3 hover:bg-gray-100 p-4 rounded-md">
                <img
                  src="/assets/icons/customer-service-01.svg"
                  className="w-6 h-6 object-cover"
                />
                <Link
                  href="#"
                  className="font-DM_Sans text-base font-light text-[#1C2834]"
                >
                  Help
                </Link>
              </div>
              <div className="flex space-x-3 hover:bg-gray-100 p-4 rounded-md">
                <img
                  src="/assets/icons/information-circle.svg"
                  className="w-6 h-6 object-cover"
                />
                <Link
                  href="#"
                  className="font-DM_Sans text-base font-light text-[#1C2834]"
                >
                  About
                </Link>
              </div>
              <div className="flex space-x-3 hover:bg-gray-100 p-4 rounded-md">
                <img
                  src="/assets/icons/settings-01.svg"
                  className="w-6 h-6 object-cover"
                />
                <Link
                  href="#"
                  className="font-DM_Sans text-base font-light text-[#1C2834]"
                >
                  Settings
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-t border-gray-300 py-3">
              <div className="flex items-center space-x-3 hover:bg-red-100 p-4 px-8 rounded-md">
                <img
                  src="/assets/icons/login-03.svg"
                  className="w-6 h-6"
                  alt="Logout Icon"
                />
                <Link
                  href="#"
                  className="font-DM_Sans text-base font-medium text-[#1C2834]"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden mt-4">
          <Link
            href="/"
            className="block py-2 text-center font-semibold font-DM_Sans"
          >
            Home
          </Link>
          <Link
            href="/stores"
            className="block py-2 text-center font-semibold font-DM_Sans"
          >
            Stores
          </Link>
          <Link
            href="/cart"
            className="block py-2 text-center font-semibold font-DM_Sans"
          >
            My Cart
          </Link>
          <Link
            href="/saved"
            className="block py-2 text-center font-semibold font-DM_Sans"
          >
            Saved
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
