import "./style/navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand h1">User's To Do List </span>
      <img
        class="rounded-circle"
        width="50"
        alt="50x50"
        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
        data-holder-rendered="true"
      />
    </nav>
  );
}

export default Navbar;
