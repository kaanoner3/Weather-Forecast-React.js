import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CityDetail from "./components/CityDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <div>
              <Route path="/" exact component={MainContainer} />
              <Route path="/city/:cityId" component={CityDetail} />
              </div>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
