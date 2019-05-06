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
class MenuCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }
  handleChange = e => {
    // const name = e.target.name;
    const value = e.target.value;
    this.setState({ category: value });
  };
  addCategory = e => {
    e.preventDefault();
    const category = this.state.category.trim().toLowerCase();
    console.log(this.state);
    console.log(this.props);
    this.props.menuBuilderSetCategory({ name: category, subCategories: [] });
    this.setState(this.initialState);
  };

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
                    Enter Your Menu Categories
                  </h2>
                  <MDBCol md="12">
                    <MDBInput
                      label="Category"
                      size="lg"
                      group
                      type="text"
                      name="menuCategory"
                      value={this.state.category}
                      onChange={this.handleChange}
                      style={styles.input}
                    />
                    <MDBBtn
                      outline
                      color="success"
                      type="submit"
                      onClick={this.addCategory}
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
                        onClick={this.props.nextStep}
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

export default MenuCategoryForm;
