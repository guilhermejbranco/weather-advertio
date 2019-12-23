/* Component that renders the switch to change between Celsius and Fahrenheit */

import React from "react";
import "../styles/Switch.css";

class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  change(event) {
    this.props.unithandler(event);
    this.setState({
      isChecked: event.target.checked
    });
  }

  render() {
    return (
      <div className="">
        <label className="switch switch-flat">
          <input
            className="switch-input"
            type="checkbox"
            onChange={this.change.bind(this)}
            value={this.state.isChecked}
          />
          <span
            className="switch-label"
            data-on="Fahrenheit"
            data-off="Celsius"
          ></span>
          <span className="switch-handle"></span>
        </label>
      </div>
    );
  }
}

export default Switch;
