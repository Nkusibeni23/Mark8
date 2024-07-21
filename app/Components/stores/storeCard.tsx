import React from "react";

interface Product {
  name: string;
  image: string;
  price: number;
}

interface StoreCardProps {
  storeName: string;
  description: string;
  products: Product[];
  availableProducts: number;
  rating: number;
  reviews: number;
  categories: string[];
  photo: string;
}

const StoreCard: React.FC<StoreCardProps> = ({
  storeName,
  description,
  products,
  availableProducts,
  rating,
  reviews,
  categories,
  photo,
}) => {
  return (
    <>
      <div>
        <div className="w-full border rounded-xl bg-white flex flex-col">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 px-4 py-4 w-full space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img
                src={photo}
                alt={storeName}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-lg"
              />
              <div>
                <p className="font-DM_Sans text-base sm:text-lg md:text-xl">
                  {storeName}
                </p>
                <p className="flex-1 font-DM_Sans font-light text-gray-400 text-xs sm:text-sm md:text-sm">
                  {availableProducts} Products
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 sm:p-3 rounded-lg bg-[#C1CF16] text-black flex items-center space-x-1 sm:space-x-2 px-4 sm:px-6">
                <img
                  src="/assets/icons/user-01.svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 object-cover"
                  alt="User"
                />
                <span className="font-semibold text-xs sm:text-sm">
                  View Profile
                </span>
              </button>
              <button className="p-2 sm:p-3 border-2 border-gray-300 rounded-lg text-black">
                <img
                  src="/assets/icons/call.svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 object-cover"
                  alt="Call"
                />
              </button>
              <button className="p-2 sm:p-3 border-2 border-gray-300 rounded-lg text-black">
                <img
                  src="/assets/icons/favourite-01.svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 object-cover"
                  alt="Favourite"
                />
              </button>
            </div>
          </div>

          {/* About this awesome shop */}
          <div className="mt-4 w-full px-4 md:px-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="font-DM_Sans text-base font-medium text-black">
                About
              </h2>
              <p className="flex-1 mt-4 font-DM_Sans text-base font-light text-[#495D69]">
                {description}
              </p>
              <h2 className="mt-6 font-DM_Sans text-base font-medium text-black">
                Categories
              </h2>
              <div className="flex items-center space-x-4 mt-4">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-xs text-center rounded-full border border-[#DBDBDB] text-[#495D69] py-[5px] px-6"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="mt-6 font-DM_Sans text-base font-medium text-black">
                Reviews
              </h2>
              <div className="flex items-center space-x-2 mt-4">
                <img
                  src="/assets/icons/star-01.svg"
                  className="w-4 h-4 object-cover"
                  alt="Star"
                />
                <p className="text-[#495D69] font-semibold font-DM_Sans">
                  {rating}
                </p>
                <p className="font-DM_Sans text-[#495D69] font-light text-sm">
                  ({reviews.toLocaleString()} reviews)
                </p>
              </div>
              <div className="flex-1 mt-16 mb-8">
                <button
                  type="submit"
                  className="flex items-center space-x-2 rounded-lg border-2 border-gray-300 px-6 py-3"
                >
                  <img
                    src="/assets/icons/delivery-box-01.svg"
                    className="w-6 h-6 object-cover"
                    alt="Delivery"
                  />
                  <span className="text-base font-bold font-DM_Sans">
                    Explore Products
                  </span>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6 md:mb-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="relative w-full h-[260px] border-2 border-gray-300 rounded-xl overflow-hidden md:h-[320px]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-3/4 rounded-t-lg"
                  />
                  <div className="bg-white bg-opacity-75 flex justify-between items-center px-4 py-2 absolute bottom-0 w-full mb-2">
                    <div className="flex-1 space-y-2">
                      <span className="font-DM_Sans text-xs font-medium text-[#495D69] md:text-sm">
                        {product.name}
                      </span>
                      <p className="text-[#C1CF16] font-semibold text-xs md:text-base">
                        {product.price.toLocaleString()} Rwf
                      </p>
                    </div>
                    <button className="p-2 rounded-lg border-2 border-gray-300">
                      <img
                        src="/assets/icons/favourite-01.svg"
                        className="w-3 h-3 object-cover md:w-4 md:h-4"
                        alt="Favourite"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreCard;
