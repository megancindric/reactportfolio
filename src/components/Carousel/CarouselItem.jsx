import React from "react";

const CarouselItem = ({ slide, index, currentIndex }) => {
  return (
    <div
      className={`absolute carousel-item w-screen max-w-xl h-auto p-6 transition-opacity border ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      {slide}
    </div>
  );
};

export default CarouselItem;
