import axios from "../utils/axios";

export default function getWeatherByName(name) {
  return axios
    .get("weather", {
      params: {
        q: name
      }
    })
    .then(resp => {
      return resp;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}
