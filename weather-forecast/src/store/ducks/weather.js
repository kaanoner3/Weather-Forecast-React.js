export const ADD_FAV_CITY = "weather/SET_FAV_CITY";
export const REQUEST_FAV_CITY = "weather/REQEUST_FAV_CITY";
export const MODAL_ACTION = "weather/MODAL_ACTION";
export const CHANGE_FAV_CITY = "weather/CHANGE_FAV_CITY";

const initialState = {
  favCities: [],
  loading: false,
  showModal: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FAV_CITY:
      const _fav_cities = [...state.favCities];
      var isExist = _fav_cities.findIndex(city => action.data.id === city.id);
      if (isExist === -1) {
        _fav_cities.push(action.data);
      }

      return { ...state, favCities: _fav_cities, loading: false };

    case REQUEST_FAV_CITY:
      return { ...state, loading: true };

    case MODAL_ACTION:
      return { ...state, showModal: action.data, newCity: action.newCity };

    case CHANGE_FAV_CITY:
      return { ...state };
    default:
      return { ...state };
  }
}

export function addFavCity(data) {
  return { type: ADD_FAV_CITY, data };
}

export function requestFavCityByName(name) {
  return { type: REQUEST_FAV_CITY, name };
}

export function setModalStatus(data, newCity) {
  return { type: MODAL_ACTION, data, newCity };
}

export function changeFavCity(oldCityId) {
  return { type: CHANGE_FAV_CITY, oldCityId };
}
