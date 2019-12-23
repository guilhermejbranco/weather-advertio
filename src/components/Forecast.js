/* Component that renders the forecast weather for the selected city */

import React from "react";
import "../styles/Forecast.css";
import "../styles/Common.css";

class Forecast extends React.Component {
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

  getWeekDay(date) {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var prnDt = new Date(date);

    return days[prnDt.getDay()];
  }

  getWeather() {
    let unit = this.props.data.fahrenheit ? "imperial" : "metric";
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
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
            cod: result.cod,
            items: result.list
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
    const { error, isLoaded, cod, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (cod === "200") {
      return (
        <div className="card">
          <h4>
            Forecast <span className="small">(at 12:00)</span>
          </h4>
          <hr />
          <ul className="forecastList">
            {items.map(item => {
              return (
                item.dt_txt &&
                item.dt_txt.split(" ")[1].includes("12") && (
                  <li key={item.dt}>
                    <h5 className="m-0">
                      <small>
                        <div className="container">
                          <div className="third-box half-left vertical-center highlightColor small">
                            {this.getWeekDay(item.dt_txt)}
                          </div>
                          <div className="third-box half-center vertical-center">
                            {item.weather[0].main}
                          </div>
                          <div className="third-box half-right">
                            <img
                              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                              className="forecastWeatherIcon"
                              alt={item.weather[0].main}
                            />
                            <div className=" vertical-center">
                              {Math.round(item.main.temp)}º
                            </div>
                          </div>
                        </div>
                      </small>
                    </h5>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="errorBlock">
          <h5>Forecast not Available.</h5>
        </div>
      );
    }
  }
}

export default Forecast;
