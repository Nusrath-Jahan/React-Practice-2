import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {AppBar, Toolbar, Button, Container } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar>
      </AppBar>

{/* Page Content */}
<Container sx={{ mt: 4 }}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />}/>
  </Routes>
  </Container>

    </div>
  );
}

export default App;
