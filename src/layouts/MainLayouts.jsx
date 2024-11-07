import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const MainLayouts = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayouts;
