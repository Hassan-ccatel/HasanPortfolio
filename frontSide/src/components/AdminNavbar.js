import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
    setMenuOpen(false);
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        <div className="admin-navbar-nav">
          <div className="logo-img">
            <a href="/" className="logo">
              <img src="/images/portfolio-logo.png" alt="Hassan Web Solution" />
            </a>
          </div>


          <button className="admin-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`admin-nav-menu ${menuOpen ? "active" : ""}`}>

            <Link className="admin-nav-link" to="/admin/dashboard">
              Dashboard
            </Link>

            <Link className="admin-nav-link" to="/admin/messages">
              Messages
            </Link>
            <div className="admin-nav-dropdown">
              <div className="admin-nav-link">Project</div>
              <div className="admin-submenu">
                <Link className="admin-submenu-link" to="/admin/projects">
                  All Projects
                </Link>
                <Link className="admin-submenu-link" to="/admin/add-project">
                  Add Project
                </Link>
              </div>
            </div>
            <div className="admin-nav-dropdown">
              <div className="admin-nav-link">Skills</div>
              <div className="admin-submenu">
                <Link className="admin-submenu-link" to="/admin/add-skills">
                  Add Skills
                </Link>
              </div>
            </div>

            <button className="admin-logout-btn" onClick={logout}>
              Logout
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;