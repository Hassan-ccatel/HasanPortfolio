import axios from "axios";

class Contact {
  create(formData) {
    const url = `${process.env.REACT_APP_API_URL}/api/submit`;

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    return axios.post(url, formData, config);
  }

  adminLogin(data) {
    const url = `${process.env.REACT_APP_API_URL}/api/admin/login`;
    return axios.post(url, data);
  }

  adminMessages(token) {
    const url = `${process.env.REACT_APP_API_URL}/api/admin/messages`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(url, config);
  }
}

export default new Contact();