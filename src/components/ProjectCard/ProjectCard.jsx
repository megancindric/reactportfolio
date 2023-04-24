import React from "react";

import TechIcon from "../TechIcon/TechIcon";

const ProjectCard = ({ project }) => {
  return (
    <div className=" max-w-sm max-h-lg bg-white w-96 drop-shadow-2xl px-8 pt-6 flex flex-col justify-between flex-1 items-center rounded-3xl">
      <h5 className=" text-center text-4xl font-gillsans">{project.name}</h5>
      <hr className=" h-0.5 bg-black border-0 mt-6 mb-4 w-full" />
      <div className="flex flex-row justify-center gap-3 p-6">
        {project.technologies.map((tech) => (
          <TechIcon tech={tech} />
        ))}
      </div>
      <p className=" font-gillsans text-justify text-xl grow">
        {project.description}
      </p>

      <a href={project.repository} target="+blank" className="p-4">
        <button
          href={project.repository}
          target="+blank"
          className=" text-center text-lg rounded-xl p-3  text-white bg-emerald-400 border-emerald-700 drop-shadow-sm m-3  transition-all duration-100 hover:scale-110 "
        >
          Learn More!
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
