import React from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed

const NewArrivals = () => {
  // Product data array
  const products = [
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image1.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image2.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image3.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image4.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image5.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image6.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image7.png",
    },
    {
      name: "Martha Knit Top",
      oldPrice: "Rs. 2020",
      newPrice: "Rs. 1999",
      rating: 5,
      image: "./../../public/new/image8.png",
    },
  ];

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">NEW ARRIVALS</h2>
      <p className="text-center text-gray-600 mt-2">
        Shop Our New Arrivals From Established Brands
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product, index) => (
          <Link
            to="/not-found"
            key={index}
            className="group block text-center hover:opacity-90 transition"
          >
            {/* Image Container */}
            <div className="w-full h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg md:text-xl text-start font-semibold">
              {product.name}
            </h3>
            <div className="flex items-center justify-between mt-2 text-sm md:text-base">
              <span className="text-gray-500 line-through">{product.oldPrice}</span>
              <span className="text-gray-900 font-bold">{product.newPrice}</span>
            </div>
            {/* Star Rating */}
            <div className="flex justify-start mt-2 space-x-1">
              {Array(product.rating)
                .fill()
                .map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-500"
                  >
                    <path d="M12 .587l3.668 7.431L23.327 9.8l-5.659 5.512 1.334 7.778L12 18.896l-7.002 3.695 1.334-7.778L.673 9.8l7.659-1.782L12 .587z" />
                  </svg>
                ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
