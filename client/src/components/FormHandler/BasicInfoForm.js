import React, { Component } from "react";
import {
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput
} from "mdbreact";

const styles = {
  card: {
    marginTop: "4rem",
    marginBottom: "4rem"
  },
  heading: {
    fontWeight: "500"
  },
  btn: {
    fontWeight: "900",
    fontSize: "1.2rem"
  },
  input: {
    fontWeight: "700",
    fontSize: "1.3rem"
  }
};

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurantName: "", userName: "", email: "", phone: "" };
    this.initialState = this.state;
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  submit = e => {
    e.preventDefault();
    this.setState(this.initialState);
    this.props.nextStep();
  };
  render() {
    return (
          <MDBCol md="5">
            <MDBCard style={styles.card}>
              <MDBCardBody>
                <form>
                  <h2
                    className="text-center text-info py-4"
                    style={styles.heading}
                  >
                    AST POS Menu Upload
                  </h2>
                  <MDBInput
                    label="Restaurant name"
                    size="lg"
                    type="text"
                    name="restaurantName"
                    value={this.state.restaurantName}
                    onChange={this.handleChange}
                    style={styles.input}
                  />
                  <br />
                  <MDBInput
                    label="Your full name"
                    size="lg"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    style={styles.input}
                  />
                  <br />
                  <MDBInput
                    label="Your email"
                    size="lg"
                    icon="envelope"
                    group
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.email}
                    onChange={this.handleChange}
                    style={styles.input}
                  />
                  <br />
                  <MDBInput
                    label="Your phone"
                    size="lg"
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    style={styles.input}
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      outline
                      color="info"
                      type="submit"
                      onClick={this.submit}
                      style={styles.btn}
                    >
                      Continue
                      <MDBIcon icon="arrow-right" className="ml-2" size="lg" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
    );
  }
}

export default BasicInfoForm;
