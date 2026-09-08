import axios from 'axios';

class Skill {
    createSkill (formData, token) {
        const url = `${process.env.REACT_APP_API_URL}/api/add-skill`;
        const config = {
            headers:{
                "content-Type" : "multipart/form-data",
                Authorization : `Bearer ${token}`,
            }
        }
        return axios.post(url, formData, config);
    }
}


export default new Skill();