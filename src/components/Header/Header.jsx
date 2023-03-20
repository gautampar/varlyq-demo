import React, { useState } from "react";
import "../Header/header.css";
import logo from "../../imgs/logo.png";

function Header() {
const [toggleSideBar, setSidebarToggle] = useState(false)

function openSidebar() {
  setSidebarToggle(!toggleSideBar)
}
  return (
    <div>
      <header className="d-flex justify-content-between align-items-center">
      <div className="overlay" onClick={() => {openSidebar()}} style={toggleSideBar ? {right: 0} : {right: "100%"}}></div>
        <div className="logo">
          <img src={logo} alt="" className="img-fluid" />
        </div>
        <div className="list" style={toggleSideBar ? {right: 0} : {right: "-200px"}}>
          <ul>
            <li>
              <a href="javascript:void(0)">Home</a>
            </li>
            <li>
              <a href="javascript:void(0)">About</a>
            </li>
            <li>
              <a href="javascript:void(0)">Services</a>
            </li>
            <li>
              <a href="javascript:void(0)">Portfolio</a>
            </li>
            <li>
              <a href="javascript:void(0)">Blog</a>
            </li>
            <li>
              <a href="javascript:void(0)">Contact</a>
            </li>
          </ul>
        </div>
        <button onClick={() => openSidebar()} className="bras-btn">
        <i className="fa fa-regular fa-bars"></i>
        </button>
      </header>
    </div>
  );
}

export default Header;
