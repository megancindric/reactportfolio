import { Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectPage = (props) => {
  const projects = [
    {
      name: "Timbr",
      description:
        "A full-stack application aimed to teach people about the local flora of their area!  Future plans are to utilize React Native to build a mobile version of the application!",
      technologies: ["Python", "Django", "JavaScript", "React"],
      repository: "http://www.google.com",
    },
    {
      name: "Roller Coaster Analysis",
      description:
        "An exploratory analysis investigating the most profitable location for a future amusement park.  The process included web scraping, data munging, and presentation of findings in the form of a Tableau Story.",
      technologies: ["Jupyter", "Python", "Pandas", "Selenium"],
      repository: "http://www.google.com",
    },
    {
      name: "React Portfolio Site",
      description:
        "The very website you're looking at now!  An ongoing passion project that I plan to regularly update with new features & improved user experience.",
      technologies: ["JavaScript", "React", "MUI"],
      repository: "https://github.com/megancindric/reactportfolio",
    },
    {
      name: "Walkabout",
      description:
        "An application designed to 'gamify' walking by assigning points to users for encountering wildlife, landmarks, or other interesting things!",
      technologies: ["Python", "JavaScript"],
      repository: "http://www.google.com",
    },
  ];
  return (
    <Container sx={{ mt: "1rem" }}>
      <Typography variant="h3" sx={{ mb: "2rem" }}>
        My Portfolio
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectPage;
