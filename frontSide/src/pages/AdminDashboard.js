import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-content">
          <h1>Admin Dashboard</h1>
          <p>Welcome to your admin panel.</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;