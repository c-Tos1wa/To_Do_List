import axios from "axios";
import { getToken } from "./[...nextAuth]";

const api = axios.create({
  beaseURL: "https://projetotask1.azurewebsites.net/api/Auth/Register"
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;

})

export default api;