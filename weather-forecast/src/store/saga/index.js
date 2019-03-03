import { fork, all } from "redux-saga/effects";
import { weather, cityDetail } from "./weather";

export default function* root() {
  yield all([fork(weather), fork(cityDetail)]);
}
