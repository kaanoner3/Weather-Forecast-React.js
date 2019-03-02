import React, { Component } from "react";
import "./App.css"
import {Provider} from "react-redux"
import MainContainer from "./components/MainContainer";
import store from "./store/index";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <MainContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
