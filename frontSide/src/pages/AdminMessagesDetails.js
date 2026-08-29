import React,{useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Contact from "../services/ContactServices";
import "./MessagesDetails.css";

const AdminMessagesDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [messages, setMessages] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMessageDetails = async ()=> {
        try {
            const token = localStorage.getItem("token");
            console.log("Token retrieved from localStorage:", token);
            const response = await Contact.getSingleMessages(id, token);
            console.log("Message details fetched successfully:", response.data);
            if (response.data.success) {
              setMessages(response.data.data);
            }
            
        } catch (error) {
            console.error("Error fetching message details:", error);
        } finally {
          setLoading(false);
        }
    }

    if(loading) {
      return <div>Loading...</div>;
    }

    if(!messages) {
      return <p>Message not found.</p>;
    }

    useEffect(()=>{
      fetchMessageDetails();
    }, [id])
  return (
    <>
      <AdminNavbar />

      <div className="admin-message-detail">
        <div className="admin-message-detail-container">

          <button
            className="back-btn"
            onClick={() => navigate("/admin/messages")}
          >
            ← Back to Messages
          </button>

          <div className="single-message-card">

            <h1>{messages.name}</h1>

            <p className="detail-email">
              {messages.email}
            </p>

            <h3>{messages.subject}</h3>

            <p className="detail-message">
              {messages.message}
            </p>

            <small>
              {new Date(messages.createdAt).toLocaleString()}
            </small>

          </div>

        </div>
      </div>
    </>
  )
}

export default AdminMessagesDetails;
