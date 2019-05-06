import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBFormInline
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
    fontSize: "1.2rem"
    // float: "right",
    // width: "40%"
    // height: "100%"
  },
  btnBack: {
    fontWeight: "900",
    fontSize: "1.2rem"
    // float: "left"
  },
  btnSubmit: {
    fontWeight: "900",
    fontSize: "1.2rem"
    // float: "right"
  }
};

class MenuItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = { advanced: false, name: "", price: null, cost: null };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  setItem = e => {
    e.preventDefault();
    const item = this.state.item.trim().toLowerCase();
    console.log(this.state);
    this.props.menuBuilderSetItem(item);
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
    const subCategory =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].name;
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard style={styles.card}>
              <MDBCardBody>
                <MDBRow center>
                  <MDBCol
                    md="12"
                    className="mb-xl-0 mb-4 justify-content-center"
                  >
                    <MDBBtnGroup>
                      <MDBBtn color="warning">Basic</MDBBtn>
                      <MDBBtn outline color="warning">
                        Advanced
                      </MDBBtn>
                    </MDBBtnGroup>
                  </MDBCol>
                </MDBRow>
                <form>
                  <h2
                    className="text-center text-info py-4"
                    style={styles.heading}
                  >
                    Enter Your Menu Items for{" "}
                    {<span className="text-warning">"{subCategory}"</span>}
                  </h2>
                  <MDBCol md="12">
                    <MDBInput
                      label="Item"
                      size="lg"
                      type="text"
                      name="menuItem"
                      value={this.state.name}
                      onChange={this.handleChange}
                      style={styles.input}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Price"
                      size="lg"
                      type="text"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Cost"
                      size="lg"
                      type="text"
                      name="cost"
                      value={this.state.cost}
                      onChange={this.handleChange}
                    />
                    <div>
                      <MDBInput
                        label="Add to Inventory"
                        type="checkbox"
                        filled
                      />
                    </div>
                    <div>
                      <MDBInput
                        label="Check ID"
                        type="checkbox"
                        filled
                      />
                    </div>
                    <div>
                      <h3>Tax:</h3>
                      <MDBFormInline>
                        <MDBInput
                          label="1"
                          type="checkbox"
                          id="checkbox1"
                          checked
                        />
                        <MDBInput label="2" type="checkbox" id="checkbox2" />
                        <MDBInput label="3" type="checkbox" id="checkbox3" />
                        <MDBInput
                          label="To-Go"
                          type="checkbox"
                          id="checkbox3"
                        />
                      </MDBFormInline>
                    </div>
                    <div>
                      <select className="browser-default custom-select">
                        <option>Course</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                      </select>
                    </div>
                    <div>
                      <select className="browser-default custom-select">
                        <option>Printer</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                      </select>
                    </div>
                    <div>
                      <select className="browser-default custom-select">
                        <option>Cook Screen</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                      </select>
                    </div>
                    <div>
                      <select className="browser-default custom-select">
                        <option>Expo Printer</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                      </select>
                    </div>
                    <div>
                      <select className="browser-default custom-select">
                        <option>Label Printer</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md="12">
                    {/* <div
                      className="text-center py-4 mt-3"
                      style={styles.btnBack}
                    > */}
                    <MDBBtn
                      outline
                      color="danger"
                      onClick={this.props.prevStep}
                      style={styles.btnBack}
                    >
                      <MDBIcon icon="arrow-left" className="mr-2" size="lg" />
                      Back
                    </MDBBtn>
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
                    {/* <div
                      className="text-center py-4 mt-3"
                      style={styles.btnSubmit}
                    > */}
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
