import React from "react";

const CarouselItem = ({ item, index, currentIndex }) => {
  return (
    <div
      className={`carousel-item w-screen max-w-lg p-4 transition-opacity  text-emerald-800 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className=" text-5xl">{item.title}</h1>
      <p className="text-lg">{item.mainContent}</p>
    </div>
  );
};

export default CarouselItem;
