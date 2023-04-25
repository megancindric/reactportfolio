import React from "react";
import TechIcon from "../TechIcon/TechIcon";

const ToolbeltSlide = (props) => {
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
  return (
    <div className="">
      <h1 className="text-5xl text-center">My Toolbelt</h1>
      <hr className=" h-0.5 bg-black border-0 my-6 w-full " />
      <div className="flex flex-row flex-wrap gap-6 pt-4 justify-center">
        {techStack.map((tech, index) => (
          <TechIcon key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default ToolbeltSlide;
