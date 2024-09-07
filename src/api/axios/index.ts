import axios from "axios";
import { access_token } from "../cookie/index";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  },
});

export default instance;
