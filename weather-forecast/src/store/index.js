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
  whitelist: ["weatherReducer"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, compose(applyMiddleware(logger, sagaMiddleware)));

let persistor = persistStore(store);
sagaMiddleware.run(sagas);

export { store, persistor };
