import axios from "../utils/axios";

export default function getWeatherByName(name) {
  return axios
    .get("weather", {
      params: {
        q: name
      }
    })
    .then(resp => {
      console.log('servis iciii', resp)
      return resp;
    })
    .catch(err => {
      console.log(err);
      return err;
    });

  
}