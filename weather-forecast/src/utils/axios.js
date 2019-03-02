import axios from "axios";
const API_KEY = "de88b673d305815f66a275b2a890bbe2";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 10000
});
//axios.defaults.headers.common = { 'appid': API_KEY };

export default instance;
