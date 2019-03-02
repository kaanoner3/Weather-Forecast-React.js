import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { addFavCity, requestFavCityByName } from "../store/ducks/weather";
import FavCities from "./FavCities"

class MainContainer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Header />
        <FavCities />      
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    favCities: state.weatherReducer.favCities
  };
};

export default connect(
  mapStateToProps,
  { addFavCity, requestFavCityByName }
)(MainContainer);
