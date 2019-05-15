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

class MenuSubCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { subCategory: "" };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({ subCategory: value });
  };

  setSubCategory = e => {
    e.preventDefault();
    const subCategory = this.state.subCategory.trim().toUpperCase();
    if (subCategory.length < 3) {
      alert("Please enter a sub-category name longer than 3 letters");
      return;
    }
    this.props.menuBuilderSetSubCategory(subCategory);
    this.setState(this.initialState);
  };

  submit = e => {
    e.preventDefault();
    this.setState(this.initialState);
    this.props.nextStep();
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const category = menuBuilderState.categories[current.category]
      ? menuBuilderState.categories[current.category].name
      : null;

    return (
      <MDBCard style={styles.card}>
        <MDBCardBody>
          <form>
            <h2 className="text-center text-info py-4" style={styles.heading}>
              Enter Your Menu Sub-Categories for Category:{<br />}
              {<span className="deep-orange-text">"{category}"</span>}
            </h2>
            <MDBCol>
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
              <MDBCol className="d-flex justify-content-center">
                {/* <MDBBtn
                  outline
                  color="danger"
                  onClick={this.props.prevStep}
                  style={styles.btnBack}
                  size="sm"
                >
                  <MDBIcon icon="arrow-left" className="mr-2" size="lg" />
                  Back
                </MDBBtn> */}
                <MDBBtn
                  outline
                  color="success"
                  type="submit"
                  onClick={this.setSubCategory}
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

export default MenuSubCategoryForm;
