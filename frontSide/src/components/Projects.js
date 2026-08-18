import { FaArrowRight, FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";

const projects = [
  { title: "Ultras Website", image: "/images/Ultras.png",tech: ["WordPress"]},
  { title: "KarliHealth Website", image: "/images/karlihealth.jpg", tech: ["WordPress"] },
  { title: "MegaMart", image: "/images/megamart.png", tech: ["HTML,CSS,JAVA"] },
  { title: "Furniro", image: "/images/furniro.png", tech: ["React.js"] }
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-heading">
          <div>
            <span>MY WORK</span>
            <h2>Featured <strong>Projects</strong></h2>
          </div>
          <a href="#projects" className="view-projects">
            View All Projects <FaArrowRight />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href="#contact" aria-label={`Open ${project.title}`}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a href="#contact" className="project-arrow" aria-label="Contact">
                  <FaPaperPlane />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}