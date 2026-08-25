import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/messages`
      );

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

      <div>
        <h1>Contact Messages</h1>

        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((item) => (
            <div key={item._id}>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{item.subject}</p>
              <p>{item.message}</p>

              <small>
                {new Date(item.createdAt).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdminMessages;