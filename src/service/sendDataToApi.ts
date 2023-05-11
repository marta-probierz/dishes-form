import axios from "../axios/instanceAxios";

const sendDataToApi = async (formData) => {
    alert(JSON.stringify(formData, null, 2));
    try {
      const response = await axios.post("/dishes", formData);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  export default sendDataToApi;