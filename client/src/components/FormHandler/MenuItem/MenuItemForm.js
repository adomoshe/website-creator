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

import ModifierModal from "./ModifierModal";
import CheckBox from "./CheckBox";

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
    fontSize: "1rem"
  },
  btnBack: {
    fontWeight: "900",
    fontSize: "1rem"
  },
  btnSubmit: {
    fontWeight: "900",
    fontSize: "1rem"
  },
  dropDown: {
    marginBottom: "0.5rem"
  },
  checkBoxGroup: { fontSize: "1.3rem" }
};

class MenuItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advanced: true,
      name: "",
      price: "",
      cost: ""
    };
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

  changeAdvancedView = e => {
    if (e.target.name === "basic") {
      this.setState({ advanced: false });
    } else {
      this.setState({ advanced: true });
    }
  };

  render() {
    const state = this.state;
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const subCategory =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].name;
    const item =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].items[current.item].name;
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard style={styles.card}>
              <MDBCardBody>
                <MDBCol
                  md="12"
                  className="mb-xl-0 mb-4 d-flex justify-content-center"
                >
                  <MDBBtnGroup>
                    <MDBBtn
                      name="basic"
                      outline={state.advanced}
                      color={
                        state.advanced
                          ? "blue-grey-text"
                          : "deep-orange darken-4"
                      }
                      onClick={this.changeAdvancedView}
                    >
                      Basic
                    </MDBBtn>
                    <MDBBtn
                      name="advanced"
                      outline={!state.advanced}
                      color={
                        !state.advanced
                          ? "blue-grey-text"
                          : "deep-orange darken-4"
                      }
                      onClick={this.changeAdvancedView}
                    >
                      Advanced
                    </MDBBtn>
                  </MDBBtnGroup>
                </MDBCol>
                <h2
                  className="text-center text-info py-4"
                  style={styles.heading}
                >
                  Enter Your Menu Items for Sub-Category:{<br />}
                  {<span className="deep-orange-text">"{subCategory}"</span>}
                </h2>
                <MDBCol md="12">
                  <MDBInput
                    label="Item"
                    size="lg"
                    type="text"
                    name="menuItem"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    label="Price"
                    size="lg"
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    label="Cost"
                    size="lg"
                    type="number"
                    name="cost"
                    value={this.state.cost}
                    onChange={this.handleChange}
                  />
                  <CheckBox label="Add to Inventory" />
                  <br />
                  <CheckBox label="Check ID" />
                  <div className={styles.checkBoxGroup}>
                    <h4>Tax</h4>
                    <MDBFormInline>
                      <CheckBox label="1" checked />
                      <CheckBox label="2" />
                      <CheckBox label="3" />
                      <CheckBox label="To Go" />
                    </MDBFormInline>
                  </div>
                </MDBCol>
                {!state.advanced && (
                  <>
                    <h5 className="text-center text-info py-4">
                      Turn on "Advanced" at the top to see more options
                    </h5>
                    <MDBCol md="12" className="d-flex justify-content-center">
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
                        onClick={this.setItem}
                        style={styles.btnAdd}
                        size="sm"
                      >
                        Add
                        <MDBIcon
                          far
                          icon="thumbs-up"
                          className="ml-2"
                          size="lg"
                        />
                      </MDBBtn>
                      <MDBBtn
                        outline
                        color="info"
                        type="submit"
                        onClick={this.submit}
                        style={styles.btnSubmit}
                        size="sm"
                      >
                        Continue
                        <MDBIcon
                          icon="arrow-right"
                          className="ml-2"
                          size="lg"
                        />
                      </MDBBtn>
                    </MDBCol>
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
            {state.advanced && (
              <MDBCard style={styles.card}>
                <MDBCardBody>
                  <MDBCol>
                    <h2 className="deep-orange-text text-center py-4">
                      Advanced Options
                    </h2>
                    <MDBInput
                      type="textarea"
                      label="Item Description"
                      rows="1"
                      icon="pencil-alt"
                    />
                    <div style={styles.dropDown}>
                      <select className="browser-default custom-select">
                        <option value="1">Course #1</option>
                        <option value="2">Course #2</option>
                        <option value="3">Course #3</option>
                        <option value="4">Course #4</option>
                        <option value="5">Course #5</option>
                        <option value="6">Course #6</option>
                        <option value="7">Course #7</option>
                      </select>
                    </div>
                    <div style={styles.dropDown}>
                      <select className="browser-default custom-select">
                        <option value="1">Printer #1</option>
                        <option value="2">Printer #2</option>
                        <option value="3">Printer #3</option>
                        <option value="4">Printer #4</option>
                        <option value="5">Printer #5</option>
                        <option value="6">Printer #6</option>
                        <option value="7">Printer #7</option>
                      </select>
                    </div>
                    <div style={styles.dropDown}>
                      <select className="browser-default custom-select">
                        <option value="1">Cook Screen #1</option>
                        <option value="2">Cook Screen #2</option>
                        <option value="3">Cook Screen #3</option>
                        <option value="4">Cook Screen #4</option>
                        <option value="5">Cook Screen #5</option>
                        <option value="6">Cook Screen #6</option>
                        <option value="7">Cook Screen #7</option>
                      </select>
                    </div>
                    <div style={styles.dropDown}>
                      <select className="browser-default custom-select">
                        <option value="1">Expo Printer #1</option>
                        <option value="2">Expo Printer #2</option>
                        <option value="3">Expo Printer #3</option>
                        <option value="4">Expo Printer #4</option>
                        <option value="5">Expo Printer #5</option>
                        <option value="6">Expo Printer #6</option>
                        <option value="7">Expo Printer #7</option>
                      </select>
                    </div>
                    <div style={styles.dropDown}>
                      <select className="browser-default custom-select">
                        <option value="1">Label Printer #1</option>
                        <option value="2">Label Printer #2</option>
                        <option value="3">Label Printer #3</option>
                      </select>
                    </div>
                    <div>
                      <label>Options:</label>
                      <MDBFormInline>
                        <MDBInput label="Hide on cart" type="checkbox" />
                        <MDBInput label="Disable discount" type="checkbox" />
                        <MDBInput label="Quantity prompt" type="checkbox" />
                        <MDBInput label="Service Item" type="checkbox" />
                      </MDBFormInline>
                    </div>
                    <div>
                      <label>Belongs To:</label>
                      <MDBFormInline>
                        <MDBInput
                          label="Table Service"
                          type="checkbox"
                          checked
                        />
                        <MDBInput label="Quick Serve" type="checkbox" checked />
                        <MDBInput label="Phone Order" type="checkbox" checked />
                        <MDBInput label="Drive Thru" type="checkbox" />
                        <MDBInput label="Online" type="checkbox" />
                        <MDBInput label="Party" type="checkbox" />
                        <MDBInput label="Bar" type="checkbox" />
                      </MDBFormInline>
                    </div>
                    <MDBInput
                      type="textarea"
                      label="Comments"
                      rows="1"
                      icon="pencil-alt"
                    />
                  </MDBCol>
                  <MDBCol className="d-flex justify-content-center">
                    <ModifierModal number={1} item={item} />
                    <ModifierModal number={2} item={item} />
                    <ModifierModal number={3} item={item} />
                    <ModifierModal number={4} item={item} />
                  </MDBCol>
                  <br />
                  <MDBCol md="12" className="d-flex justify-content-center">
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
                      onClick={this.setItem}
                      style={styles.btnAdd}
                      size="sm"
                    >
                      Add
                      <MDBIcon
                        far
                        icon="thumbs-up"
                        className="ml-2"
                        size="lg"
                      />
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="info"
                      type="submit"
                      onClick={this.submit}
                      style={styles.btnSubmit}
                      size="sm"
                    >
                      Continue
                      <MDBIcon icon="arrow-right" className="ml-2" size="lg" />
                    </MDBBtn>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MenuItemForm;
