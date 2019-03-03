import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "./ducks";
import sagas from "./saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  debug: true
  //blacklist:['cityDetail']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(logger, sagaMiddleware))
);

let persistor = persistStore(store, null, () => {});
sagaMiddleware.run(sagas);

const configureStore = () => {
  return { store, persistor };
};

export default configureStore;
