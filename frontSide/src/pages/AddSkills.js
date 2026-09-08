import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import SkillServices from "../services/SkillServices";

const AddSkills = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        percentage: ""
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
        
    }

    const handleFileChange =(e) =>{
        setImage(e.target.files[0]);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("title", formData.title);
            data.append("description", formData.description);
            data.append("percentage", formData.percentage);
            if (image){
                data.append("image", formData.image);
            }
            const token = localStorage.getItem("token");
            const response = await SkillServices.createSkill(data, token);
            console.log("response :", response);
            setFormData({
                title: "",
                description: "",
                percentage: ""
            })
            setImage(null);

        } catch (error){
            console.error("Error creating skills", error);
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className="create-skill-page">
                <h1>Add Skill</h1>
                <form onSubmit={handleSubmit}>
                    {/* Skill Name */}
                    <div className="form-group">
                        <label>Skill Name</label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. React.js" required
                        />
                    </div>
                    {/* Description */}
                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Write skill description..."
                            rows="5" required ></textarea>
                    </div>
                    {/* Percentage */}
                    <div className="form-group">
                        <label>Skill Percentage</label>
                        <div className="percentage-input">
                            <input type="number" name="percentage"
                                value={formData.percentage}
                                onChange={handleChange}
                                placeholder="e.g. 90"
                                min="0"
                                max="100" required
                            /> <span>%</span>
                        </div>
                    </div>
                    {/* Logo */}
                    <div className="form-group">
                        <label>Skill Logo</label>
                        <input type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            required />
                    </div>
                    <button type="submit"> Add Skill </button>
                </form>
            </div>
        </>
    )
}

export default AddSkills;
