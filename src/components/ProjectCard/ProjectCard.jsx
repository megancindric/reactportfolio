import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import TechIcon from "../TechIcon/TechIcon";

const ProjectCard = ({ project }) => {
  return (
    <div className=" max-w-sm max-h-lg bg-white w-96 drop-shadow-2xl px-8 pt-6 flex flex-col items-center rounded-3xl">
      <h5 className=" text-center text-4xl font-gillsans text-emerald-800">
        {project.name}
      </h5>
      <hr className=" h-0.5 bg-emerald-900 border-0 mt-6 mb-4 w-full" />
      <div className="flex flex-row justify-center gap-3 p-4">
        {project.technologies.map((tech) => (
          <TechIcon tech={tech} />
        ))}
      </div>
      <p className=" font-gillsans border text-justify text-lg">
        {project.description}
      </p>

      <a href={project.repository} target="+blank">
        <button className=" text-center rounded-lg p-2 bg-emerald-100 border-emerald-700 drop-shadow-sm m-3 font-semibold">
          Learn More!
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
