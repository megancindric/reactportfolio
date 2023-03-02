import { Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectPage = (props) => {
  const projects = [
    {
      name: "Walkabout",
      description:
        "Some fun placeholder text about this really cool project I made",
      technologies: ["Python", "Django"],
      repository: "http://www.google.com",
    },
    {
      name: "Walkabout",
      description:
        "Some fun placeholder text about this really cool project I made",
      technologies: ["Python", "Django"],
      repository: "http://www.google.com",
    },
    {
      name: "Walkabout",
      description:
        "Some fun placeholder text about this really cool project I made",
      technologies: ["Python", "Django"],
      repository: "http://www.google.com",
    },
    {
      name: "Walkabout",
      description:
        "Some fun placeholder text about this really cool project I made",
      technologies: ["Python", "Django"],
      repository: "http://www.google.com",
    },
  ];
  return (
    <Container sx={{ mt: "1rem" }}>
      <Typography variant="h3" sx={{ mb: "2rem" }}>
        My Portfolio
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectPage;
