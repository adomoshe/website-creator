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
  btnComment: {
    borderRadius: 10
  },
  checkBoxGroup: { fontSize: "1.3rem" },
  commentBtn: { padding: "0.8rem" }
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

    const itemModel = JSON.parse(
      JSON.stringify(MenuModel.categories[0].subCategories[0].items[0])
    );

    const itemState = currentItem || itemModel;

    this.state = {
      currentComment: "",
      currentCommentIndex: null,
      advanced: false,
      item: itemState,
      name: itemState.name,
      cost: itemState.cost,
      price: itemState.price
    };

    this.initialState = this.state;
  }

  componentDidUpdate(nextProps, nextState) {
    console.log(
      "componentDidUpdate in MenuItemForm nextProps: ",
      nextProps,
      "nextState item: ",
      nextState.item.name
    );

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
    console.log("componentDidUpdate in MenuItemForm itemState: ", itemState);

    if (nextState.item.name !== itemState.name) {
      console.log("COMPONENTDIDUPDATE IN MENUITEMFORM UPDATING");
      this.setState(
        {
          advanced: false,
          item: itemState,
          name: itemState.name,
          cost: itemState.cost,
          price: itemState.price
        },
        () => {
          this.forceUpdate();
        }
      );
    } else {
      console.log("COMPONENTDIDUPDATE IN MENUITEMFORM  NOT  UPDATING");
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

    if (e.target.type === "number") {
      value = parseFloat(value);
    } else {
      value = value.toUpperCase();
    }

    this.setState({ [name]: value });
  };

  handleCheckBox = checkBoxState => {
    const name = checkBoxState.name;
    const checked = checkBoxState.checked;
    const parent = checkBoxState.parent;

    if (parent) {
      this.setState(state => {
        state.item[parent][name] = checked;
      });
    } else {
      this.setState(state => {
        state.item[name] = checked;
      });
    }
  };

  handleDropDown = dropDownState => {
    const name = dropDownState.name;
    const value = dropDownState.value;

    this.setState(state => {
      state.item[name] = value;
    });
  };

  setModifier = (modalState, modalIndex) => {
    this.setState(state => (state.item.modifiers[modalIndex] = modalState));
  };

  setItem = e => {
    e.preventDefault();
    const item = this.state.item;
    const state = this.state;

    item.name = state.name;
    item.price = state.price;
    item.cost = state.cost;

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
  };

  handleCommentChange = e => {
    const value = e.target.value.toUpperCase();

    this.setState({ currentComment: value });
  };

  setComment = commentIndex => {
    this.setState(state => ({
      currentComment: state.item.comments[commentIndex],
      currentCommentIndex: commentIndex
    }));
  };

  newComment = () => {
    this.setState(state => ({
      currentComment: "",
      currentCommentIndex: state.item.comments.length
    }));
  };

  addComment = () => {
    const state = this.state;

    if (state.currentComment.length < 3) {
      alert("Please write a comment longer than 3 characters");
      return;
    } else {
      if (state.currentCommentIndex === state.item.comments.length - 1) {
        this.setState(state =>
          state.item.comments.push(state.currentComment.trim())
        );
      } else {
        this.setState(
          state =>
            (state.item.comments[
              state.currentCommentIndex
            ] = state.currentComment.trim())
        );
      }
    }
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

    console.log("MenuItemForm rendering with state: ", state);

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
                    value={state.name}
                  />
                  <MDBInput
                    label="Price"
                    size="lg"
                    type="number"
                    name="price"
                    value={state.price}
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    label="Cost"
                    size="lg"
                    type="number"
                    name="cost"
                    value={state.cost}
                    onChange={this.handleChange}
                  />
                </MDBCol>
                <MDBCol>
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    label="Add to Inventory"
                    name="addToInventory"
                    checked={state.item.addToInventory}
                  />
                  <br />
                  <CheckBox
                    handleCheckBox={this.handleCheckBox}
                    label="Check ID"
                    name="checkId"
                    parent="options"
                    checked={state.item.options.checkId}
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
                  {/* <MDBInput
                    type="textarea"
                    label="Item Description"
                    rows="1"
                    icon="pencil-alt"
                    value={state.item.description}
                  /> */}
                  <DropDown
                    length={7}
                    label="Course"
                    name="course"
                    handleDropDown={this.handleDropDown}
                    value={state.item.course}
                  />
                  <DropDown
                    length={7}
                    label="Printer"
                    name="printer"
                    handleDropDown={this.handleDropDown}
                    value={state.item.printer}
                  />
                  <DropDown
                    length={7}
                    label="Cook Screen"
                    name="cookScreen"
                    handleDropDown={this.handleDropDown}
                    value={state.item.cookScreen}
                  />
                  <DropDown
                    length={7}
                    label="Expo Printer"
                    name="expoPrinter"
                    handleDropDown={this.handleDropDown}
                    value={state.item.expoPrinter}
                  />
                  <DropDown
                    length={3}
                    label="Label Printer"
                    name="labelPrinter"
                    handleDropDown={this.handleDropDown}
                    value={state.item.labelPrinter}
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
                  {state.item.comments.map((name, index) => (
                    <MDBBtn
                      key={index}
                      color="info"
                      style={styles.commentBtn}
                      onClick={() => {
                        this.setComment(index);
                      }}
                    >
                      {name || "NEW"}
                    </MDBBtn>
                  ))}
                  <MDBBtn
                    color="orange"
                    style={styles.modalBtn}
                    onClick={this.newComment}
                  >
                    <MDBIcon
                      icon="plus"
                      size="lg"
                      inverse
                      style={styles.icon}
                    />
                  </MDBBtn>
                  <MDBInput
                    type="textarea"
                    label="Comments"
                    rows="1"
                    icon="pencil-alt"
                    onChange={this.handleCommentChange}
                    value={state.currentComment}
                  />
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                  <MDBBtn
                    color="success"
                    style={styles.btnComment}
                    onClick={this.addComment}
                  >
                    Save Comment
                  </MDBBtn>
                </MDBCol>
                <hr />
                <MDBCol className="d-flex justify-content-center">
                  <ModifierModal
                    number={1}
                    item={item}
                    menuItemFormState={this.menuItemFormState}
                    handleCheckBox={this.handleCheckBox}
                    setModifier={this.setModifier}
                  />
                  <ModifierModal
                    number={2}
                    item={item}
                    menuItemFormState={this.menuItemFormState}
                    handleCheckBox={this.handleCheckBox}
                    setModifier={this.setModifier}
                  />
                  <ModifierModal
                    number={3}
                    item={item}
                    menuItemFormState={this.menuItemFormState}
                    handleCheckBox={this.handleCheckBox}
                    setModifier={this.setModifier}
                  />
                  <ModifierModal
                    number={4}
                    item={item}
                    menuItemFormState={this.menuItemFormState}
                    handleCheckBox={this.handleCheckBox}
                    setModifier={this.setModifier}
                  />
                </MDBCol>
                <hr />
                <h5 className="text-center text-info py-4">
                  Turn on "Basic" at the top to see basic options
                </h5>
              </>
            )}
            <MDBCol> </MDBCol>
            <hr />
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

        {/* <MDBCard style={styles.card}>
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
        </MDBCard> */}
      </>
    );
  }
}

export default MenuItemForm;
