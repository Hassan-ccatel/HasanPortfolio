import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaPaperPlane, FaTrash } from 'react-icons/fa';
import ProjectsServices from '../../services/ProjectServices';
import './ViewAllProjects.css';

const ViewAllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const isAdmin = localStorage.getItem("isAdmin") === "true";

    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await ProjectsServices.getProjects(token);
            setProjects(response.data.data);
        }
        catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    const handleDeleteProject = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await ProjectsServices.deleteProject(id, token);
            setProjects(projects.filter(project => project._id !== id));
            alert("Project deleted successfully");
        } catch (error) {
            console.error("Error deleting project:", error);
            alert("Failed to delete project. Please try again.");
        }
    }

    return (
        <>
            <section id="projects" className="projects section">
                <div className="container">
                    <div className="projects-heading">
                        <div>
                            <span>MY WORK</span>
                            <h2>Featured <strong>Projects</strong></h2>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <article className="project-card" key={project._id}>
                                {isAdmin && (
                                    <button className="delete-project-btn"
                                        onClick={() => { handleDeleteProject(project._id) }}
                                        aria-label={`Delete ${project.title}`}>
                                        <FaTrash />
                                    </button>
                                )}
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <a href={project.liveUrl}
                                            target='blank'
                                            rel="noopener noreferrer"
                                            aria-label={`Open ${project.title}`}>
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <div className="project-tech">
                                        {project.technologies?.map((item) => <span key={item}>{item}</span>)}
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
        </>
    )
}

export default ViewAllProjects;
