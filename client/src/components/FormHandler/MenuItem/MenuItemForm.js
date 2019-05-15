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

import MenuModel from "../../MenuModel";

const styles = {
  card: {
    marginTop: "4rem",
    marginBottom: "4rem"
  },
  heading: {
    fontSize: "1rem",
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

    const itemModel = JSON.parse(
      JSON.stringify(MenuModel.categories[0].subCategories[0].items[0])
    );

    this.state = {
      advanced: false,
      item: itemModel
    };

    this.initialState = this.state;
  }

  componentDidUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    const menuBuilderState = nextProps.menuBuilderState();
    const current = menuBuilderState.current;
    const currentItem =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].items[current.item];

    const itemModel = JSON.parse(
      JSON.stringify(MenuModel.categories[0].subCategories[0].items[0])
    );

    const itemState = currentItem || itemModel;

    if (JSON.stringify(nextState.item) !== JSON.stringify(itemState)) {
      this.setState({ advanced: false, item: itemState });
    }
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

    if (item.name.length < 3) {
      alert("Please enter an item name longer than 3 letters");
      return;
    } else if (!item.price) {
      alert("Please enter an item price");
      return;
    }

    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const itemArrLen =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].items.length;

    if (current.item > itemArrLen) {
      this.props.menuBuilderSetItem(item, true);
    } else {
      this.props.menuBuilderSetItem(item);
    }
    this.setState(this.initialState);
  };

  submit = e => {
    e.preventDefault();
    this.setState(this.initialState);
    this.props.nextStep();
  };

  render() {
    const state = this.state;
    const item = state.item;

    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const subCategory =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].name;

    const category = menuBuilderState.categories[current.category].name;
    console.log("MenuItemForm item: ", item);

    return (
      <>
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

            {!state.advanced && (
              <>
                <MDBCol>
                  <h2 className="deep-orange-text text-center py-4">
                    Basic Options
                  </h2>
                  <h4
                    className="text-center text-info py-4"
                    style={styles.heading}
                  >
                    Enter Your Menu Items for Category{" "}
                    {
                      <span className="deep-orange-text">
                        {}"{category}"
                      </span>
                    }{" "}
                    and Sub-Category:{" "}
                    {
                      <span className="deep-orange-text">
                        {}"{subCategory}"
                      </span>
                    }
                  </h4>
                  <MDBInput
                    label="Item"
                    size="lg"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={state.item.name}
                  />
                  <MDBInput
                    label="Price"
                    size="lg"
                    type="number"
                    name="price"
                    value={state.item.price}
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    label="Cost"
                    size="lg"
                    type="number"
                    name="cost"
                    value={state.item.cost}
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
                        checked={state.item.tax.one}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="2"
                        name="two"
                        checked={state.item.tax.two}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="3"
                        name="three"
                        checked={state.item.tax.three}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="tax"
                        label="To Go"
                        name="toGo"
                        checked={state.item.tax.toGo}
                      />
                    </MDBFormInline>
                  </div>
                </MDBCol>
                <MDBCol>
                  <hr />
                  <h5 className="text-center text-info py-4">
                    Turn on "Advanced" at the top to see more options
                  </h5>
                </MDBCol>
              </>
            )}

            {state.advanced && (
              <>
                <MDBCol>
                  <h2 className="deep-orange-text text-center py-4">
                    Advanced Options
                  </h2>
                  <h4
                    className="text-center text-info py-4"
                    style={styles.heading}
                  >
                    Enter Your Menu Items for Category{" "}
                    {
                      <span className="deep-orange-text">
                        {}"{category}"
                      </span>
                    }{" "}
                    and Sub-Category:{" "}
                    {
                      <span className="deep-orange-text">
                        {}"{subCategory}"
                      </span>
                    }
                  </h4>
                  <MDBInput
                    type="textarea"
                    label="Item Description"
                    rows="1"
                    icon="pencil-alt"
                    value={state.item.description}
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
                        checked={state.item.options.hideOnCart}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="options"
                        label="Disable discount"
                        name="disableDiscount"
                        checked={state.item.options.disableDiscount}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="options"
                        label="Quantity prompt"
                        name="qtyPrompt"
                        checked={state.item.options.qtyPrompt}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="options"
                        label="Service item"
                        name="serviceItem"
                        checked={state.item.options.serviceItem}
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
                        checked={state.item.belongsTo.tableService}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="belongsTo"
                        label="Quick serve"
                        name="quickServe"
                        checked={state.item.belongsTo.quickServe}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="belongsTo"
                        label="Phone order"
                        name="phoneOrder"
                        checked={state.item.belongsTo.phoneOrder}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="belongsTo"
                        label="Drive thru"
                        name="driveThru"
                        checked={state.item.belongsTo.driveThru}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="belongsTo"
                        label="Online"
                        name="online"
                        checked={state.item.belongsTo.online}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="belongsTo"
                        label="Party"
                        name="party"
                        checked={state.item.belongsTo.party}
                      />
                      <CheckBox
                        handleCheckBox={this.handleCheckBox}
                        parent="belongsTo"
                        label="Bar"
                        name="bar"
                        checked={state.item.belongsTo.bar}
                      />
                    </MDBFormInline>
                  </div>
                  <hr />
                  <MDBInput
                    type="textarea"
                    label="Comments"
                    rows="1"
                    icon="pencil-alt"
                    value={state.item.comments}
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
                <hr />
                <h5 className="text-center text-info py-4">
                  Turn on "Basic" at the top to see basic options
                </h5>
              </>
            )}
            <MDBCol>
              {" "}
              <hr />
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBBtn
                outline
                color="success"
                type="submit"
                onClick={this.setItem}
                style={styles.btnAdd}
                size="lg"
              >
                Add
                <MDBIcon far icon="thumbs-up" className="ml-2" size="lg" />
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>

        <MDBCard style={styles.card}>
          <MDBCardBody>
            <MDBCol className="d-flex justify-content-center">
              <MDBBtn
                outline
                color="danger"
                onClick={this.props.prevStep}
                style={styles.btnBack}
                size="lg"
              >
                <MDBIcon icon="arrow-left" className="mr-2" size="lg" />
                Back
              </MDBBtn>
              <MDBBtn
                outline
                color="info"
                type="submit"
                onClick={this.submit}
                style={styles.btnSubmit}
                size="lg"
              >
                Continue
                <MDBIcon icon="arrow-right" className="ml-2" size="lg" />
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }
}

export default MenuItemForm;
