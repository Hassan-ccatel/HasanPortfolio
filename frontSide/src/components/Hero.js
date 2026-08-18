import {
  FaArrowRight, FaDownload, FaLinkedinIn, FaGithub, FaCode, FaEnvelope
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="container hero-container">
        <div className="hero-content">
          <span className="small-title">HI, I'M</span>
          <h1>Hassan<br /><span>Web Developer</span></h1>

          <p>
            I create modern, responsive and user-friendly websites
            that help businesses grow and stand out.
          </p>

          <div className="hero-buttons">
            <a href="/Hassan.pdf" className="btn primary-btn" download="Hassan-Web-Developer-CV.pdf">
              Download CV <FaDownload />
            </a>
            <a href="#contact" className="btn outline-btn">
              Let's Talk <FaArrowRight />
            </a>
          </div>

          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            {/* <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a> */}
            <a href="#projects"><FaCode /></a>
            <a href="mailto:your@email.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-shape" />
          <img src="/images/portfolio-has.png" alt="Hassan" />
          <div className="floating-dot dot-one" />
          <div className="floating-dot dot-two" />
          <div className="floating-dot dot-three" />
        </div>
      </div>
    </section>
  );
}