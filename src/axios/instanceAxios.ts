import axios from "axios";

const instance = axios.create({
  baseURL: "https://umzzcc503l.execute-api.us-west-2.amazonaws.com",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST",
  },
});

export default instance;