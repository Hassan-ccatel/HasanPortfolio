import React,{useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import ContactServices from "../services/ContactServices";
import "./AdminMessagesDetails.css";

const AdminMessagesDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMessageDetails = async ()=> {
        try {
            const token = localStorage.getItem("token");
            const response = await ContactServices.getSingleMessage(id, token);
            if (response.data.success) {
              setMessage(response.data.data);
            }
            console.log("Message details fetched successfully:", response.data.data);
        } catch (error) {
            console.error("Error fetching message details:", error);
        } finally {
          setLoading(false);
        }
    }

    if(loading) {
      return <div>Loading...</div>;
    }

    if(!message) {
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

            <h1>{message.name}</h1>

            <p className="detail-email">
              {message.email}
            </p>

            <h3>{message.subject}</h3>

            <p className="detail-message">
              {message.message}
            </p>

            <small>
              {new Date(message.createdAt).toLocaleString()}
            </small>

          </div>

        </div>
      </div>
    </>
  )
}

export default AdminMessagesDetails;
