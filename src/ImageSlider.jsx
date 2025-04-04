import React, { useState } from 'react';

const FullScreenImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Current Slide */}
      <img
        src={'./../public/bg/slider.png'}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition duration-500"
      />
      
      {/* Text Overlay with transparent background and slight blur */}
      <div className="absolute top-1/3 left-10 max-w-md bg-white/20 backdrop-blur-sm text-white p-6 rounded-lg">
        <p className="text-sm uppercase">Are you ready?</p>
        <h1 className="text-3xl font-bold">Start Selling Online Successfully</h1>
        <p className="mt-2 text-lg">Creative, Flexible And High Performance Shopify Theme!</p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">Shop Now</button>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &#10095;
      </button>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FullScreenImageSlider;
