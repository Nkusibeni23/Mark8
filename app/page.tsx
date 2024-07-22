"use client";

import React, { useEffect } from "react";
import Home from "./pages/home";
import Layout from "./Components/Layout";
import { useUser } from "./Context/userContext";

export default function Page() {
  const { setUser } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Fetching user data...");
      try {
        const response = await fetch(
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

        console.log("Response:", response); // Log the response object

        if (response.ok) {
          const data = await response.json();
          console.log("Raw data:", data); // Log raw data
          console.log("User data:", {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          }); // Log extracted user data
          setUser({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [setUser]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
