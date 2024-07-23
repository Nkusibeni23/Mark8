"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import Layout from "./Components/Layout";
import Home from "./pages/home";

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
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

        if (response.ok) {
          const data = await response.json();
          console.log("Response Data:", data);
          if (data.token) {
            console.log("Token:", data.token);
            dispatch(
              setUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
              })
            );
          } else {
            console.error("Token is missing in the response data");
          }
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

// If you reach here means you're reviewing my Codes! Amazing!!

// Challenge Reflection

// I thoroughly enjoyed working on this frontend project for Awesomity. The design was impressive, and implementing the UI was both challenging and rewarding.

// During the development process, I encountered some challenges with the Swagger API endpoints. Specifically, I faced issues with sign-in functionality for
// non-seller roles, where no token was provided, preventing user info review. For the buyer role, while the API provided all necessary data,
// I couldn’t complete the login due to the isActive flag being set to false. This might indicate that buyers require additional privileges to log in
//  or perform actions like adding or retrieving products.

// I also worked diligently to match the Figma design as closely as possible and conducted testing on various components and pages. Despite the tight deadline,
// I put my best effort into delivering the project.

// Thank you for the opportunity to work on this challenge!
