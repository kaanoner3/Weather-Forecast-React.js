export const ADD_FAV_CITY = "weather/SET_FAV_CITY";
export const REQUEST_FAV_CITY = "weather/REQEUST_FAV_CITY";

const initialState = {
  favCities: [],
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FAV_CITY:
      const _fav_cities = [...state.favCities];
      var isExist = _fav_cities.findIndex(city => action.data.id === city.id);
      if(isExist === -1) {
        _fav_cities.push(action.data);
      }
  
      return { ...state, favCities: _fav_cities, loading: false };

    case REQUEST_FAV_CITY:
      return { ...state, loading: true };
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
