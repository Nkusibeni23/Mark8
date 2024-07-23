import React from "react";

export default function Footer() {
  return (
    <div className="mt-6 max-w-screen-full bg-[#F4F5F6] p-6 sm:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
        <div>
          <img
            src="/assets/images/mark8 logo.svg"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="font-DM_Sans font-semibold text-sm sm:text-base text-[#0C0D0D]">
            &copy; 2024 Mark8
          </p>
          <p className="font-DM_Sans font-light text-sm sm:text-base text-[#495D69]">
            By Awesomity Ltd
          </p>
        </div>
        <button className="flex items-center space-x-2 sm:space-x-4">
          <img
            src="/assets/icons/new-twitter.svg"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
            alt="Twitter"
          />
          <img
            src="/assets/icons/instagram.svg"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
            alt="Instagram"
          />
          <img
            src="/assets/icons/youtube.svg"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
            alt="YouTube"
          />
          <img
            src="/assets/icons/linkedin-02.svg"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
            alt="LinkedIn"
          />
        </button>
      </div>
    </div>
  );
}
