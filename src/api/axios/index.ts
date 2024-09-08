import axios from "axios";
import { access_token } from "../cookie/index";


const token = () => {
  if (access_token !== undefined) {
    return JSON.parse(access_token).token;
  }
  return null;
};

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token()}`,
  },
});

export default instance;
