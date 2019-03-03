import axios from "../utils/axios";

async function getWeatherByName(name) {
  return axios.get("weather", {
    params: {
      q: name
    }
  });
}
export default getWeatherByName;
