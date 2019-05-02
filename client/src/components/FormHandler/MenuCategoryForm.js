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
  btnBack: {
    fontWeight: "900",
    fontSize: "1.2rem",
    float: "left"
  },
  btnSubmit: {
    fontWeight: "900",
    fontSize: "1.2rem",
    float: "right"
  },
  input: {
    fontWeight: "700",
    fontSize: "1.3rem"
  }
};
class MenuCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "", categories: [] };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }
  handleChange = e => {
    // const name = e.target.name;
    const value = e.target.value;
    this.setState({ category: value });
  };
  submit = e => {
    e.preventDefault();
    console.log(this.state)
    this.setState({})
    this.props.setCategories()
    this.setState(this.initialState);
    // this.props.nextStep();
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
                  <label className="grey-text">Category</label>
                  <input
                    type="text"
                    name="menuCategory1"
                    value={this.state.category}
                    onChange={this.handleChange}
                    className="form-control"
                    style={styles.input}
                  />
                  {/* <br />
                  <label className="grey-text">Category</label>
                  <input
                    type="text"
                    name="menuCategory2"
                    value={this.state.menuCategory2}
                    onChange={this.handleChange}
                    className="form-control"
                    style={styles.input}
                  />
                  <br />
                  <label className="grey-text">Category</label>
                  <input
                    type="text"
                    name="menuCategory3"
                    value={this.state.menuCategory3}
                    onChange={this.handleChange}
                    className="form-control"
                    style={styles.input}
                  /> */}
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
                  <div className="text-center py-4 mt-3" style={styles.btnSubmit}>
                    <MDBBtn
                      outline
                      color="info"
                      type="submit"
                      onClick={this.submit}
                      style={styles.btnSubmit}
                    >
                      Continue
                      <MDBIcon
                        far
                        icon="paper-plane"
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

export default MenuCategoryForm;
