export const ADD_FAV_CITY = "weather/SET_FAV_CITY";
export const REQUEST_FAV_CITY = "weather/REQEUST_FAV_CITY";
export const MODAL_ACTION = "weather/MODAL_ACTION";
export const CHANGE_FAV_CITY = "weather/CHANGE_FAV_CITY";
export const DELETE_FAV_CITY = "weather/DELETE_FAV_CITY";

const initialState = {
  favCities: [],
  loading: false,
  showModal: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FAV_CITY: {
      const _favCities = [...state.favCities];
      var isExist = _favCities.findIndex(city => action.data.id === city.id);
      if (isExist === -1) {
        _favCities.push(action.data);
      }

      return { ...state, favCities: _favCities, loading: false };
    }
    case REQUEST_FAV_CITY: {
      return { ...state, loading: true };
    }
    case MODAL_ACTION: {
      return { ...state, showModal: action.data, newCity: action.newCity };
    }
    case CHANGE_FAV_CITY: {
      const _favCities = [...state.favCities];

      var index = _favCities.findIndex(city => action.oldCityId === city.id);
      if (index !== -1) {
        _favCities[index] = state.newCity;
      }
      return {
        ...state,
        favCities: _favCities,
        showModal: false,
        loading: false
      };
    }
    case DELETE_FAV_CITY: {
      const _favCities = [...state.favCities];

      var index = _favCities.findIndex(city => action.cityId === city.id);
      if (index !== -1) {
        _favCities.splice(index, 1);
      }
      return { ...state, favCities: _favCities };
    }

    default:
      return state;
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

export function deleteFavCity(cityId) {
  return { type: DELETE_FAV_CITY, cityId };
}
