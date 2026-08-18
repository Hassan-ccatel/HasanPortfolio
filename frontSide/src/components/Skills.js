import {
  SiWordpress,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    percentage: 95,
    color: "#e34f26",
    text: "Clean, semantic and well-structured HTML.",
  },
  {
    name: "CSS",
    icon: SiCss,
    percentage: 90,
    color: "#1572b6",
    text: "Modern responsive layouts and animations.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    percentage: 85,
    color: "#f7df1e",
    text: "Interactive functionality and modern web behavior.",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    percentage: 90,
    color: "#7952b3",
    text: "Fast responsive layouts using Bootstrap components.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    percentage: 80,
    color: "#38bdf8",
    text: "Modern utility-first responsive interfaces.",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    percentage: 90,
    color: "#21759b",
    text: "Custom themes, plugins, ACF, Elementor & more.",
  },
  {
    name: "React.js",
    icon: SiReact,
    percentage: 85,
    color: "#61dafb",
    text: "Dynamic and interactive user interfaces with React.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    percentage: 75,
    color: "#ffffff",
    text: "Building REST APIs and backend applications.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    percentage: 75,
    color: "#68a063",
    text: "Backend development using Node.js.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    percentage: 85,
    color: "#47a248",
    text: "NoSQL database development with MongoDB.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">

        <div className="section-heading">
          <span>MY SKILLS</span>

          <h2>
            My Technical <strong>Skills</strong>
          </h2>

          <div className="heading-line"></div>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div className="skill-card" key={skill.name}>

                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  <Icon />
                </div>

                <h3>{skill.name}</h3>

                <p>{skill.text}</p>

                <div className="skill-progress">

                  <div className="progress-track">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    ></div>
                  </div>

                  <span>{skill.percentage}%</span>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}