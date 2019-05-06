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
    width: "40%"
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

class MenuSubCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { subCategory: "" };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }
  handleChange = e => {
    // const name = e.target.name;
    const value = e.target.value;
    this.setState({ subCategory: value });
  };
  setSubCategory = e => {
    e.preventDefault();
    const subCategory = this.state.subCategory.trim().toLowerCase();
    console.log(this.state);
    this.props.menuBuilderSetSubCategory(subCategory);
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
    const current = menuBuilderState.current;
    const category = menuBuilderState.categories[current.category].name;
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
                    Enter Your Menu Sub-Categories for{" "}
                    {<span className="text-warning">"{category}"</span>}
                  </h2>
                  <MDBCol md="12">
                    <MDBInput
                      label="Sub-Category"
                      size="lg"
                      group
                      type="text"
                      name="subCategory"
                      value={this.state.subCategory}
                      onChange={this.handleChange}
                      className="form-control"
                      style={styles.input}
                    />
                    <MDBBtn
                      outline
                      color="success"
                      type="submit"
                      onClick={this.setSubCategory}
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
                    <div
                      className="text-center py-4 mt-3"
                      style={styles.btnBack}
                    >
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
                        <MDBIcon
                          icon="arrow-right"
                          className="ml-2"
                          size="lg"
                        />
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

export default MenuSubCategoryForm;
