export const SET_CITY_DETAIL = "weather/SET_CITY_DETAIL";
export const REQUEST_CITY_DETAIL = "weather/REQUEST_CITY_DETAIL";
export const SET_REQUEST_TIME = "weather/SET_REQUEST_TIME"

const initialState = {
  cityDetail: null,
  city: null,
  loading: true,
  lastRequestTime: 0
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
    case SET_REQUEST_TIME: {
      return {...state, lastRequestTime: action.time}
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

export function setRequestTime(time) {
  return {type: SET_REQUEST_TIME, time}
}