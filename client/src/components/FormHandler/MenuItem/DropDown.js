import React, { Component } from "react";

const styles = {
  dropDown: {
    marginBottom: "0.5rem"
  }
};

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, option: 1 };
  }

  handleOption = e => {
    console.log(e.target);
    this.setState(
      {
        option: parseInt(e.target.value)
      },
      () => {
        this.props.handleDropDown(this.state);
      }
    );
  };

  render() {
    const props = this.props;
    const items = [];
    for (let i = 0; i < props.length; i++) items.push(i + 1);

    return (
      <div style={styles.dropDown}>
        <select value={props.value}
          className="browser-default custom-select"
          onChange={this.handleOption}
        >
          {items.map(value => (
            <option key={value} name={props.name} value={value}>{`${
              props.label
            } #${value}`}</option>
          ))}
        </select>
      </div>
    );
  }
}

DropDown.defaultProps = {
  checked: false
};

export default DropDown;
