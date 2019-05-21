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
    const value = e.target.value.toUpperCase();
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

  render() {
    const menuBuilderState = this.props.menuBuilderState;
    const current = menuBuilderState.current;
    const category = menuBuilderState.categories[current.category]
      ? menuBuilderState.categories[current.category].name
      : null;

    console.log("MenuSubCategoryForm rendering with state: ", this.state);
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
              </MDBCol>
            </MDBCol>
          </form>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default MenuSubCategoryForm;
