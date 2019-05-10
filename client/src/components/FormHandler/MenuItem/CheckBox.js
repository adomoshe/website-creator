import React, { Component } from "react";
// All styling in App.css

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      checked: this.props.checked,
      parent: this.props.parent || null,
      modifierIndex: this.props.modifierIndex || null
    };
  }

  changeCheck = () => {
    this.setState(
      state => ({
        checked: !state.checked
      }),
      () => {
        this.props.handleCheckBox(this.state)
        console.log(this.state);
      }
    );
  };

  render() {
    const props = this.props;

    return (
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={`${props.label}-checkbox`}
          onChange={this.changeCheck}
          defaultChecked={props.checked}
        />
        <label
          className="custom-control-label"
          htmlFor={`${props.label}-checkbox`}
        >
          {props.label}
        </label>
      </div>
    );
  }
}

CheckBox.defaultProps = {
  checked: false
};

export default CheckBox;
