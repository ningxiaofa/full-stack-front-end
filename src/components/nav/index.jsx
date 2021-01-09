import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'

export default function Nav() {
  return (
    <nav className="container nav-container">
      <ul className="nav nav-tabs">
        <li role="presentation">
          <NavLink exact strict to="/">
            Home
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink exact strict to="/about">
            About
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink exact strict to="/login">
            Login
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink exact strict to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
