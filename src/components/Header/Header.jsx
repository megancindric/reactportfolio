import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Header = (post) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog Name Here!
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
