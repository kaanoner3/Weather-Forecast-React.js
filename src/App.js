import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import configureStore from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CityDetail from "./components/CityDetail";

class App extends Component {
  constructor() {
    super();
    this.store = configureStore();
  }
  render() {
    return (
      <Provider store={this.store.store}>
        <PersistGate persistor={this.store.persistor}>
          <Router>
            <div>
              <Route path="/" exact component={MainContainer} />
              <Route path="/city/:cityId" component={CityDetail} />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
