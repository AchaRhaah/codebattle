import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/input/Navbar";
import Footer from "../pages/Home/Footer";
export default function RootLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
