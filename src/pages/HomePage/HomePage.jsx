import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";
import ProfilePic from "../../assets/profile.jpg";
import Kermit from "../../assets/kermit.png";
const HomePage = (props) => {
  return (
    <Container
      sx={{
        display: "flex",
        margin: "3rem",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          alignContent: "center",
          textAlign: "justify",
          padding: "8rem",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Greeting Message!
        </Typography>
        <Typography variant="body1">
          This is a little about me blurb Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.{" "}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, alignContent: "center" }}>
        <Avatar
          alt="Profile picture for Megan Cindric"
          src={ProfilePic}
          sx={{ width: 300, height: 300 }}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
