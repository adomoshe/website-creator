import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import CheckBox from "./CheckBox";

const styles = {
  heading: {
    fontWeight: "500"
  },
  btns: {
    borderRadius: 10,
    marginRight: "0.5rem"
  }
};

class ModifierModal extends Component {
  state = { modal: false, name: "", choicesLimit: "", price: "", cost: "", forced: false };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    console.log(this.props);
    const props = this.props;
    return (
      <>
        <MDBBtn color="success" onClick={this.toggle}>
          Modifier {props.number}
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalBody>
            <h2 className="text-center text-info py-4" style={styles.heading}>
            Modifier {props.number} for{<br />}
              {<span className="deep-orange-text">"{props.item}"</span>}
            </h2>
            <MDBInput
              label="Modifier Name"
              size="lg"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {(props.number === 1 || 4) ? (<MDBInput
              label="Price"
              size="lg"
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />) : null}
            <MDBInput
              label="Cost"
              size="lg"
              type="number"
              name="cost"
              value={this.state.cost}
              onChange={this.handleChange}
            />
            <MDBInput
              label="Choices Limit"
              size="lg"
              type="number"
              name="choicesLimit"
              value={this.state.choicesLimit}
              onChange={this.handleChange}
            />
            <CheckBox label="Forced" />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={this.toggle} style={styles.btns}>
              Close
            </MDBBtn>
            <MDBBtn color="success" style={styles.btns}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ModifierModal;
