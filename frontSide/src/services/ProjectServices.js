import axios from "axios";

class Project {
    createProject (formData, token){
        const url = `${process.env.REACT_APP_API_URL}/api/add-project`;
        const config = {
            headers: {
                "content-Type" : "multipart/form-data",
                Authorization: `Bearer ${token}`,
            }
        }
        return axios.post(url, formData, config);
    }

    getProjects(token) {
        const url = `${process.env.REACT_APP_API_URL}/api/get-projects`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`, 
            }
        }
        return axios.get(url, config);
    }
}

export default new Project();