"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.mark8.awesomity.rw/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Token:", data.accessToken);
        localStorage.setItem("token", data.accessToken);
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="min-h-screen flex flex-col items-center justify-center bg-login-page bg-cover bg-center p-4">
        <div className="w-full max-w-screen-lg bg-white rounded-2xl overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Grid */}
            <div className="bg-gray-custom p-10 flex flex-col items-center justify-center">
              <img
                src="assets/images/mark8 logo.png"
                alt="Logo"
                className="w-16 h-16 mb-4"
              />
              <p className="font-DM_Sans text-[#706f6f] text-base md:mt-10">
                By Awesomity Lab
              </p>
              <p className="text-[#706f6f] font-DM_Sans text-sm mt-auto">
                &copy; 2024 Awesomity Lab
              </p>
            </div>

            {/* Right Grid */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-DM_Sans">
                Login
              </h2>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2 font-DM_Sans"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute top-[14px] left-3">
                      <img
                        src="assets/icons/mail-01.svg"
                        className="w-6 h-6"
                        alt="Mail Icon"
                      />
                    </span>
                    <input
                      className="appearance-none rounded-xl w-full py-5 px-3 bg-[#ededed] leading-tight placeholder:text-[#706f6f] placeholder:font-regular placeholder:text-base font-DM_Sans text-[#706f6f] pl-14"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2 font-DM_Sans"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute top-[14px] left-3">
                      <img
                        src="assets/icons/square-lock-password.svg"
                        className="w-6 h-6"
                        alt="Password Icon"
                      />
                    </span>
                    <input
                      className="appearance-none rounded-xl w-full py-5 px-3 bg-[#ededed] leading-tight placeholder:text-[#706f6f] placeholder:font-regular placeholder:text-base font-DM_Sans text-[#706f6f] pl-14"
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                    />
                    <span className="absolute top-[14px] right-5 cursor-pointer">
                      <img
                        src="assets/icons/view.svg"
                        className="w-6 h-6"
                        alt="View Icon"
                      />
                    </span>
                  </div>
                </div>

                <div className="flex items-center mt-8">
                  <div className="w-full">
                    <Link
                      href="#"
                      className="underline text-black text-sm md:text-base"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-secondary-custom text-base text-black font-bold rounded-lg flex items-center justify-center gap-3 md:text-lg"
                  >
                    Login
                    <span>
                      <img
                        src="assets/icons/login-03.svg"
                        className="w-5 h-5 md:w-6 md:h-6"
                        alt="Login Icon"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-lg bg-white rounded-2xl overflow-hidden py-8 px-10">
          <div className="flex items-center justify-between">
            <div className="space-y-2 w-full">
              <p className="text-xs font-DM_Sans text-black font-medium md:text-sm">
                New Here?
              </p>
              <p className="font-DM_Sans text-[#706f6f] font-medium text-base md:text-sm">
                Create an account
              </p>
            </div>
            <button className="px-3 py-3 border border-[#d5d5d5] rounded-md flex items-center justify-center space-x-2 w-2/4">
              <p className="font-DM_Sans text-black font-semibold text-xs md:text-sm">
                Register Here
              </p>
              <span>
                <img
                  src="assets/icons/arrow-right-02.svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt="Arrow Icon"
                />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
