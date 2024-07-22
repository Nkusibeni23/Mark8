"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import Layout from "./Components/Layout";
import Home from "./pages/home";

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loginUser = async () => {
      try {
        // Login to get tokens
        const loginResponse = await fetch(
          "https://api.mark8.awesomity.rw/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "cates@gmail.com",
              password: "Kts12345",
            }),
          }
        );

        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          console.log("Login Response Data:", loginData); // Log the entire response data

          const { accessToken, refreshToken } = loginData.data;
          console.log("Access Token:", accessToken); // Log the access token
          console.log("Refresh Token:", refreshToken); // Log the refresh token

          // Save the tokens to local storage
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          // Fetch user profile details using the access token
          const profileResponse = await fetch(
            "https://api.mark8.awesomity.rw/auth/profile",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            console.log("Profile Response Data:", profileData); // Log the profile response data

            // Dispatch user details to the Redux store
            dispatch(
              setUser({
                firstName: profileData.firstName,
                lastName: profileData.lastName,
                email: profileData.email,
              })
            );
          } else {
            console.error("Failed to fetch user profile");
          }
        } else {
          console.error("Failed to login");
        }
      } catch (error) {
        console.error("Error during login or fetching user profile", error);
      }
    };

    loginUser();
  }, [dispatch]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
