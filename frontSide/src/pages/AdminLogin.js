import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactServices from "../services/ContactServices";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await ContactServices.adminLogin({email, password});

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("adminLoggedIn", "true");
      console.log("Admin logged in successfully");

      navigate("/admin/dashboard");
    }
  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Invalid email or password");
  }
};

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;