import React from "react";
import { Typography } from "@mui/material";

function About() {
  return (
    <div>
      <Typography variant="h4">About Page</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is a simple React starter project using Router, Axios, and Material UI.
      </Typography>
    </div>
  );
}

export default About;
