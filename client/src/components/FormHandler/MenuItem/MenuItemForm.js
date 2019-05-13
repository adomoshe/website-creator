import React, { Component } from "react";
import {
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
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const currentItem =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].items[current.item];
    console.log(currentItem);

    this.state = {
      advanced: true,
      item: {
        name: currentItem.name,
        description: currentItem.description,
        price: currentItem.price,
        cost: currentItem.cost,
        addToInventory: currentItem.addToInventory,
        tax: {
          one: currentItem.tax.one,
          two: currentItem.tax.two,
          three: currentItem.tax.three,
          toGo: currentItem.tax.toGo
        },
        course: currentItem.course,
        printer: currentItem.printer,
        cookScreen: currentItem.cookScreen,
        expoPrinter: currentItem.expoPrinter,
        labelPrinter: currentItem.labelPrinter,
        options: {
          hideOnCart: currentItem.options.hideOnCart,
          disableDiscount: currentItem.options.disableDiscount,
          qtyPrompt: currentItem.options.qtyPrompt,
          checkAge: currentItem.options.checkAge,
          serviceItem: currentItem.options.serviceItem
        },
        belongsTo: {
          tableService: currentItem.belongsTo.tableService,
          quickServe: currentItem.belongsTo.quickServe,
          phoneOrder: currentItem.belongsTo.phoneOrder,
          driveThru: currentItem.belongsTo.driveThru,
          online: currentItem.belongsTo.online,
          party: currentItem.belongsTo.party,
          bar: currentItem.belongsTo.bar
        },
        comments: [currentItem.comments],
        modifiers: [
          {
            choicesLimit: currentItem.modifiers[0].choicesLimit,
            forced: currentItem.modifiers[0].forced,
            cost: currentItem.modifiers[0].cost,
            modifier: [...currentItem.modifiers[0].modifier]
          },
          {
            choicesLimit: currentItem.modifiers[1].choicesLimit,
            forced: currentItem.modifiers[1].forced,
            cost: currentItem.modifiers[1].cost,
            modifier: [...currentItem.modifiers[1].modifier]
          },
          {
            choicesLimit: currentItem.modifiers[2].choicesLimit,
            forced: currentItem.modifiers[2].forced,
            cost: currentItem.modifiers[2].cost,
            modifier: [...currentItem.modifiers[2].modifier]
          },
          {
            choicesLimit: currentItem.modifiers[3].choicesLimit,
            forced: currentItem.modifiers[3].forced,
            cost: currentItem.modifiers[3].cost,
            modifier: [...currentItem.modifiers[3].modifier]
          }
        ]
      }
    };
    this.initialState = this.state;
  }

  menuItemFormState = () => this.state;

  changeAdvancedView = e => {
    if (e.target.name === "basic") {
      this.setState({ advanced: false });
    } else {
      this.setState({ advanced: true });
    }
  };

  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    console.log(e.target);
    if (e.target.type === "number") {
      value = parseFloat(value);
    } else {
      value = value.trim().toUpperCase();
    }

    this.setState(
      state => (state.item[name] = value),
      () => {
        console.log(this.state);
      }
    );
  };

  handleCheckBox = checkBoxState => {
    const name = checkBoxState.name;
    const checked = checkBoxState.checked;
    const parent = checkBoxState.parent;
    const modalIndex = checkBoxState.modalIndex;

    if (parent) {
      this.setState(state => {
        state.item[parent][name] = checked;
      });
    } else if (modalIndex) {
      this.setState(state => {
        state.item.modifiers[modalIndex].forced = checked;
      });
    } else {
      this.setState(state => {
        state.item[name] = checked;
      });
    }
  };

  handleDropDown = dropDownState => {
    const name = dropDownState.name;
    const option = dropDownState.option;

    this.setState(state => {
      state.item[name] = option;
    });
  };

  setItem = e => {
    e.preventDefault();
    const item = this.state.item;
    this.props.menuBuilderSetItem(item);
    this.setState(this.initialState);
  };

  submit = e => {
    e.preventDefault();
    this.setState(this.initialState);
    this.props.nextStep();
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
      <MDBCol md="5">
        <MDBCard style={styles.card}>
          <MDBCardBody>
            <MDBCol className="mb-xl-0 mb-4 d-flex justify-content-center">
              <MDBBtnGroup>
                <MDBBtn
                  name="basic"
                  outline={state.advanced}
                  color={
                    state.advanced ? "blue-grey-text" : "deep-orange darken-4"
                  }
                  onClick={this.changeAdvancedView}
                >
                  Basic
                </MDBBtn>
                <MDBBtn
                  name="advanced"
                  outline={!state.advanced}
                  color={
                    !state.advanced ? "blue-grey-text" : "deep-orange darken-4"
                  }
                  onClick={this.changeAdvancedView}
                >
                  Advanced
                </MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
            <MDBCol>
              <h2 className="text-center text-info py-4" style={styles.heading}>
                Enter Your Menu Items for Sub-Category:{<br />}
                {<span className="deep-orange-text">"{subCategory}"</span>}
              </h2>
              <MDBInput
                label="Item"
                size="lg"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.item.name}
              />
              <MDBInput
                label="Price"
                size="lg"
                type="number"
                name="price"
                value={this.state.item.price}
                onChange={this.handleChange}
              />
              <MDBInput
                label="Cost"
                size="lg"
                type="number"
                name="cost"
                value={this.state.item.cost}
                onChange={this.handleChange}
              />
            </MDBCol>
            <MDBCol>
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
            </MDBCol>
            <MDBCol>
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
                    checked={this.state.item.tax.one}
                  />
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    parent="tax"
                    label="2"
                    name="two"
                    checked={this.state.item.tax.two}
                  />
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    parent="tax"
                    label="3"
                    name="three"
                    checked={this.state.item.tax.three}
                  />
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    parent="tax"
                    label="To Go"
                    name="toGo"
                    checked={this.state.item.tax.toGo}
                  />
                </MDBFormInline>
              </div>
            </MDBCol>

            {!state.advanced && (
              <>
                <MDBCol>
                  <hr />
                  <h5 className="text-center text-info py-4">
                    Turn on "Advanced" at the top to see more options
                  </h5>
                  <hr />
                </MDBCol>
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
                    onClick={this.setItem}
                    style={styles.btnAdd}
                    size="sm"
                  >
                    Add
                    <MDBIcon far icon="thumbs-up" className="ml-2" size="lg" />
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
                  value={this.state.item.description}
                />
                <DropDown
                  length={7}
                  label="Course"
                  name="course"
                  handleDropDown={this.handleDropDown}
                />
                <DropDown
                  length={7}
                  label="Printer"
                  name="printer"
                  handleDropDown={this.handleDropDown}
                />
                <DropDown
                  length={7}
                  label="Cook Screen"
                  name="cookScreen"
                  handleDropDown={this.handleDropDown}
                />
                <DropDown
                  length={7}
                  label="Expo Printer"
                  name="expoPrinter"
                  handleDropDown={this.handleDropDown}
                />
                <DropDown
                  length={3}
                  label="Label Printer"
                  name="labelPrinter"
                  handleDropDown={this.handleDropDown}
                />
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
                      checked={this.state.item.options.hideOnCart}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="options"
                      label="Disable discount"
                      name="disableDiscount"
                      checked={this.state.item.options.disableDiscount}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="options"
                      label="Quantity prompt"
                      name="qtyPrompt"
                      checked={this.state.item.options.qtyPrompt}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="options"
                      label="Service item"
                      name="serviceItem"
                      checked={this.state.item.options.serviceItem}
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
                      checked={this.state.item.belongsTo.tableService}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="belongsTo"
                      label="Quick serve"
                      name="quickServe"
                      checked={this.state.item.belongsTo.quickServe}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="belongsTo"
                      label="Phone order"
                      name="phoneOrder"
                      checked={this.state.item.belongsTo.phoneOrder}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="belongsTo"
                      label="Drive thru"
                      name="driveThru"
                      checked={this.state.item.belongsTo.driveThru}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="belongsTo"
                      label="Online"
                      name="online"
                      checked={this.state.item.belongsTo.online}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="belongsTo"
                      label="Party"
                      name="party"
                      checked={this.state.item.belongsTo.party}
                    />
                    <CheckBox
                      handleCheckBox={this.handleCheckBox}
                      parent="belongsTo"
                      label="Bar"
                      name="bar"
                      checked={this.state.item.belongsTo.bar}
                    />
                  </MDBFormInline>
                </div>
                <hr />
                <MDBInput
                  type="textarea"
                  label="Comments"
                  rows="1"
                  icon="pencil-alt"
                  value={this.state.item.comments}
                />
              </MDBCol>
              <MDBCol className="d-flex justify-content-center">
                <ModifierModal
                  number={1}
                  item={item}
                  menuItemFormState={this.menuItemFormState}
                  handleCheckBox={this.handleCheckBox}
                />
                <ModifierModal
                  number={2}
                  item={item}
                  menuItemFormState={this.menuItemFormState}
                  handleCheckBox={this.handleCheckBox}
                />
                <ModifierModal
                  number={3}
                  item={item}
                  menuItemFormState={this.menuItemFormState}
                  handleCheckBox={this.handleCheckBox}
                />
                <ModifierModal
                  number={4}
                  item={item}
                  menuItemFormState={this.menuItemFormState}
                  handleCheckBox={this.handleCheckBox}
                />
              </MDBCol>
              <MDBCol>
                <hr />
              </MDBCol>
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
                  onClick={this.setItem}
                  style={styles.btnAdd}
                  size="sm"
                >
                  Add
                  <MDBIcon far icon="thumbs-up" className="ml-2" size="lg" />
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
    );
  }
}

export default MenuItemForm;
