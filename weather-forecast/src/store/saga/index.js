import { fork, all } from "redux-saga/effects"
import {weather} from "./weather"

export default function* root() {
   yield all([
      fork(weather),
   ])
}
