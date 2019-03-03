import axios from "../utils/axios";

export default function getCityDetail(cityId) {
  return axios
    .get("forecast", {
      params: {
        id: cityId
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
