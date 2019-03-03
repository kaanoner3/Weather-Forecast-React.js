import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCityDetail } from "../store/ducks/cityDetail";
import "../styles/CityDetail.css";

import { format, subHours } from "date-fns";

class CityDetail extends Component {
  constructor() {
    super();
    this.state = { dateIndex: 0 };
    this.renderForecast = this.renderForecast.bind(this);
  }
  componentDidMount() {
    this.props.requestCityDetail(this.props.match.params.cityId);
  }
  handleClick(index) {
    this.setState({ dateIndex: index });
  }
  render() {
    return (
      <main className="container mx-auto mt-2 p-4">
        <h1 className="text-4xl text-indigo-darker">
          5-day forecast for {this.props.location.state.cityName}
        </h1>

        <div className="flex flex-row mt-4">{this.renderDates()}</div>

        {this.props.loading ? null : this.renderTable()}
      </main>
    );
  }
  renderDates() {
    return this.props.cityWeatherDetail.slice(0, 5).map((item, index) => {
      return (
        <button
          key={item[0].dt_txt}
          className="w-1/5 p-2"
          onClick={() => {
            this.handleClick(index);
          }}
        >
          <div
            className={`rounded shadow-md p-4 h-full flex flex-col ${
              this.state.dateIndex === index
                ? "bg-green-light"
                : "bg-indigo-lightest"
            }`}
          >
            <h2 className="text-lg font-bold text-indigo-darker">
              {format(new Date(item[0].dt * 1000), "dddd")}
            </h2>

            <div className="mt-4 flex-1 inline-flex flex-row items-center">
              {this.renderWeatherIcon(item[0].weather[0].icon)}
              <p className="text-4xl ml-3">{item[0].main.temp.toFixed(0)}°</p>
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
                {item[0].wind.speed.toFixed(0)} km/h
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
                {item[0].main.humidity.toFixed(0)}%
              </div>
            </div>
          </div>
        </button>
      );
    });
  }
  renderTable() {
    return (
      <div className="mt-4">
        <table className="hourly-table">
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Saat</th>
              <th style={{ width: "7%" }}>Beklenen Hadise</th>
              <th>Sıcaklık</th>
              <th>Nem (%) </th>
              <th>Rüzgar yönü</th>
              <th>Ort. Rüzgar Hızı (km/sa)</th>
            </tr>
          </thead>

          <tbody>{this.renderForecast()}</tbody>
        </table>
      </div>
    );
  }

  renderForecast() {
    return this.props.cityWeatherDetail[this.state.dateIndex].map(
      (item, index) => {
        const dateForDayName = new Date(
          this.props.cityWeatherDetail[this.state.dateIndex][0].dt * 1000
        );
        const date = new Date(item.dt * 1000);

        return (
          <tr key={item.dt_txt}>
            <td>
              {format(dateForDayName, "dddd")}
              <br />
              {format(subHours(date, 3), "HH:mm")}-{format(date, "HH:mm")}
            </td>
            <td>{this.renderWeatherIcon(item.weather[0].icon)}</td>
            <td>{item.main.temp.toFixed(0)}°</td>
            <td>{item.main.humidity.toFixed(0)}</td>
            <td>
              <svg
                style={{ transform: `rotate(${item.wind.deg}deg)` }}
                className="w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M256 0C115.3 0 0 115.3 0 256s115.3 256 256 256 256-115.3 256-256S396.7 0 256 0z"
                    fill="#68544F"
                  />
                  <path
                    d="M512 256c0 140.7-115.3 256-256 256V0c140.7 0 256 115.3 256 256z"
                    fill="#53433F"
                  />
                  <path
                    d="M256 61C148.598 61 61 148.598 61 256c0 107.398 87.598 195 195 195s195-87.602 195-195c0-107.402-87.598-195-195-195z"
                    fill="#EDE9E8"
                  />
                  <path
                    d="M451 256c0 107.398-87.598 195-195 195V61c107.402 0 195 87.598 195 195z"
                    fill="#DFD7D5"
                  />
                  <path
                    d="M271 436v61c0 8.398-6.598 15-15 15-8.402 0-15-6.602-15-15v-61c0-8.402 6.598-15 15-15 8.402 0 15 6.598 15 15zM271 15v61c0 8.398-6.598 15-15 15-8.402 0-15-6.602-15-15V15c0-8.402 6.598-15 15-15 8.402 0 15 6.598 15 15z"
                    fill="#68544F"
                  />
                  <path
                    d="M497 271h-61c-8.29 0-15-6.71-15-15s6.71-15 15-15h61c8.29 0 15 6.71 15 15s-6.71 15-15 15z"
                    fill="#53433F"
                  />
                  <path
                    d="M76 271H15c-8.29 0-15-6.71-15-15s6.71-15 15-15h61c8.29 0 15 6.71 15 15s-6.71 15-15 15z"
                    fill="#68544F"
                  />
                  <path
                    d="M271 15v61c0 8.398-6.598 15-15 15V0c8.402 0 15 6.598 15 15zM271 436v61c0 8.398-6.598 15-15 15v-91c8.402 0 15 6.598 15 15z"
                    fill="#53433F"
                  />
                  <path
                    d="M358.898 339.398L269.801 131.5c-2.403-5.402-8.102-8.102-13.801-8.102-5.7 0-11.398 2.7-13.8 8.102l-89.098 207.898c-2.704 5.7-1.2 12.301 3.296 16.801 4.504 4.2 11.403 5.399 17.102 2.403L256 317.8l82.5 40.8c5.7 2.997 12.598 1.797 17.102-2.402 4.496-4.5 6-11.101 3.296-16.8z"
                    fill="#70DA40"
                  />
                  <path
                    d="M355.602 356.2c-4.504 4.198-11.403 5.398-17.102 2.402L256 317.8V123.398c5.7 0 11.398 2.704 13.8 8.102l89.098 207.898c2.704 5.7 1.2 12.301-3.296 16.801z"
                    fill="#49A520"
                  />
                </g>
              </svg>
            </td>
            <td>{item.wind.speed.toFixed(0)}</td>
          </tr>
        );
      }
    );
  }

  renderWeatherIcon(icon) {
    return (
      <img
        alt="weather-icon"
        src={`http://openweathermap.org/img/w/${icon}.png`}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    cityWeatherDetail: state.cityDetail.cityDetail,
    loading: state.cityDetail.loading
  };
};

export default connect(
  mapStateToProps,
  { requestCityDetail }
)(CityDetail);
