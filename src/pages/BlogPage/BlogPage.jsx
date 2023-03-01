import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Bob from "../../assets/garden3.jpg";

const BlogPage = (props) => {
  return (
    <>
      <Container>
        {" "}
        <Typography variant="h3" sx={{ mt: "1rem" }}>
          Random Thoughts
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          paddingTop: "3rem",

          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <Box>
          <Box
            sx={{
              padding: "1rem",
              height: "300px",
              width: "900px",
              mb: "1rem",
              backgroundImage: `url(${Bob})`,
            }}
          ></Box>
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h4" mb={1}>
              This is the post title!
            </Typography>
            <Typography variant="overline" gutterBottom>
              And a very small date
            </Typography>
            <Typography variant="body1">And the main content!</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            minWidth: 300,
          }}
        >
          <Box
            sx={{
              border: "1px solid",
              borderRadius: "10px",
              borderColor: "#43A047",
              padding: "1rem",
              mb: "1rem",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: "1rem" }}>
              Search
            </Typography>

            <TextField id="outlined-basic" size="small" />
          </Box>
          <Box
            sx={{
              padding: "1rem",
              border: "1px solid",
              borderRadius: "10px",
              borderColor: "#43A047",
            }}
          >
            <Typography variant="h5">Categories</Typography>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Coding" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Thailand" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Travels" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Business" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
