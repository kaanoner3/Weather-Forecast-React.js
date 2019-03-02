import React, { Component } from "react";
import { connect } from "react-redux";
import { addFavCity, requestFavCityByName } from "../store/ducks/weather";
import { Alert } from "react-bootstrap";

class SearchContainer extends Component {
  constructor() {
    super();

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.requestFavCityByName(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <form
        className="-mr-1 flex flex-row items-stretch"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          className="bg-grey-light rounded-l text-base py-2 px-3"
          placeholder="Search for a city..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="bg-indigo-darker text-white text-sm rounded-r py-2 px-3"
        >
          Search
        </button>
      </form>
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
)(SearchContainer);
