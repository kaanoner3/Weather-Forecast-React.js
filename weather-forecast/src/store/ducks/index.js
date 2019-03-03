import weatherReducer from "./weather";
import cityDetail from "./cityDetail"
import { combineReducers } from "redux";

export default combineReducers({
    weatherReducer,
    cityDetail
});
