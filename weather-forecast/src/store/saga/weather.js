import { call, put, take } from "redux-saga/effects";
import { addFavCity, REQUEST_FAV_CITY, setModalStatus } from "../ducks/weather";
import {
  setCityDetail,
  REQUEST_CITY_DETAIL,
  setRequestTime
} from "../ducks/cityDetail";
import { store } from "../index";
import { getCityDetail, getWeatherByName } from "../../services/index";

export function* weather() {
  while (true) {
    try {
      console.log(getWeatherByName)
      const { name } = yield take(REQUEST_FAV_CITY);
      const response = yield call(getWeatherByName, name);
      const currentCities = store.getState().weatherReducer.favCities;

      if (currentCities.length >= 5) {
        const newCity = response.data;
        yield put(setModalStatus(true, newCity));
      } else {
        yield put(addFavCity(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export function* cityDetail() {
  while (true) {
    try {
      const { cityId } = yield take(REQUEST_CITY_DETAIL);
      const lastRequestTime = store.getState().cityDetail.lastRequestTime;
      if ( //for unneccesary requests
        lastRequestTime + 3600 * 1000 > Date.now() &&
        store.getState().cityDetail.cityDetail !== null
      ) {
        yield put(
          setCityDetail(
            store.getState().cityDetail.cityDetail,
            store.getState().cityDetail.city
          )
        );
      } else {
        yield put(setRequestTime(Date.now()));
        const response = yield call(getCityDetail, cityId);
        var splittedArray = splitToDay(response.data.list, 8);
        yield put(setCityDetail(splittedArray, response.data.city));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function splitToDay(array, size) {
  var results = [];
  var sliceIndex = 0;

  array.reduce((pv, cv, index, arr) => {
    if (cv.dt_txt.substring(0, 10) !== pv && index !== 1) {
      results.push(arr.slice(sliceIndex, index));
      sliceIndex = index;
      if (index > 32) {
        results.push(arr.slice(sliceIndex, 40));
      }
    }
    return cv.dt_txt.substring(0, 10);
  });

  return results;
}
