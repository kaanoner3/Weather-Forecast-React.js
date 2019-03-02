import weatherReducer from "./weather";
import { combineReducers } from "redux";
console.log('duck index', weatherReducer)
export default combineReducers({
    weatherReducer
});
