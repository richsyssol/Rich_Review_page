import React from "react";
import Navbar from "../componants/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../componants/Footer/Footer";

function Layout() {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
