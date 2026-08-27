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
          <div className="admin-dashboard-cards">

            <div className="admin-card">
              <h3>Total Messages</h3>
              <span>25</span>
            </div>

            <div className="admin-card">
              <h3>Unread Messages</h3>
              <span>10</span>
            </div>

            <div className="admin-card">
              <h3>Total Contacts</h3>
              <span>15</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;