import React from "react";

import { Box, Typography } from "@mui/material";
import RiceField from "../../assets/ricefield.jpeg";
import Image from "mui-image";
const BlogPost = (props) => {
  return (
    <>
      <Image src={RiceField} fit="cover" height="50%" />
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="h4" mb={1}>
          The blog is coming soon, I promise!
        </Typography>
        <Typography variant="overline" gutterBottom></Typography>
        <Typography variant="body1"></Typography>
      </Box>
    </>
  );
};

export default BlogPost;
