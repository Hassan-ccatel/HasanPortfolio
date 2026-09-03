import axios from "axios";

class Project {
    createProject (formData, token){
        const url = `${process.env.Project_API_URL}/api/create-project`;
        const config = {
            headers: {
                "content-Type" : "multipart/form-data",
                Authorization: `Bearer ${token}`,
            }
        }
        return axios.post(url, formData, config);
    }
}

export default new Project();