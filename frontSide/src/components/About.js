import {
  FaRocket, FaUsers, FaClock, FaCheckCircle
} from "react-icons/fa";

const stats = [
  [FaRocket, "20+", "Projects Completed", "blue"],
  [FaUsers, "15+", "Happy Clients", "purple"],
  [FaClock, "2+", "Years Experience", "blue"],
  [FaCheckCircle, "100%", "Client Satisfaction", "purple"]
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-box">
          <div className="about-image">
            <img src="/images/portfolio.avif" alt="Coding workspace" />
          </div>

          <div className="about-content">
            <span className="section-small-title">ABOUT ME</span>
            <h2>Who <span>I Am</span></h2>
            <p>
              I'm a passionate web developer with experience in building
              responsive, fast and modern websites. I love turning ideas
              into real digital products.
            </p>
            <p>
              I work with WordPress for powerful CMS solutions and React.js
              to build interactive web applications.
            </p>
            <div className="signature">Hassan</div>
          </div>

          <div className="stats">
            {stats.map(([Icon, number, label, color]) => (
              <div className="stat-card" key={label}>
                <div className={`stat-icon ${color}`}><Icon /></div>
                <div>
                  <h3>{number}</h3>
                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}