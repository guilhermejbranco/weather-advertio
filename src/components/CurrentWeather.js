/* Component that renders the current weather for the selected city */

import React from "react";
import "../styles/CurrentWeather.css";
import "../styles/Common.css";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      apiKey: "379b341aebf8e4800119466e15cd6e58",
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data && this.props.data.city.length > 3) {
      this.getWeather();
    }
  }

  getWeather() {
    let unit = this.props.data.fahrenheit ? "imperial" : "metric";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.props.data.city +
        "&units=" +
        unit +
        "&appid=" +
        this.state.apiKey
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
            temperature: result.main,
            system: result.sys,
            weather: result.weather
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items, temperature, system, weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (items.cod === 200) {
      var sunsetTime = new Date(system.sunset * 1000);
      var sunriseTime = new Date(system.sunrise * 1000);
      return (
        <div className="card">
          <h4>
            Current Weather{" "}
            <span className="small highlightColor">
              {" "}
              {new Date().toLocaleDateString()}{" "}
            </span>
          </h4>
          <hr />

          <div className="container m-0">
            <div className="half-box half-left">
              <h3 className="weatherDescription m-0">{weather[0].main}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                className="weatherIcon"
                alt={weather[0].main}
              />
            </div>
            <div className="half-box half-right">
              <h3 className="currentTemperature m-0">
                {Math.round(temperature.temp)}º{" "}
                <span className="small">(wind - {items.wind.speed})</span>
              </h3>
            </div>
          </div>

          <hr />

          <div className="container">
            <div className="half-box half-left">
              <h5>
                <small>Sunrise</small>{" "}
                <span className="highlightColor">
                  {String(sunriseTime.getHours()).padStart(2, "0")} :{" "}
                  {String(sunriseTime.getMinutes()).padStart(2, "0")}
                </span>
              </h5>
            </div>
            <div className="half-box half-right">
              <h5>
                <small>Sunset</small>{" "}
                <span className="highlightColor">
                  {String(sunsetTime.getHours()).padStart(2, "0")} :{" "}
                  {String(sunsetTime.getMinutes()).padStart(2, "0")}
                </span>
              </h5>
            </div>
          </div>
        </div>
      );
    } else if (this.props.data.city.length < 4) {
      return (
        <div>
          <h5 className="">Please select a city from the list above.</h5>
        </div>
      );
    } else {
      return (
        <div className="errorBlock">
          <h5 className="errorMessage">{items.message}</h5>
        </div>
      );
    }
  }
}

export default CurrentWeather;
