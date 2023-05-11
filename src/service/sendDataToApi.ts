import axios from "axios";
import { toast } from "react-toastify";

const sendDataToApi = async (formData) => {
  try {
    const response = await axios.post("/dishes", formData);
    const data = response.data;
    if (response.status === 200) {
      toast.success("Success");
    } else {
      toast.error("Error");
    }
    console.log(data);
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export default sendDataToApi;
