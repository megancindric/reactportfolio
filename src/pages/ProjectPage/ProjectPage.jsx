import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectPage = (props) => {
  const projects = [
    {
      name: "Portfolio Site",
      description:
        "The very website you're looking at now!  An ongoing passion project that I plan to regularly update with new features & improved user experience.  Currently, I am refactoring my website to use TailwindCSS!",
      technologies: ["JavaScript", "ReactJs", "Tailwind"],
      repository: "https://github.com/megancindric/reactportfolio",
    },
    {
      name: "Video Game Analysis",
      description:
        "An interactive dashboard exploring trends and patterns found in video game sales from the past 4 decades.  Utilizes ReCharts to visualize trends in a dashboard format.",
      technologies: ["CSharp", "DotNet", "MySql", "ReactJs", "Tailwind"],
      repository: "http://www.google.com",
    },
    {
      name: "Coaster Analysis",
      description:
        "An exploratory analysis investigating the most profitable location for a future amusement park.  The process included web scraping, data munging, and presentation of findings in the form of a Tableau Story.",
      technologies: ["Jupyter", "Python", "Pandas", "Selenium"],
      repository: "http://www.google.com",
    },

    {
      name: "Timbr",
      description:
        "A full-stack application aimed to teach people about the local flora of their area!  Future plans are to utilize React Native to build a mobile version of the application!",
      technologies: ["Python", "Django", "JavaScript", "ReactJs"],
      repository: "http://www.google.com",
    },
  ];
  return (
    <div className="bg-lightPurple gap-10 h-screen flex flex-col p-10 text-darkPurple">
      <h3 className=" text-7xl font-gillsans text-center pb-6">Projects</h3>
      <div className="flex flex-wrap justify-center gap-12 ">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
