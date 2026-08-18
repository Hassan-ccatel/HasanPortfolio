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
}

export default new Contact();