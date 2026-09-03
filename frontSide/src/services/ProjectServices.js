import axios from "axios";

class Project {
    createProject (formData, token){
        const url = `${process.env.REACT_APP_API_URL}/api/admin/add-project`;
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