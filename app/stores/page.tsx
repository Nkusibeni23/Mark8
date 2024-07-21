import React from "react";
import Layout from "../Components/Layout";
import StoreCard from "../Components/stores/storeCard";

export default function Stores() {
  const stores = [
    {
      storeName: "Awesome Shop 1",
      description:
        "A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals.",
      products: [
        { name: "Product 1", image: "/assets/icons/icon.jpg", price: 12000 },
        { name: "Product 2", image: "/assets/icons/icon.jpg", price: 18000 },
        { name: "Product 3", image: "/assets/icons/icon.jpg", price: 10000 },
      ],
      availableProducts: 134,
      rating: 4.6,
      reviews: 19,
      categories: ["Vector", "Background"],
      photo: "/assets/icons/icon-01.svg",
    },
    {
      storeName: "Awesome Shop 2",
      description:
        "A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals.",
      products: [
        { name: "Product A", image: "/assets/icons/icon-10.jpg", price: 16000 },
        { name: "Product B", image: "/assets/icons/icon.jpg", price: 10500 },
        { name: "Product C", image: "/assets/icons/icon-10.jpg", price: 10500 },
      ],
      availableProducts: 98,

      rating: 4.2,
      reviews: 16,
      categories: ["Icons", "Background"],
      photo: "/assets/icons/icon-07.svg",
    },
    {
      storeName: "Awesome Shop 3",
      description:
        "A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals.",
      products: [
        { name: "Product 1", image: "/assets/icons/icon-10.jpg", price: 9000 },
        { name: "Product 2", image: "/assets/icons/icon.jpg", price: 10000 },
        { name: "Product 3", image: "/assets/icons/icon-10.jpg", price: 11500 },
      ],
      availableProducts: 13,

      rating: 4.2,
      reviews: 16,
      categories: ["Icons", "Background", "Vectors"],
      photo: "/assets/icons/icon-07.svg",
    },
  ];

  return (
    <Layout>
      <div className="mt-24 bg-primary-custom rounded-xl p-4 max-w-screen-2xl mx-2 sm:mx-8 md:mx-14 lg:mx-auto md:mt-10">
        <div className="flex items-center justify-center mb-10">
          <div className="mt-8 w-full max-w-2xl">
            <h2 className="font-extrabold font-DM_Sans text-xl text-center text-[#C1CF16]">
              Mark8 <span className="text-black">Store</span>
            </h2>
            <div className="mt-6 flex-1 text-center">
              <p className="text-[#495D69 font-light font-DM_Sans text-sm">
                54 Stores
              </p>
              <div className="mt-6 flex justify-center w-full relative px-2 md:px-0">
                <button className="absolute left-4 top-3 z-50 cursor-pointer">
                  <img
                    src="assets/icons/search-02.svg"
                    className="w-6 h-6 object-cover text-[#C1CF16]"
                  />
                </button>
                <input
                  type="text"
                  className="rounded-xl bg-[#EBECEF] font-DM_Sans w-[700px] h-12 px-14 text-[#6E6F70]"
                  placeholder="Search Store"
                />
                <button className="absolute right-4 top-3 z-50 cursor-pointer">
                  <img
                    src="assets/icons/filter-vertical-05.svg"
                    className="w-6 h-6 object-cover text-[#C1CF16]"
                  />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button className="font-semibold text-[#495D69] text-xs text-center rounded-full border-2 border-[#1C2834] py-2 px-4 sm:px-6">
                  All
                </button>
                <button className="text-xs text-center rounded-full border-2 border-[#DBDBD] text-[#495D69] py-2 px-4 sm:px-6">
                  Vectors
                </button>
                <button className="text-xs text-center rounded-full border-2 border-[#DBDBD] text-[#495D69] py-2 px-4 sm:px-6">
                  Icons
                </button>
                <button className="text-xs text-center rounded-full border-2 border-[#DBDBD] text-[#495D69] py-2 px-8">
                  Background
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-8 ">
        <div className="space-y-8">
          {stores.map((store, index) => (
            <StoreCard
              key={index}
              storeName={store.storeName}
              description={store.description}
              products={store.products}
              availableProducts={store.availableProducts}
              rating={store.rating}
              reviews={store.reviews}
              categories={store.categories}
              photo={store.photo}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-center mb-4 mt-2">
          <div className="mt-6 p-3 flex items-center justify-center border border-[#DBDBDD] rounded-lg w-1/3 sm:w-2/3 md:w-1/4 lg:w-1/5 space-x-2">
            <img
              src="/assets/icons/arrow-down-01.svg"
              className="w-4 h-4 object-cover md:w-6 md:h-6"
            />
            <p className="font-DM_Sans text-black font-semibold text-xs md:text-sm cursor-pointer">
              Load More
            </p>
          </div>
        </div>

        <div className="w-full mt-8 mb-4 rounded-lg p-8 bg-primary-custom">
          <div className="flex flex-col md:flex-row items-center justify-between px-2">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <p className="text-[#C1CF16] font-bold text-xl">
                Open <span className="text-black"> your Store</span>
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-1/3 lg:w-1/2 relative mt-4 md:mt-0">
              <button
                type="submit"
                className="cursor-pointer absolute left-7 top-3"
              >
                <img
                  src="/assets/icons/mail-02.svg"
                  className="w-6 h-6 object-cover"
                />
              </button>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-[#EEEFF1] placeholder:text-[#6F7071] pl-12 text-black font-DM_Sans placeholder:font-DM_Sans"
                placeholder="Enter your Email"
              />
              <button
                type="submit"
                className="bg-[#C1CF16] p-3 rounded-lg font-bold flex items-center gap-2 justify-center md:text-sm text-xs px-8"
              >
                Submit
                <img
                  src="/assets/icons/arrow-right-03.svg"
                  className="w-3 md:w-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
