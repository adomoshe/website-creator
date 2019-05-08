import React, { Component } from "react";
// All styles on App.css

class CheckBox extends Component {
  render() {
    const props = this.props;
    return (
      <div className="custom-control custom-checkbox" >
        <input
          type="checkbox"
          className="custom-control-input"
          id={`defaultUnchecked-${props.label}`}
          checked={props.checked}
        />
        <label
          className="custom-control-label"
          for={`defaultUnchecked-${props.label}`}
        >
          {props.label}
        </label>
      </div>
    );
  }
}

export default CheckBox;
