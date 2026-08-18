import axios from "axios";

class Contact {
  create(formData) {
    const url = "http://localhost:8000/api/submit";

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    return axios.post(url, formData, config);
  }
}

export default new Contact();