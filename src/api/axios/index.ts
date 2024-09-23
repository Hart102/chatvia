import axios from "axios";
import { access_token } from "../cookie/index";
export const apiURL = "https://chatvia-api.onrender.com/";
// export const apiURL = "http://localhost:5000";
const baseURL = `${apiURL}api`;
// const baseURL = "http://localhost:5000/api";

const token = () => {
  if (access_token !== undefined) {
    return JSON.parse(access_token).token;
  }
  return null;
};

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token()}`,
  },
});

export default instance;
