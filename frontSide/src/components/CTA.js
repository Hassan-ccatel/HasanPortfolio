import { FaArrowRight, FaPaperPlane } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="container">
      <div className="cta">
        <div className="cta-icon"><FaPaperPlane /></div>
        <div className="cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's work together and build something amazing.</p>
        </div>
        <a href="#contact" className="cta-btn">
          Hire Me Now <FaArrowRight />
        </a>
      </div>
    </section>
  );
}