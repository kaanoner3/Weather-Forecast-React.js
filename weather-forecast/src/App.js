import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import configureStore from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CityDetail from "./components/CityDetail";
import AlertTemplate from "react-alert-template-basic";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

class App extends Component {
  constructor() {
    super();
    this.store = configureStore();
  }
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
