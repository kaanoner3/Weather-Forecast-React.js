import React, { Component } from "react";
import { connect } from "react-redux";
import Autocomplete from "react-autocomplete";
import cities from "../../src/city.json";
import Header from "./Header";
import axios from "../../src/utils/axios";

const API_KEY = "de88b673d305815f66a275b2a890bbe2";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = { favouriteCities: cities, value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //alert("A name was submitted: " + this.state.value);
    axios
      .get("weather", {
        params: {
          q: this.state.value,
          appid: API_KEY
        }
      })
      .then(resp => {
        console.log("responseee", resp);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <form>
          <label>
            <input
              className="search-input"
              type="text"
              name="city-search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type="button" className="search-button" onClick={this.handleSubmit}>Şehir Ara</button>
        </form>

        <h6>Main Container</h6>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default MainContainer;
//export default connect(mapStateToProps,{})(MainContainer)
