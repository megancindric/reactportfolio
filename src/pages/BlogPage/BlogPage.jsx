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
import BlogPost from "../../components/BlogPost/BlogPost";

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
        <Box flexGrow={2}>
          <BlogPost />
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            minWidth: 300,
          }}
        >
          <Box
            flexGrow={1}
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
