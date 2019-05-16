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
  input: {
    fontWeight: "900"
  },
  btnAdd: {
    fontWeight: "900",
    fontSize: "1rem"
  },
  btnBack: {
    fontWeight: "900",
    fontSize: "1rem"
  },
  btnSubmit: {
    fontWeight: "900",
    fontSize: "1rem"
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
    const value = e.target.value.toUpperCase();
    this.setState({ category: value });
  };

  setCategory = e => {
    e.preventDefault();
    const category = this.state.category.trim().toUpperCase();
    if (category.length < 3) {
      alert("Please enter a category name longer than 3 letters");
      return;
    }
    this.props.menuBuilderSetCategory(category);
    this.setState(this.initialState);
  };

  render() {
    console.log("MenuCategoryForm rendering with state: ", this.state)
    return (
      <MDBCard style={styles.card}>
        <MDBCardBody>
          <form>
            <h2 className="text-center text-info py-4" style={styles.heading}>
              Enter Your Menu Categories
            </h2>
            <MDBCol>
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
              <MDBCol className="d-flex justify-content-center">
                <MDBBtn
                  outline
                  color="danger"
                  onClick={this.props.prevStep}
                  style={styles.btnBack}
                  size="sm"
                >
                  <MDBIcon icon="arrow-left" className="mr-2" size="lg" />
                  Back
                </MDBBtn>
                <MDBBtn
                  outline
                  color="success"
                  type="submit"
                  onClick={this.setCategory}
                  style={styles.btnAdd}
                  size="sm"
                >
                  Add
                  <MDBIcon far icon="thumbs-up" className="ml-2" size="lg" />
                </MDBBtn>
                {/* <MDBBtn
                    outline
                    color="info"
                    type="submit"
                    onClick={this.props.nextStep}
                    style={styles.btnSubmit}
                    size="sm"
                  >
                    Continue
                    <MDBIcon icon="arrow-right" className="ml-2" size="lg" />
                  </MDBBtn> */}
              </MDBCol>
            </MDBCol>
          </form>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default MenuCategoryForm;
