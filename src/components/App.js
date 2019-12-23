/* Main component for the weather APP - Renders all the sub-components */

import React from 'react';
import '../styles/App.css';
import '../styles/Common.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import CountryList from './CountryList';
import Header from './Header';
import Switch from './Switch';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
          city: 'Lisbon',
          fahrenheit: false
    };
    this.cityhandler = this.cityhandler.bind(this)
    this.unithandler = this.unithandler.bind(this)
  }

  cityhandler(event) {
    this.setState({
        city: event.target.value
    })
  }

  unithandler(event) {
    this.setState({
        fahrenheit: event.target.checked
    })
  }

  render(){
    return (
      <div className="App">
        <div className="background"></div>
        <div className="App-header">

            <Header></Header>

          <div className="container">
            <div className="third-box half-right">

              <CountryList cityhandler={this.cityhandler}></CountryList>

            </div>
            <div className="third-box half-center">
              <h1 className="capitalize">
                <div className="container">
                  {this.state.city}
                </div>
              </h1>
            </div>
            <div className="third-box half-left">

              <Switch unithandler={this.unithandler}></Switch>

            </div>
          </div>

          <div className="container containerResponsive">
            <div className="half-box half-left">

              <CurrentWeather data={this.state}></CurrentWeather>

            </div>
            <div className="half-box half-right">

              <Forecast data={this.state}></Forecast>

            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default App;
