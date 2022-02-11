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

import Dashboard from "./screens/Auth/Admin/DashboardPage";

import Recents from "./screens/Auth/Admin/RecentsPage";
import Posts from "./screens/Auth/Admin/PostsPage";
import ContactList from "./screens/Auth/Admin/ContactListPage";
import Users from "./screens/Auth/Admin/UsersPage";
import ProfileAdmin from "./screens/Auth/Admin/ProfilePage";
import Notifications from "./screens/Auth/Admin/NotificationsPage";
import MyMail from "./screens/Auth/Admin/MyMailPage";
import Youtube from "./screens/Auth/Admin/YoutubePage";

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
        <Route exact path="/auth/signin" element={<Auth />} />
        <Route exact path="/auth/signup" element={<Auth signup />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/recents" element={<Recents />} />
        <Route exact path="/dashboard/posts" element={<Posts />} />
        <Route exact path="/dashboard/notifs" element={<Notifications />} />
        <Route exact path="/dashboard/contacts" element={<ContactList />} />
        <Route exact path="/dashboard/users" element={<Users />} />
        <Route exact path="/dashboard/profile" element={<ProfileAdmin />} />
        <Route exact path="/dashboard/gm" element={<MyMail />} />
        <Route exact path="/dashboard/yt" element={<Youtube />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
