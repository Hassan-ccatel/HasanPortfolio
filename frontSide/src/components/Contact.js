import {
  FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane
} from "react-icons/fa";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";
import ContactServices from "../services/ContactServices";

export default function Contact() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const turnstileRef = useRef("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the security verification");
      return;
    }

    const data = {
      ...formData,
      turnstileToken: turnstileToken,
    };

    try {
      const response = await ContactServices.create(data);
      console.log("Server Response:", response.data);
      setMessage("Message sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset Turnlist
      setTurnstileToken("");

      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
     setTimeout(() => {
      setMessage("");
     }, 3000);
    } catch (error) {
      
      console.log(error);
    }

  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's <span>Connect</span></h2>
            <p>Let's build something great together. Feel free to reach out to me.</p>

            <div className="contact-social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              {/* <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a> */}
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
              <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
            </div>
            <input required type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            <textarea required rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />
            <div className="turnstile-wrapper">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
                // siteKey="0x4AAAAAAEM7GGVClgUQjgll"
                onSuccess={(token) => {
                  // console.log("Turnstile Token:", token);
                  setTurnstileToken(token);
                }}
                onError={() => {
                  console.log("Turnstile Error");
                  setTurnstileToken("");
                }}
                onExpire={() => {
                  console.log("Turnstile Token Expired");
                  setTurnstileToken("");
                }}
              />
            </div>

            <button type="submit">Send Message <FaPaperPlane /></button>

            {message && (
              <p className="success-message">{message}</p>
            )}
          </form>

          <div className="contact-details">
            <div className="contact-detail">
              <div><FaEnvelope /></div>
              <span>Email<strong>hassan.ccatel@gmail.com</strong></span>
            </div>
            <div className="contact-detail">
              <div><FaPhoneAlt /></div>
              <span>Phone<strong>+92 305 3102343</strong></span>
            </div>
            <div className="contact-detail">
              <div><FaMapMarkerAlt /></div>
              <span>Location<strong>Multan, Pakistan</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}