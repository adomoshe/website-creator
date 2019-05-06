import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
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
  input: {
    fontWeight: "700",
    // fontSize: "2rem",
    float: "left",
    width: "50%"
  },
  btnAdd: {
    fontWeight: "900",
    fontSize: "1.2rem",
    float: "right",
    width: "40%",
    // height: "100%"
  },
  btnBack: {
    fontWeight: "900",
    fontSize: "1.2rem",
    float: "left"
  },
  btnSubmit: {
    fontWeight: "900",
    fontSize: "1.2rem",
    float: "right"
  }
};

class MenuItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = { catIn: 0, item: "" };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }
  handleChange = e => {
    // const name = e.target.name;
    const value = e.target.value;
    this.setState({ item: value });
  };
  setItem = e => {
    e.preventDefault();
    const item = this.state.item.trim().toLowerCase();
    console.log(this.state);
    this.props.setItem(item);
    this.setState(this.initialState);
  };
  submit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState(this.initialState);
    this.props.nextStep();
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const subCategory = menuBuilderState.categories[0].subCategories[0].name
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
                    Enter Your Menu Items for{" "}
                    {
                      <span className="text-warning">
                        "{subCategory}"
                      </span>
                    }
                  </h2>
                  <MDBCol md="12">
                    <MDBInput
                      label="Item"
                      size="lg"
                      group
                      type="text"
                      name="menuItem"
                      value={this.state.item}
                      onChange={this.handleChange}
                      className="form-control"
                      style={styles.input}
                    />
                    <MDBBtn
                      outline
                      color="success"
                      type="submit"
                      onClick={this.setItem}
                      style={styles.btnAdd}
                    >
                      Add
                      <MDBIcon
                        far
                        icon="thumbs-up"
                        className="ml-2"
                        size="lg"
                      />
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="12">
                  <div className="text-center py-4 mt-3" style={styles.btnBack}>
                    <MDBBtn
                      outline
                      color="danger"
                      onClick={this.props.prevStep}
                      style={styles.btnBack}
                    >
                      <MDBIcon icon="arrow-left" className="mr-2" size="lg" />
                      Back
                    </MDBBtn>
                  </div>
                  </MDBCol>
                  <MDBCol md="12">
                  <div
                    className="text-center py-4 mt-3"
                    style={styles.btnSubmit}
                  >
                    <MDBBtn
                      outline
                      color="info"
                      type="submit"
                      onClick={this.submit}
                      style={styles.btnSubmit}
                    >
                      Continue
                      <MDBIcon icon="arrow-right" className="ml-2" size="lg" />
                    </MDBBtn>
                  </div>
                  </MDBCol>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MenuItemForm;
