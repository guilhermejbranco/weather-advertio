/* Component that renders the list of the city availables for weather consult.
   The city can also be typed by the user.
 */

import React from "react";
import "../styles/CountryList.css";
import "../styles/Common.css";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: "Lisbon"
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  change(event) {
    this.props.cityhandler(event);
    this.setState({
      city: event.target.value
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    items.sort(function(a, b) {
      if (a.capital !== "" && b.capital !== "") {
        a.capital = a.capital.toLowerCase();
        b.capital = b.capital.toLowerCase();

        return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
      }
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <input
            list="cities"
            name="city"
            onChange={this.change.bind(this)}
            value={this.state.city}
          />
          <datalist id="cities" className="custom-select">
            {items.map(item => {
              return (
                item.capital && (
                  <option key={item.alpha3Code} value={item.capital}>
                    {item.capital}
                  </option>
                )
              );
            })}
          </datalist>
        </div>
      );
    }
  }
}

export default CountryList;
