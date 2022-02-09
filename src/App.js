import React from "react";
import { CssBaseline } from "@mui/material";

//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./screens/HomePage";
import About from "./screens/AboutPage";
import Blog from "./screens/BlogPage";
import Portfolio from "./screens/PortfolioPage";
import Contact from "./screens/ContactPage";
import Error from "./screens/ErrorPage";

import Auth from "./screens/Auth/Auth";

import Profile from "./screens/Auth/User/Profile";

import Dashboard from "./screens/Auth/Admin/Dashboard";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
