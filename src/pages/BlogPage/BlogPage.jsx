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
  const fakeEntries = [
    "Thoughts on Sweeping",
    "Down Dog through a Downswing",
    "In Defense of Death",
    "A Quiet Life",
  ];
  return (
    <>
      <Container>
        {" "}
        <Typography variant="h3" sx={{ mt: "2rem" }}>
          This is the blog!
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          paddingTop: "2rem",

          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <Box flexGrow={2}>
          <BlogPost />
        </Box>
        <Box
          sx={{
            minWidth: 300,
          }}
        >
          <Box
            sx={{
              padding: "1rem",
              border: "2px solid",
              borderRadius: "10px",
              borderColor: "#43A047",
              height: "100%",
            }}
          >
            <Typography variant="h5" textAlign={"center"} gutterBottom>
              Past Entries
            </Typography>
            <List>
              {fakeEntries.map((entry) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={entry} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
