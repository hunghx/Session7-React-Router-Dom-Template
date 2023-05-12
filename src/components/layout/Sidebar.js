import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            {/* User Profile*/}
            <li className="sidebar-item pt-2">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/"
                aria-expanded="false"
              >
                <i className="far fa-clock" aria-hidden="true" />
                <span className="hide-menu">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/profile"
                aria-expanded="false"
              >
                <i className="fa fa-user" aria-hidden="true" />
                <span className="hide-menu">Profile</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/table"
                aria-expanded="false"
              >
                <i className="fa fa-table" aria-hidden="true" />
                <span className="hide-menu">Basic Table</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/icon"
                aria-expanded="false"
              >
                <i className="fa fa-font" aria-hidden="true" />
                <span className="hide-menu">Icon</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/map"
                aria-expanded="false"
              >
                <i className="fa fa-globe" aria-hidden="true" />
                <span className="hide-menu">Google Map</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/blank"
                aria-expanded="false"
              >
                <i className="fa fa-columns" aria-hidden="true" />
                <span className="hide-menu">Blank Page</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
}
