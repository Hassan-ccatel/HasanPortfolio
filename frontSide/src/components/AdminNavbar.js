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

        <button className="admin-logout-btn" onClick={logout}>
          Logout
        </button>

      </div>
    </nav>
  );
};

export default AdminNavbar;