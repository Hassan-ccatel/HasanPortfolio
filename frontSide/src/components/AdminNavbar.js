import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    setMenuOpen(false);
    navigate("/admin/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">

        {/* Hamburger */}
        <button
          type="button"
          className="admin-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu */}
        <div className={`admin-nav-menu ${menuOpen ? "active" : ""}`}>

          <Link
            className="admin-nav-link"
            to="/admin/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            className="admin-nav-link"
            to="/admin/messages"
            onClick={() => setMenuOpen(false)}
          >
            Messages
          </Link>

          <div className="admin-nav-dropdown">
            <div className="admin-nav-link">
              Project
            </div>

            <div className="admin-submenu">
              <Link to="/admin/projects">
                All Projects
              </Link>

              <Link to="/admin/add-project">
                Add Project
              </Link>
            </div>
          </div>

          <div className="admin-nav-dropdown">
            <div className="admin-nav-link">
              Skills
            </div>

            <div className="admin-submenu">
              <Link to="/admin/add-skills">
                Add Skills
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="admin-logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;