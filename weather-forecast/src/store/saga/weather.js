import { call, put, takeEvery, takeLatest, all, take } from "redux-saga/effects"
import getWeatherByName from "../../services/getWeatherByName"
import {addFavCity, REQUEST_FAV_CITY} from "../ducks/weather"

export function* weather() {
    while(true) {
        try {
            const {name} = yield take(REQUEST_FAV_CITY)
            const response = yield call(getWeatherByName, name)
            yield put(addFavCity(response.data))
            
        } catch (error) {
            console.log(error)   
        }
    }
}
