import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

const styles = {
  card: {
    marginTop: "4rem",
    marginBottom: "4rem"
  },
  heading: {
    fontWeight: "900"
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
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  submit = (e) => {
    e.preventDefault();
    this.setState(this.initialState);
    this.props.nextStep();
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard style={styles.card}>
              <MDBCardBody>
                <form>
                  <h2
                    className="text-center text-info py-4"
                    style={styles.heading}
                  >
                    Welcome to the AST POS Website Builder
                  </h2>
                  <label className="grey-text">Restaurant name</label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={this.state.restaurantName}
                    onChange={this.handleChange}
                    className="form-control"
                    style={styles.input}
                  />
                  <br />
                  <label className="grey-text">Your full name</label>
                  <input
                    type="name"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    className="form-control"
                    style={styles.input}
                  />
                  <br />
                  <label className="grey-text">Your email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    style={styles.input}
                  />
                  <br />
                  <label className="grey-text">Your phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    className="form-control"
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
                      <MDBIcon
                        icon="arrow-right"
                        className="ml-2"
                        size="lg"
                      />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default BasicInfoForm;
