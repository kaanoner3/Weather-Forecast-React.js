import axios from "axios";
const API_KEY = "de88b673d305815f66a275b2a890bbe2";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 10000
});

instance.interceptors.request.use((config) => {
  config.params.appid = API_KEY
  return config
})

export default instance;
