import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Contact from "../services/ContactServices";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [state, setState] = useState({
    totalMessages: 0,
    unreadMessages: 0,
    readeMessages: 0,
  });
  const fetchDashboardState = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await Contact.getDashboardState(token);
      if (response.data.success) {
        setState({
          totalMessage: response.data.data.totalMessages,
          unreadMessages: response.data.data.unreadMessages,
          readeMessages: response.data.data.readeMessages,
        });
      }
      console.log("Dashboard state fetch successfully", response.data.data);
    } catch (error) {
      console.log("Error fetching dashboard state:", error);
    }
  }
 useEffect(()=>{
  fetchDashboardState();
 }, []);
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
              <span>{state.totalMessages}</span>
            </div>

            <div className="admin-card">
              <h3>Unread Messages</h3>
              <span>{state.unreadMessages}</span>
            </div>

            <div className="admin-card">
              <h3>Total Contacts</h3>
              <span>{state.readeMessages}</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;