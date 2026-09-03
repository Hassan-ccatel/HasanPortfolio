import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import ProjectServices from '../../services/ProjectServices';

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '', 
        technologies: '',
        githubUrl: '',
        liveUrl: '',
        category: 'Web Development',
    });
    const [image, setImage] = useState(null); 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('technologies', formData.technologies);
            data.append('githubUrl', formData.githubUrl);
            data.append('liveUrl', formData.liveUrl);
            data.append('category', formData.category);
            if(image) {
                data.append("images", image);
            }

            const token = localStorage.getItem("token");

            const response = await ProjectServices.createProject(data, token);
            console.log("Project created successfully:", response.data);
            alert("Project created successfully!");
            setFormData({
                title: '',
                description: '',
                technologies: '',
                githubUrl: '',
                liveUrl: '',
                category: 'Web Development',
            });
            setImage(null);

        } catch (error) {
            console.error("Error creating project:", error);
        }

        
    }
    
    return (
        <>
            <AdminNavbar />
            <div className="create-project-page">
                <h1>Create Project</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Project Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter project title"
                            required
                        />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter project description"
                            required
                        />
                    </div>

                    <div>
                        <label>Technologies</label>
                        <input
                            type="text"
                            name="technologies"
                            value={formData.technologies}
                            onChange={handleChange}
                            placeholder="React, Node.js, MongoDB"
                        />
                    </div>

                    <div>
                        <label>GitHub URL</label>
                        <input
                            type="url"
                            name="githubUrl"
                            value={formData.githubUrl}
                            onChange={handleChange}
                            placeholder="https://github.com/..."
                        />
                    </div>

                    <div>
                        <label>Live URL</label>
                        <input
                            type="url"
                            name="liveUrl"
                            value={formData.liveUrl}
                            onChange={handleChange}
                            placeholder="https://..."
                        />
                    </div>

                    <div>
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="Web Development">Web Development</option>
                            <option value="WordPress">WordPress</option>
                            <option value="React">React</option>
                            <option value="Full Stack">Full Stack</option>
                        </select>
                    </div>

                    <div>
                        <label>Project Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </div>

                    <button type="submit">
                        Create Project
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddProject;
