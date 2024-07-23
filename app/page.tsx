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
