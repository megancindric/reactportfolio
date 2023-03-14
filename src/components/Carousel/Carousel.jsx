import React from "react";
import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import TechIcon from "../TechIcon/TechIcon";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    "About Me",
    "What I'm Learning",
    "My Toolbelt",
    "Let's Get in Touch",
  ];
  const techStack = [
    "Python",
    "JavaScript",
    "CSharp",
    "ReactJs",
    "Tailwind",
    "MySql",
    "Django",
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
    <div className="flex flex-1   text-emerald-800 justify-center items-center">
      <div
        className={` absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className=" gap-6  flex-col">
          <h3 className="  text-5xl">Hello, I'm Megan! 👋</h3>
          <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-10 self-center w-full" />

          <p className=" text-2xl text-justify">
            I'm a Wisconsin-based Software Developer who enjoys coding, coffee,
            and spending time in the great outdoors. I'm building this website
            as a fusion of all of my passions and interests - coding, writing,
            connecting, and trying new things!
          </p>
          <p className="text-3xl pt-4">Thanks for stopping by!</p>
        </div>
      </div>
      <div
        className={`absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className=" flex flex-col">
          <h1 className="text-5xl text-center "> What I'm Learning...</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-10 self-center w-full" />

          <ul className="text-3xl list-disc ">
            <li className="p-3">Tailwind CSS</li>
            <li className="p-3">C#.NET, .NET Core 5.0, and .NET Framework</li>
            <li className="p-3">Next.JS</li>
            <li className="p-3">TypeScript</li>
            <li className="p-4 list-none text-right"> ....and more!</li>
          </ul>
        </div>
      </div>
      <div
        className={`absolute carousel-item w-screen max-w-xl p-4 transition-opacity ${
          currentIndex === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="">
          <h1 className="text-5xl text-center">My Toolbelt</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-10 w-full " />
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
          <h1 className="text-5xl pt-3">Let's Get in Touch!</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-6 w-full " />

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
              <TechIcon tech="LinkedIn" />
            </a>
            <a
              href="https://github.com/megancindric"
              target="+blank"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="GitHub" />
            </a>
            <a
              href="mailto:megancindric@gmail.com"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
