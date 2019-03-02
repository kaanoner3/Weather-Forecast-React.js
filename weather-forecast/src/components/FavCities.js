import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { setModalStatus, changeFavCity } from "../store/ducks/weather";

class FavCities extends Component {
  constructor() {
    super();

    this.renderCities = this.renderCities.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }
  renderWeatherIcon(icon) {
    return <img src={`http://openweathermap.org/img/w/${icon}.png`} />;
  }

  renderCities() {
    return this.props.favCities.map((item, index) => {
      return (
        <div key={item.id} className="w-1/5">
          <div className="relative rounded shadow-md bg-indigo-lightest mx-4 p-4 h-full flex flex-col">
            <button
              type="button"
              className="absolute pin-r pin-t mt-4 mr-4 text-grey hover:text-red-dark"
            >
              <svg
                className="w-4 fill-current"
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77 10.137 10.138 26.632 10.138 36.77 0 10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z"
                  fillRule="nonzero"
                />
              </svg>
            </button>

            <h2 className="text-lg font-bold text-indigo-darker">
              {item.name}
            </h2>

            <div className="mt-4 flex-1 inline-flex flex-row items-center">
              <p className="text-4xl ">{item.main.temp.toFixed(0)}°</p>
              {this.renderWeatherIcon(item.weather[0].icon)}
            </div>

            <div className="mt-4 flex flex-row text-grey-dark text-sm">
              <div className="flex flex-row items-center">
                <svg
                  className="fill-current w-4 mr-2"
                  viewBox="0 0 512 360"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.979 195.181c30.288 25.979 64.616 55.426 131.017 55.426 66.403-.001 100.733-29.447 131.022-55.426 28.644-24.568 53.382-45.787 104.98-45.787 51.599 0 76.337 21.219 104.98 45.787 8.385 7.191 21.011 6.225 28.202-2.159 7.191-8.385 6.225-21.011-2.16-28.202-30.289-25.979-64.619-55.426-131.022-55.426-66.403 0-100.733 29.446-131.022 55.426-28.644 24.568-53.382 45.787-104.98 45.787-51.597 0-76.332-21.218-104.974-45.787-8.384-7.191-21.01-6.226-28.202 2.159-7.192 8.384-6.225 21.011 2.159 28.202z" />
                  <path d="M6.979 85.787c30.287 25.98 64.615 55.426 131.017 55.426 66.403 0 100.733-29.446 131.022-55.426C297.662 61.219 322.399 40 373.998 40c51.597 0 76.335 21.218 104.98 45.787 8.385 7.193 21.01 6.224 28.201-2.161 7.192-8.384 6.223-21.012-2.161-28.202C474.729 29.444 440.399 0 373.998 0c-66.403 0-100.733 29.446-131.022 55.426-28.644 24.568-53.382 45.787-104.98 45.787-51.596 0-76.332-21.218-104.974-45.787-8.384-7.192-21.011-6.226-28.202 2.159-7.192 8.384-6.225 21.011 2.159 28.202zM505.02 274.213c-30.289-25.979-64.619-55.426-131.022-55.426-66.403 0-100.733 29.446-131.022 55.426C214.332 298.781 189.594 320 137.996 320c-51.594 0-76.331-21.218-104.973-45.785l-.002-.002c-8.384-7.189-21.009-6.223-28.201 2.16-7.191 8.384-6.224 21.011 2.16 28.202C37.268 330.555 71.597 360 137.996 360c66.403 0 100.733-29.446 131.022-55.426 28.644-24.568 53.382-45.787 104.98-45.787 51.599 0 76.337 21.219 104.98 45.787 8.385 7.191 21.011 6.225 28.202-2.159 7.191-8.385 6.225-21.011-2.16-28.202z" />
                </svg>
                {item.wind.speed} km/h
              </div>

              <div className="ml-4 flex flex-row items-center">
                <svg
                  className="fill-current h-4 mr-2 -mt-px"
                  viewBox="0 0 307 503"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M290.316 284.223L145.188 0 13.434 294.754c-33.215 74.312.105 161.484 74.418 194.7a147.716 147.716 0 0 0 106.828 5.29l10.898-3.639c77.234-25.746 118.973-109.234 93.227-186.472a147.783 147.783 0 0 0-8.559-20.41h.07zM208.48 454.414c-4.867 2.496-10.84.574-13.335-4.293-2.497-4.867-.575-10.84 4.292-13.336.043-.02.086-.043.125-.062 39.051-19.551 63.766-59.426 63.899-103.098.031-5.445 4.457-9.848 9.906-9.848h.059c5.449.036 9.847 4.461 9.847 9.91-.14 51.133-29.07 97.833-74.793 120.727z"
                    fillRule="nonzero"
                  />
                </svg>
                {item.main.humidity}%
              </div>
            </div>

            <p
              className="mt-4 text-xs text-grey"
              title="Last updated 1 hour ago"
            >
              <svg
                className="fill-current w-3 h-3 mr-1 float-left"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1.004 1.004 0 1 1-1.42 1.42L9.3 10.7A1 1 0 0 1 9 10V6a1 1 0 1 1 2 0v3.59z"
                  fillRule="nonzero"
                />
              </svg>
              1h ago
            </p>
          </div>
        </div>
      );
    });
  }
  renderModal() {
    let display = "none";
    if (this.props.modalState) {
      display = "block";
    } else {
      display = "none";
    }

    return (
      <div
        className="fixed pin overflow-y-auto"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", display }}
        role="modal"
      >
        <div
          className="mx-8 md:mx-auto my-8 rounded-lg bg-white max-w-md"
          role="dialog"
        >
          <div className="relative p-4 pr-12 border-b">
            <button
              type="button"
              className="absolute pin-r pin-t mt-3 mr-3 p-2 text-grey hover:text-grey-dark"
              onClick={() => {
                this.props.setModalStatus(false);
              }}
            >
              <svg
                className="w-5 fill-current"
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77 10.137 10.138 26.632 10.138 36.77 0 10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z"
                  fillRule="nonzero"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-medium">
              Which favorite city should be removed?
            </h3>
          </div>

          <div className="p-4">
            <p className="text text2xl">Current Cities</p>
            <div className="flex flex-col">
              {this.props.favCities.map((item, index) => {
                return (
                  <button
                    className="p-2"
                    key={item.id}
                    onClick={() => this.props.changeFavCity(item.id)}
                  >
                    <div>{item.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t h-12 flex flex-row justify-between">
            <div>sol</div>
            <div>sağ</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    console.log("render fav cities");
    return (
      <div className="container mx-auto mt-2 p-4">
        <div className="flex flex-row -mx-4">{this.renderCities()}</div>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favCities: state.weatherReducer.favCities,
    modalState: state.weatherReducer.showModal,
    newCity: state.weatherReducer.newCity
  };
};

export default connect(
  mapStateToProps,
  { setModalStatus, changeFavCity }
)(FavCities);
