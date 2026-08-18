import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">Hassan<span>.</span></a>

        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-btn">
          Hire Me <FaArrowRight />
        </a>
      </div>
    </header>
  );
}