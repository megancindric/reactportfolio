import React from "react";
import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import TechIcon from "../TechIcon/TechIcon";
import AboutSlide from "./AboutSlide";
import LearningSlide from "./LearningSlide";
import ToolbeltSlide from "./ToolbeltSlide";
import ContactSlide from "./ContactSlide";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    "About Me",
    "What I'm Learning",
    "My Toolbelt",
    "Let's Get in Touch",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === content.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [content.length]);
  return (
    <div className="flex flex-1 items-center">
      <CarouselItem
        slide={<AboutSlide />}
        index={0}
        currentIndex={currentIndex}
      />
      <CarouselItem
        slide={<LearningSlide />}
        index={1}
        currentIndex={currentIndex}
      />
      <CarouselItem
        slide={<ToolbeltSlide />}
        index={2}
        currentIndex={currentIndex}
      />

      <CarouselItem
        slide={<ContactSlide />}
        index={3}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default Carousel;
