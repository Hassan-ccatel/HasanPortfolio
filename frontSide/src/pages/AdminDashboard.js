import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />

      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to your admin panel.</p>
      </div>
    </>
  );
};

export default AdminDashboard;