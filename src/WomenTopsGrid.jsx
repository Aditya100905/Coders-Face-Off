import React from "react";

const products = [
  { id: 1, image: "./../../public/women/image1.png" },
  { id: 2, image: "./../../public/women/image2.png" },
  { id: 3, image: "./../../public/women/image3.png" },
  { id: 4, image: "./../../public/women/image4.png" },
  { id: 5, image: "./../../public/women/image5.png" },
  { id: 6, image: "./../../public/women/image6.png" },
];

const WomenTopsGrid = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center space-y-4">
            <img
              src={product.image}
              alt="Women Top"
              className="w-[320px] h-[400px] object-cover border border-gray-300 shadow-lg"
            />
            <h2 className="text-lg font-bold">WOMEN TOPS</h2>
            <p className="text-gray-500">From World's Top Designer</p>
            <button className="bg-black text-white font-semibold py-2 px-8 text-sm uppercase tracking-wide border border-black hover:bg-gray-900 transition-all">
              Discover Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenTopsGrid;
