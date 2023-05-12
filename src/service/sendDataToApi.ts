import axios from "axios";
import { toast } from "react-toastify";
import i18n from "../i18n";

import IForm from "../models/Form.interface";

const sendDataToApi = async (formData: IForm) => {
  try {
    const response = await axios.post("/dishes", formData);
    const data = response.data;
    toast.success(i18n.t('form.toast.success') as String);
    console.log(data);
  } catch (error) {
    toast.error(i18n.t('form.toast.error') as String);
    console.log(error);
  }
};

export default sendDataToApi;
