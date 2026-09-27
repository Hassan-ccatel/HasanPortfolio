import React, { useEffect, useState } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import ContactServices from "../services/ContactServices";
import { FaTrash } from "react-icons/fa";
import "./AdminMessage.css";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

 const status = searchParams.get("status");


  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      
      const response = await ContactServices.getMessages(token);
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


  const filterMessage = messages.filter((item)=>{
    if(status === "unread"){
      return item.isRead === false;
    }
    if(status === "read"){
      return item.isRead === true;
    }
    return true;
  });

  const handleDeleteMessage = async(id) => {
    if(!window.confirm("Are you sure you want to delete message")){
       return;
    }

    try{
      const token = localStorage.getItem("token");
      await ContactServices.deleteMessage(id, token);
      setMessages((prevMessage) => (
        prevMessage.filter((mesage) => mesage._id !== id)
      ))
      alert("Message delete successfully!");
    } catch(error){
      console.error("Error Delete Message", error);
    }
  }

  return (
   <>
  <AdminNavbar />

  <div className="admin-messages">
    <div className="admin-messages-container">
       <button className="bck-dashboard-btn"
        onClick={()=> navigate("/admin/dashboard")}>
        ←
       </button>
      <h1 className="admin-messages-title">
        {status === "unread" ? "Unread Message" : status === "read" ? "Read Message" : "Contact Message"}
        
      </h1>

      {filterMessage.length === 0 ? (
        <p className="no-messages">
          No messages found.
        </p>
      ) : (
        <div className="messages-list">

          {filterMessage.map((item) => (
            <div className="message-card" key={item._id} onClick={() => navigate(`/admin/messages/${item._id}`)}>

              <button className="delete-mesage-btn"
               onClick={(e) => {
                e.stopPropagation();
                handleDeleteMessage(item._id)}}>
                <FaTrash />
               </button>

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