import {
  call,
  put,
  take
} from "redux-saga/effects";
import getWeatherByName from "../../services/getWeatherByName";
import { addFavCity, REQUEST_FAV_CITY, setModalStatus } from "../ducks/weather";
import {store} from "../index";

export function* weather() {
  while (true) {
    try {
      const { name } = yield take(REQUEST_FAV_CITY);
      const response = yield call(getWeatherByName, name);
      const currentCities = store.getState().weatherReducer.favCities;
    
      if (currentCities.length >= 5) {
        const newCity = response.data
        yield put(setModalStatus(true, newCity));
      } else {
        yield put(addFavCity(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}


