import { call, put, take } from "redux-saga/effects";
import getWeatherByName from "../../services/getWeatherByName";
import {
  addFavCity,
  REQUEST_FAV_CITY,
  setModalStatus,
} from "../ducks/weather";
import {setCityDetail, REQUEST_CITY_DETAIL} from "../ducks/cityDetail"
import configureStore from "../index";
import getCityDetail from "../../services/getCityDetail";

export function* weather() {
  while (true) {
    try {
      const { name } = yield take(REQUEST_FAV_CITY);
      const response = yield call(getWeatherByName, name);
      const currentCities = configureStore().store.getState().weatherReducer.favCities;

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
      
      const response = yield call(getCityDetail, cityId)
      console.log(response)
      var splittedArray = splitToDay(response.data.list, 8)
      //console.log("yokokokokokokoko", splittedArray)
      yield put(setCityDetail(splittedArray, response.data.city))
    } catch (error) {
      console.log(error);
    }
  }
}

function splitToDay(array, size) {
  var results = []
  var sliceIndex = 0
  //console.log('neymis bakalım', array)

  array.reduce((pv,cv,index, arr) => {
    //console.log('funck ici', cv.dt_txt.substring(0,10), pv)
    if (cv.dt_txt.substring(0,10) !== pv && index !== 1) {
      //console.log('indeeeex', index)
      results.push(arr.slice(sliceIndex, index))
      sliceIndex = index
      if(index > 32) {
        results.push(arr.slice(sliceIndex,40))
      }
    }
    return cv.dt_txt.substring(0,10)
  })
  //console.log('resuuuult neymis bakalım', results)
  return results
} 