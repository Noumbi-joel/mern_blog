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

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
