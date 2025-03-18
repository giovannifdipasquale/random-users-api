// Import React and ReactDOM for rendering the app
import React from "react";
import ReactDOM from "react-dom/client";

// Import React Router components for routing
import { BrowserRouter, Routes, Route } from "react-router";

// Import main application and pages
import App from "./App";
import AboutPage from "./pages/AboutPage";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import HomePage from "./pages/HomePage";

// Import Bootstrap CSS and JS for styling and functionality
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import layout component
import Layout from "./layout/layout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
