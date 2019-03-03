import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import FavCities from "./FavCities";

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
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(MainContainer);
