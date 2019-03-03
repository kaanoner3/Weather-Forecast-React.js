import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCityDetail } from "../store/ducks/cityDetail";
import "./CityDetail.css";

import { format, subHours } from 'date-fns';

class CityDetail extends Component {
  constructor() {
    super();
    this.renderForecast = this.renderForecast.bind(this)
  }
  componentDidMount() {
    this.props.requestCityDetail(this.props.match.params.cityId);
  }

  render() {
    return (
      <main
        className="container mx-auto mt-2 p-4"
        style={{ backgroundColor: "#E8EFF3" }}
      >
        <h1 className="text-4xl text-indigo-darker">5-day forecast for Buca</h1>

        <div className="flex flex-col mt-4 -my-4">
          <div className="w-1/5">
            <div className="rounded shadow-md bg-indigo-lightest my-4 p-4 h-full flex flex-col">
              <h2 className="text-lg font-bold text-indigo-darker">Saturday</h2>

              <div className="mt-4 flex-1 inline-flex flex-row items-center">
                <svg
                  className="fill-current w-12 text-yellow-dark"
                  viewBox="0 0 46 46"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.58 11.269c-6.237 0-11.311 5.075-11.311 11.312 0 6.237 5.074 11.312 11.311 11.312 6.236 0 11.311-5.074 11.311-11.312 0-6.238-5.075-11.312-11.311-11.312zM22.58 7.944a2.207 2.207 0 0 1-2.207-2.206V2.207a2.207 2.207 0 1 1 4.414 0v3.531a2.207 2.207 0 0 1-2.207 2.206zM22.58 37.215a2.207 2.207 0 0 0-2.207 2.207v3.53a2.207 2.207 0 1 0 4.414 0v-3.53a2.208 2.208 0 0 0-2.207-2.207zM32.928 12.231a2.208 2.208 0 0 1 0-3.121l2.497-2.497a2.207 2.207 0 1 1 3.121 3.121l-2.497 2.497a2.207 2.207 0 0 1-3.121 0zM12.231 32.93a2.205 2.205 0 0 0-3.121 0l-2.497 2.496a2.207 2.207 0 0 0 3.121 3.121l2.497-2.498a2.204 2.204 0 0 0 0-3.119zM37.215 22.58c0-1.219.988-2.207 2.207-2.207h3.531a2.207 2.207 0 1 1 0 4.413h-3.531a2.206 2.206 0 0 1-2.207-2.206zM7.944 22.58a2.207 2.207 0 0 0-2.207-2.207h-3.53a2.207 2.207 0 1 0 0 4.413h3.531a2.206 2.206 0 0 0 2.206-2.206zM32.928 32.93a2.208 2.208 0 0 1 3.121 0l2.497 2.497a2.205 2.205 0 1 1-3.121 3.12l-2.497-2.497a2.205 2.205 0 0 1 0-3.12zM12.231 12.231a2.207 2.207 0 0 0 0-3.121L9.734 6.614a2.207 2.207 0 0 0-3.121 3.12l2.497 2.497a2.205 2.205 0 0 0 3.121 0z" />
                </svg>

                <p className="text-4xl ml-3">17°</p>
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
                  10 km/h
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
                  45%
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.props.loading ? null : this.renderTable()}
      </main>
    );
  }

  renderTable() {
    return (
      <div className="mt-4">
        <table className="hourly-table">
          <thead>
            <tr>
              <th style={{width:'15%'}}>Saat</th>
              <th style={{width:'7%'}}>Beklenen Hadise</th>
              <th>Sıcaklık</th>
              <th>Nem (%) </th>
              <th>Rüzgar yönü</th>
              <th>Ort. Rüzgar Hızı (km/sa)</th>
            </tr>
          </thead>

          <tbody>
            {this.renderForecast()}
          </tbody>
        </table>
      </div>
    );
  }
  
  renderForecast() {
    return this.props.cityWeatherDetail[0].map((item,index) => {
      const dateForDayName = new Date(this.props.cityWeatherDetail[0][0].dt * 1000);
      const date = new Date(item.dt * 1000);
      
      return (
        <tr key={item.dt_txt}>
          <td>
            {format(dateForDayName, 'dddd')}
            <br />
            {format(subHours(date, 3), 'HH:mm')}-{format(date, 'HH:mm')}
          </td>
          <td>{this.renderWeatherIcon(item.weather[0].icon)}</td>
          <td>{item.main.temp}°</td>
          <td>{item.main.humidity}</td>
          <td>

          </td>
          <td>{item.wind.speed}</td>
        </tr>
      );
    })
  }

  renderWeatherIcon(icon) {
    return <img src={`http://openweathermap.org/img/w/${icon}.png`} />;
  }
}
const mapStateToProps = state => {
  return {
    cityWeatherDetail: state.cityDetail.cityDetail,
    loading: state.cityDetail.loading,
  };
};

export default connect(
  mapStateToProps,
  { requestCityDetail }
)(CityDetail);

