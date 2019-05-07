import React, { Component } from "react";

class CheckBox extends Component {

  render() {
    const props = this.props
    return (
      <div className="checkbox-container">
        <div className="input-title">{props.label}:</div>
        <label className="checkbox-label">
          <input type="checkbox" checked={props.checked}/>
          <span className="checkbox-custom rectangular" />
        </label>
      </div>
    );
  }
}

export default CheckBox