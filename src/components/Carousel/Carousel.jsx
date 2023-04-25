import React from "react";
import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import TechIcon from "../TechIcon/TechIcon";
import AboutSlide from "./AboutSlide";
import LearningSlide from "./LearningSlide";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    "About Me",
    "What I'm Learning",
    "My Toolbelt",
    "Let's Get in Touch",
    "test",
  ];
  const techStack = [
    "Python",
    "JavaScript",
    "CSharp",
    "ReactJs",
    "Tailwind",
    "MySql",
    "Django",
    "Flask",
    "Docker",
    "GitHub",
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
      <div
        className={` absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutSlide />
      </div>
      <div
        className={`absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <LearningSlide />
      </div>
      <div
        className={`absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="">
          <h1 className="text-5xl text-center">My Toolbelt</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 my-6 w-full " />
          <div className="flex flex-row flex-wrap gap-6 pt-4 justify-center">
            {techStack.map((tech, index) => (
              <TechIcon key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      <div
        className={`absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="">
          <h1 className="text-5xl text-center">Let's Get in Touch!</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 my-6 w-full " />

          <p className="text-2xl text-justify py-6">
            I'm always looking for new opportunities to connect with others,
            collaborate on projects, and learn something new! Let's connect and
            build something great together!
          </p>
          <div className="flex flex-row justify-between  pt-6 pb-8">
            <a
              href="https://www.linkedin.com/in/megan-cindric/"
              target="+blank"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="LinkedIn" className="h-20" />
            </a>
            <a
              href="https://github.com/megancindric"
              target="+blank"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="GitHub" className="h-20" />
            </a>
            <a
              href="mailto:megancindric@gmail.com"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="Email" className="h-20" />
            </a>
          </div>
        </div>
      </div>
      <CarouselItem
        item={{
          title: "This is a test",
          mainContent: "This is a test this is a test",
        }}
        index={4}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default Carousel;
