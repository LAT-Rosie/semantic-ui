import React, { Component } from 'react';
import ReactWeather from 'react-open-weather';
import './WeatherWidget.css';

class WeatherWidget extends Component {
  render() {
    return (
      <div >
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
              type="text/css"
        />
        <ReactWeather
          forecast="today"
          apikey="06b050cadd9d465b959222536182504"
          type="auto"
          unit="imperial"
        />
      </div>
    );
  }
}

export default WeatherWidget;
