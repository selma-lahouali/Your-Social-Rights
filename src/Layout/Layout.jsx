import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function Layout() {
  return (
    <div id="layout">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
}
