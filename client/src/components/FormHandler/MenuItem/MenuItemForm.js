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
import DropDown from "./DropDown";

import categoryModel from "../../categoryModel";

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
  checkBoxGroup: { fontSize: "1.3rem" }
};

class MenuItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advanced: true,
      item: {
        name: "",
        description: "",
        price: "",
        cost: "",
        addToInventory: false,
        tax: { one: true, two: false, three: false, toGo: false },
        course: 1,
        printer: 1,
        cookScreen: 1,
        expoPrinter: 1,
        labelPrinter: 1,
        options: {
          hideOnCart: false,
          disableDiscount: false,
          qtyPrompt: false,
          checkAge: false,
          serviceItem: false
        },
        belongsTo: {
          tableService: true,
          quickServe: true,
          phoneOrder: true,
          driveThru: false,
          online: false,
          party: false,
          bar: false
        },
        comments: [],
        modifiers: [
          {
            choicesLimit: null,
            forced: false,
            cost: null,
            modifier: [{ name: "" }]
          },
          {
            choicesLimit: null,
            forced: false,
            cost: null,
            modifier: [{ name: "", price: null }]
          },
          {
            choicesLimit: null,
            forced: false,
            cost: null,
            modifier: [{ name: "", price: null }]
          },
          {
            choicesLimit: null,
            forced: false,
            cost: null,
            modifier: [{ name: "" }]
          }
        ]
      }
    };
    this.initialState = this.state;
    this.prevStep = this.props.prevStep.bind(this);
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    this.setState({ [name]: value });
  };

  handleCheckBox = checkBoxState => {
    const name = checkBoxState.name;
    const checked = checkBoxState.checked;
    const parent = checkBoxState.parent || null;
    const currentItemState = this.state;

    let modifiedCurrentItemState;
    if (parent) {
      modifiedCurrentItemState = () => {
        currentItemState.item[parent][name] = checked;
      };
    } else {
      modifiedCurrentItemState = () => {
        currentItemState.item[name] = checked;
      };
    }

    this.setState(modifiedCurrentItemState, () => {
      console.log(this.state);
    });
  };

  handleDropDown = dropDownState => {
console.log(dropDownState)
  }

  setItem = e => {
    e.preventDefault();
    const item = this.state.item.trim().toUpperCase();
    this.props.menuBuilderSetItem(item);
    this.setState(this.initialState);
  };

  submit = e => {
    e.preventDefault();
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
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    label="Add to Inventory"
                    name="addToInventory"
                  />
                  <br />
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    label="Check ID"
                    name="checkId"
                  />
                  <br />
                  <div>
                    <label className="deep-orange-text text-center">Tax</label>
                    <hr />
                    <MDBFormInline>
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="1"
                        name="one"
                        checked
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="2"
                        name="two"
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="3"
                        name="three"
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="To Go"
                        name="toGo"
                      />
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
                    <DropDown length={7} label="Course" handleDropDown={this.handleDropDown} />
                    <DropDown length={7} label="Printer" handleDropDown={this.handleDropDown} />
                    <DropDown length={7} label="Cook Screen" handleDropDown={this.handleDropDown} />
                    <DropDown length={7} label="Expo Printer" handleDropDown={this.handleDropDown} />
                    <DropDown length={3} label="Label Printer" handleDropDown={this.handleDropDown} />
                    <br />
                    <div>
                      <label className="deep-orange-text">Options</label>
                      <hr />
                      <MDBFormInline>
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="options"
                          label="Hide on cart"
                          name="hideOnCart"
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="options"
                          label="Disable discount"
                          name="disableDiscount"
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="options"
                          label="Quantity prompt"
                          name="qtyPrompt"
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="options"
                          label="Service item"
                          name="serviceItem"
                        />
                      </MDBFormInline>
                    </div>
                    <br />
                    <div>
                      <label className="deep-orange-text">Belongs to</label>
                      <hr />
                      <MDBFormInline>
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Table service"
                          name="tableService"
                          checked
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Quick serve"
                          name="quickServe"
                          checked
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Phone order"
                          name="phoneServer"
                          checked
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Drive thru"
                          name="driveThru"
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Online"
                          name="online"
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Party"
                          name="party"
                        />
                        <CheckBox
                          handleCheckBox={this.handleCheckBox}
                          parent="belongsTo"
                          label="Bar"
                          name="bar"
                        />
                      </MDBFormInline>
                    </div>
                    <hr />
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
                  <MDBCol>
                    <hr />
                  </MDBCol>
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
