import React, { Component } from "react";
import { connect } from "react-redux";
import Autocomplete from "react-autocomplete";
import cities from "../../src/city.json";
import Header from "./Header";
import axios from "../../src/utils/axios";
import { addFavCity, requestFavCityByName } from "../store/ducks/weather";
import getWeatherByName from "../services/getWeatherByName";
class MainContainer extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.requestFavCityByName(this.state.value);
  }
  render() {
    return (
      <div>
        <Header />
        <h6>Main Container</h6>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addFavCity, requestFavCityByName }
)(MainContainer);
