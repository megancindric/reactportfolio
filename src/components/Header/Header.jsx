import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";

const Header = (post) => {
  const pages = [
    { button: "Projects", link: "projects" },
    { button: "Blog", link: "blog" },
    { button: "About Me", link: "about" },
  ];
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ForestIcon
            sx={{ display: "flex", mr: 1 }}
            onClick={() => navigate(`/`)}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "Segoe UI",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Code & Explore
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            {pages.map((page) => (
              <Button
                size="large"
                key={page.link}
                onClick={() => navigate(`/${page.link}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.button}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
