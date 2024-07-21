import React from "react";
import Layout from "../Components/Layout";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 12000,
    discount: 16000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 12000,
    discount: 16000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 15000,
    discount: 17000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 20000,
    discount: 24000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 14000,
    discount: 16000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 13000,
    discount: 15000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: 10000,
    discount: 13000,
    image: "/assets/icons/icon.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: 9000,
    discount: 12000,
    image: "/assets/icons/icon.jpg",
  },
];

export default function Page() {
  return (
    <Layout>
      <div className="mt-24 bg-primary-custom rounded-xl p-8 max-w-screen-2xl mx-4 sm:mx-8 md:mx-8 lg:mx-auto md:mt-10">
        <div className="flex-1 space-y-3 text-center">
          <h2 className="font-semibold text-black text-lg">Saved Products</h2>
          <h4 className="font-light text-sm text-[#495D69]">6 Saved</h4>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 px-4 md:px-4 sm:px-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl flex flex-col items-center overflow-hidden"
            >
              <div className="w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between w-full mt-4 px-8 mb-6">
                <div className="flex-1 space-y-2">
                  <h3 className="font-DM_Sans font-semibold text-base text-black">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <p className="font-DM_Sans text-sm text-[#C1CF16]">
                      {product.price.toLocaleString()} Rwf
                    </p>
                    <p className=" font-DM_Sans text-sm font-medium text-[#495D69] line-through">
                      {product.discount.toLocaleString()} Rwf
                    </p>
                  </div>
                </div>
                <div className=" flex items-center space-x-2">
                  <button className="p-2 border-2 border-gray-300 rounded-lg">
                    <img
                      src="assets/icons/shopping-cart-check-in-03.svg"
                      className="w-5 h-5 object-cover"
                      alt="Add to Cart"
                    />
                  </button>
                  <button className="p-2 border-2 border-gray-300 rounded-lg">
                    <img
                      src="/assets/icons/favourite-02.svg"
                      className="w-5 h-5 object-cover"
                      alt="Save"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
