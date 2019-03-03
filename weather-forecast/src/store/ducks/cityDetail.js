export const SET_CITY_DETAIL = "weather/SET_CITY_DETAIL";
export const REQUEST_CITY_DETAIL = "weather/REQUEST_CITY_DETAIL";

const initialState = {
  cityDetail: null,
  city: null
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_CITY_DETAIL: {
      return { ...state, loading: true };
    }
    case SET_CITY_DETAIL: {
      return {
        ...state,
        cityDetail: action.weatherList,
        city: action.city,
        loading: false
      };
    }
    default:
      return state ;
  }
}

export function requestCityDetail(cityId) {
  return { type: REQUEST_CITY_DETAIL, cityId };
}

export function setCityDetail(weatherList, city) {
  return { type: SET_CITY_DETAIL, weatherList, city };
}
