import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">

        <Link className="admin-nav-link" to="/admin/dashboard">
          Dashboard
        </Link>

        <Link className="admin-nav-link" to="/admin/messages">
          Messages
        </Link>
        <div className="admin-nav-dropdown">
          <span className="admin-nav-link">Project</span>
          <div className="admin-submenu">
            <Link className="admin-submenu-link" to="/admin/projects">
              All Projects
            </Link>
            <Link className="admin-submenu-link" to="/admin/add-project">
              Add Project
            </Link>
          </div>
        </div>

        <button className="admin-logout-btn" onClick={logout}>
          Logout
        </button>

      </div>
    </nav>
  );
};

export default AdminNavbar;