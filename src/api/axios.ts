import axios from "axios";

const getauthentication_tokenFromCookieStorage = () => {
  const cookies = document.cookie.split(";");
  const cookieMap: Record<string, string> = {};
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    cookieMap[name] = value;
  });
  return cookieMap;
};

export const access_token =
  getauthentication_tokenFromCookieStorage()["chatvia"];

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: access_token,
  },
});

export default instance;
