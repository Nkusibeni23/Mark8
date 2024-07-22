import React from "react";
import Header from "../Components/Header/header";
import Welcome from "../Components/Home/Welcome/welcome";
import Product from "../Components/Home/Products/product";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Product />
    </>
  );
}
