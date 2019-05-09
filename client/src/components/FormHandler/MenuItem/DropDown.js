import React, { Component } from "react";

const styles = {
  dropDown: {
    marginBottom: "0.5rem"
  }
};

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", option: ""};
  }

  handleOption = e => {
    console.log(e.target);
    this.setState(
      {
        option: ""
      },
      () => {
        this.props.handleDropDown(this.state);
        console.log(this.state);
      }
    );
  };

  render() {
    const props = this.props;
    const items = [];
    for (let i = 0; i < props.length; i++) items.push(i + 1);

    return (
      <div style={styles.dropDown}>
        <select
          className="browser-default custom-select"
          onChange={this.handleOption}
        >
          {items.map(value => (
            <option key={value} value={value}>{`${
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
