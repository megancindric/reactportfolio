import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import TechIcon from "../TechIcon/TechIcon";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 300, height: 400 }}>
      <Box align="center" padding="1rem" height={400}>
        <Typography variant="h5" align="center" mb="1rem">
          {project.name}
        </Typography>
        {project.technologies.map((tech) => (
          <TechIcon tech={tech} />
        ))}
        <Typography variant="body1" gutterBottom mt="1rem">
          {project.description}
        </Typography>
        <Box justifyContent="center">
          <a href={project.repository} target="+blank">
            <Button size="large" variant="outlined">
              Learn More!
            </Button>
          </a>
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;
