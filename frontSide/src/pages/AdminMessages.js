import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import ContactServices from "../services/ContactServices";
import "./AdminMessage.css";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token retrieved from localStorage:", token);
      const response = await ContactServices.getMessages(token);
        console.log("Messages fetched successfully:", response.data);
      if (response.data.success) {
        setMessages(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
   <>
  <AdminNavbar />

  <div className="admin-messages">
    <div className="admin-messages-container">

      <h1 className="admin-messages-title">
        Contact Messages
      </h1>

      {messages.length === 0 ? (
        <p className="no-messages">
          No messages found.
        </p>
      ) : (
        <div className="messages-list">

          {messages.map((item) => (
            <div className="message-card" key={item._id}>

              <h3>{item.name}</h3>

              <p className="message-email">
                {item.email}
              </p>

              <p className="message-subject">
                {item.subject}
              </p>

              <p className="message-text">
                {item.message}
              </p>

              <small className="message-date">
                {new Date(item.createdAt).toLocaleString()}
              </small>

            </div>
          ))}

        </div>
      )}

    </div>
  </div>
</>
  );
};

export default AdminMessages;