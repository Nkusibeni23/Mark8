import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";

const product = {
  name: "Product 1",
  price: 9000,
  mainImage: "/assets/icons/icon.jpg",
  images: [
    "/assets/icons/icon.jpg",
    "/assets/icons/icon.jpg",
    "/assets/icons/icon.jpg",
    "/assets/icons/icon.jpg",
    "/assets/icons/icon.jpg",
  ],
  description:
    "A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals.",
  reviews: 123,
  discount: 12000,
  rating: 4.5,
};

const relatedProducts = [
  {
    name: "Product 2",
    price: 8000,
    discount: 10000,
    mainImage: "/assets/icons/icon.jpg",
  },
  {
    name: "Product 3",
    price: 7500,
    discount: 9500,
    mainImage: "/assets/icons/icon.jpg",
  },
  {
    name: "Product 4",
    price: 8500,
    discount: 11000,
    mainImage: "/assets/icons/icon.jpg",
  },
  {
    name: "Product 5",
    price: 9000,
    discount: 12000,
    mainImage: "/assets/icons/icon.jpg",
  },
];

export default function Page() {
  return (
    <Layout>
      <div className="mt-8 max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-start text-start space-x-2 md:space-x-4">
          <Link href="/" type="submit">
            <img
              src="/assets/icons/arrow-left-04.svg"
              className="w-6 h-6 md:w-7 md:h-7 object-cover"
              alt="Back"
            />
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="/"
              className="text-[#141C24] flex items-center font-DM_Sans text-xs md:text-base"
            >
              Home /
            </Link>
          </div>
          <span className="text-[#141C24] font-DM_Sans text-xs md:text-base">
            Products /
          </span>
          <span className="text-[#141C24] font-DM_Sans text-xs md:text-base">
            Vector /
          </span>
          <span className="text-[#495D69] font-DM_Sans text-xs md:text-base">
            {product.name}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between mt-8 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 flex flex-col border border-gray-300 rounded-xl overflow-hidden">
            <img
              src={product.mainImage}
              alt={product.name}
              className="w-full h-72 md:h-2/3 object-cover mb-4"
            />
            <div className="flex justify-start space-x-2 md:space-x-4 px-4 md:px-8 mb-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 border border-gray-300 rounded-xl">
            <div className="border-b border-gray-300 w-full flex items-center justify-between p-4 md:px-8">
              <div className="flex items-center space-x-2 md:space-x-4">
                <h2 className="font-semibold text-black text-sm md:text-base font-DM_Sans">
                  Product Detail
                </h2>
                <button
                  type="submit"
                  className="flex items-center justify-center p-1 bg-[#F4F5F6] rounded-md px-2"
                >
                  <p className="text-xs font-medium font-DM_Sans">IN STOCK</p>
                </button>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <button
                  type="submit"
                  className="flex items-center justify-center p-2 md:p-4 border-2 border-gray-300 rounded-lg"
                >
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <img
                      src="/assets/icons/favourite-02.svg"
                      className="w-4 h-4 md:w-5 md:h-5 object-cover"
                    />
                    <p className="font-semibold text-black text-xs md:text-base font-DM_Sans">
                      Save
                    </p>
                  </div>
                </button>
                <button type="submit">
                  <img
                    src="/assets/icons/more-vertical-square-01.svg"
                    className="w-4 h-4 md:w-5 md:h-5 object-cover"
                  />
                </button>
              </div>
            </div>
            {/* product detail div */}
            <div className="px-4 md:px-8 mt-6 mb-20 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-black mb-2 font-DM_Sans">
                {product.name}
              </h2>
              <div className="flex items-center space-x-2 md:space-x-3 mb-4">
                <p className="text-base md:text-lg text-[#C1CF16] font-semibold font-DM_Sans">
                  {product.price.toLocaleString()} Rwf
                </p>
                <p className="text-xs md:text-base text-[#DBDBDB] line-through font-medium font-DM_Sans">
                  {product.discount.toLocaleString()} Rwf
                </p>
              </div>
              <div className="mt-7">
                <div className="flex-1 space-y-2">
                  <p className="text-black font-semibold text-xs md:text-sm font-DM_Sans">
                    Description
                  </p>
                  <p className="text-xs md:text-sm text-[#495D69] font-DM_Sans">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-black font-semibold text-xs md:text-sm font-DM_Sans">
                  Reviews
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <img
                    src="/assets/icons/star-01.svg"
                    className="w-4 h-4 object-cover"
                  />
                  <p className="text-xs md:text-sm text-[#495D69] font-semibold font-DM_Sans">
                    {product.rating}
                  </p>
                  <p className="text-xs md:text-sm text-[#495D69] font-DM_Sans">
                    ({product.reviews} Reviews)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4 mt-6 w-full">
                <button className="py-2 px-4 md:py-2 md:px-6 border-2 border-gray-300 rounded-lg font-DM_Sans text-xs md:text-base">
                  -
                </button>
                <span className="py-2 px-4 md:py-2 md:px-10 bg-[#F5F5F5] rounded-lg font-semibold text-black font-DM_Sans text-xs md:text-base">
                  1
                </span>
                <button className="py-2 px-4 md:py-2 md:px-6 border-2 border-gray-300 rounded-lg font-DM_Sans text-xs md:text-base">
                  +
                </button>
                <button className="py-2 px-4 md:py-3 md:px-6 bg-[#C1CF16] rounded-lg flex items-center space-x-2 md:space-x-3">
                  <img
                    src="/assets/icons/shopping-cart-check-in-03.svg"
                    className="w-4 h-4 md:w-5 md:h-5 object-cover"
                    alt="Cart"
                  />
                  <span className="text-xs md:text-base font-semibold text-black font-DM_Sans">
                    Add To Cart
                  </span>
                </button>
              </div>
            </div>
            {/* store owner info */}
            <div className="border-t border-gray-300 w-full flex items-center justify-between p-4 md:px-8">
              <div className="flex items-center space-x-2 md:space-x-4">
                <h2 className="font-bold text-black text-xs md:text-base font-DM_Sans">
                  Store Info:
                </h2>
                <img
                  src="/assets/icons/icon-01.svg"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                />
                <h2 className="font-light text-[#1C2834] text-xs md:text-sm font-DM_Sans">
                  Awesome Shop 1
                </h2>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center p-2 md:p-4 border border-gray-300 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src="/assets/icons/call-02.svg"
                    className="w-4 h-4 md:w-5 md:h-5 object-cover"
                  />
                  <p className="font-semibold text-black text-xs md:text-base font-DM_Sans">
                    Contact Store
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* you might also like */}
        <div className="mt-8 mx-auto px-1">
          <h3 className="font-DM_Sans font-semibold text-black text-base">
            You might also like
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl flex flex-col items-center overflow-hidden w-full"
              >
                <img
                  src={relatedProduct.mainImage}
                  alt={relatedProduct.name}
                  className="w-full h-3/3 object-cover"
                />
                <div className="flex items-center justify-between w-full px-6 mb-6 md:mb-6 sm:mb-6">
                  <div>
                    <h3 className="font-DM_Sans font-normal text-sm text-black mb-2 mt-4 md:text-base">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <p className="font-semibold text-xs text-[#C1CF16] md:text-sm">
                        {relatedProduct.price.toLocaleString()} Rwf
                      </p>
                      <p className="font-semibold text-xs text-[#DBDBDB] line-through md:text-sm">
                        {relatedProduct.discount.toLocaleString()} Rwf
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="submit"
                      className="border border-[#DBDBDB] rounded-lg p-2"
                    >
                      <img src="assets/icons/shopping-cart-check-in-03.svg" />
                    </button>
                    <button
                      type="submit"
                      className="border border-[#DBDBDB] rounded-lg p-2"
                    >
                      <img src="/assets/icons/favourite.svg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-8 mb-4 rounded-xl p-8 bg-primary-custom">
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
