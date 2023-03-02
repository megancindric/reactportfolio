import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

import TechIcon from "../TechIcon/TechIcon";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {project.name}
        </Typography>
        {project.technologies.map((tech) => (
          <TechIcon tech={tech} />
        ))}
        <Typography variant="body2" gutterBottom>
          {project.description}
        </Typography>
        <a href={project.repository} target="+blank">
          <Button size="small" variant="outlined">
            Source Code
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
