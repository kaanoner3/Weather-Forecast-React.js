import axios from "../utils/axios";

async function getCityDetail(cityId) {
  return axios.get("forecast", {
    params: {
      id: cityId
    }
  });
}

export default getCityDetail;
