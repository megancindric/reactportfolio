import React from "react";

const CarouselItem = ({ slide, index, currentIndex }) => {
  return (
    <div
      className={`absolute carousel-item w-screen max-w-xl h-[500px] p-6 transition-opacity  ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      {slide}
    </div>
  );
};

export default CarouselItem;
