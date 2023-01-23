import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const RootPage = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootPage;
