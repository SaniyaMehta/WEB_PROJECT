//sidenavbar.jsx
import React from "react";
import "./sidenavbar.css";
import { useDarkMode } from "./DarkModeContext";
const SideNavbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`container-fluid ${darkMode ? "dark-mode-content" : ""}`}
    style={{
      backgroundColor: darkMode ? 'black' : '#ccc', 
    }}>
    <div className="container-fluid">
   
    <div className={`row ${darkMode ? "dark-mode-content" : ""}`}
      style={{
        backgroundColor: darkMode ? 'black' : '#ccc', 
      }}>
        <div className="col-auto side-navbar">
          <ul>
            <li>
              <a className="nav-link" href="/home">
                <i className="bi-envelope" />
               

<span className={`ms-1 d-none d-sm-inline ${darkMode ? 'text-white' : ''}`}>Inbox</span>

              </a>
            </li>
            <li>
              <a className="nav-link" href="/dashboard">
                <i className="bi-bar-chart" />
                <span className={`ms-1 d-none d-sm-inline ${darkMode ? 'text-white' : ''}`}>Dashboard</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="/calendar">
                <i className="bi-calendar-check" />
                <span className={`ms-1 d-none d-sm-inline ${darkMode ? 'text-white' : ''}`}>Upcoming</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="/settings">
                <i className="bi-ui-checks-grid" />
                <span className={`ms-1 d-none d-sm-inline ${darkMode ? 'text-white' : ''}`}>Filters</span>
               
              </a>
            </li>
            <li>
              <a className="nav-link" href="/">
                <i className="bi-box-arrow-right" />
                <span className={`ms-1 d-none d-sm-inline ${darkMode ? 'text-white' : ''}`}>Logout</span>
               
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SideNavbar;