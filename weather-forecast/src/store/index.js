import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import reducers from "./ducks"
import sagas from "./saga"
import { persistStore, autoRehydrate } from "redux-persist"
//console.log('store saga', sagas)
const sagaMiddleware = createSagaMiddleware()

const store =  createStore(reducers, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(sagas)


// Create the glorious store instance.
//const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware), autoRehydrate())
//sagaMiddleware.run(sagas)

//const persist = persistStore(store, { blacklist: ["app"], storage: AsyncStorage }, onRehydrate)

// Hot reloading thing
/*if (module.hot) {
   module.hot.accept(() => {
      store.replaceReducer(reducers)
   })
}*/

export default store
