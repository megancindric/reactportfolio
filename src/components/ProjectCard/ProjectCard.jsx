import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {project.name}
        </Typography>
        {project.technologies.map((tech) => (
          <Typography variant="overline">{tech} </Typography>
        ))}
        <Typography variant="body2" gutterBottom>
          {project.description}
        </Typography>
        <Button size="small" variant="outlined">
          Source Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
