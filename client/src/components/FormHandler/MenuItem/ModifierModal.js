import React, { Component } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

import CheckBox from "./CheckBox";

import MenuModel from "../../MenuModel";

const styles = {
  heading: {
    fontWeight: "500"
  },
  btns: {
    borderRadius: 10,
    marginRight: "0.5rem"
  },
  modalBtn: { padding: "0.8rem" }
};

class ModifierModal extends Component {
  constructor(props) {
    super(props);

    const menuItemFormState = this.props.menuItemFormState();
    const modalIndex = this.props.number - 1;
    const menuItemModifierState = menuItemFormState.item.modifiers[modalIndex];

    this.state = {
      modal: false,
      modalIndex: modalIndex,
      modifierIndex: 0,
      currentModifier: {
        choicesLimit: menuItemModifierState.choicesLimit,
        forced: menuItemModifierState.forced,
        modifier: [...menuItemModifierState.modifier]
      }
    };
    console.log(menuItemModifierState);
  }

  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "number") {
      value = parseFloat(value);
    } else {
      value = value.trim().toUpperCase();
    }

    if (name === "choicesLimit") {
      this.setState(state => (state.currentModifier[name] = value));
    } else {
      this.setState(
        state => {
          state.currentModifier.modifier[state.modifierIndex][name] = value;
        },
        () => {
          this.forceUpdate();
        }
      );
    }
  };

  handleCurrentModifier = modifierIndex => {
    this.setState({ modifierIndex });
  };

  newModifier = () => {
    const modalIndex = this.props.number - 1;
    const modifierMenuModel = JSON.parse(JSON.stringify(MenuModel));
    const modifierModel = modifierMenuModel.categories[0].subCategories[0].items[0].modifiers[modalIndex].modifier;

    this.setState(state => ({
      modifierIndex: state.currentModifier.modifier.length
    }));

    this.setState(
      state =>
        (state.currentModifier.modifier = [
          ...state.currentModifier.modifier,
          ...modifierModel
        ])
    );
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const props = this.props;
    const state = this.state;
    const modalIndex = this.state.modalIndex;
    const modifierIndex = this.state.modifierIndex;
    const menuItemFormState = this.props.menuItemFormState();
    const menuItemModifierState = menuItemFormState.item.modifiers[modalIndex];
    const currentSubModifier =
      state.currentModifier.modifier[modifierIndex] || null;
    console.log(state.currentModifier.modifier);

    return (
      <>
        <MDBBtn color="success" style={styles.modalBtn} onClick={this.toggle}>
          Modifier {props.number}
          {(props.number === 2 || props.number === 3) && " + $"}
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalBody>
            <h2 className="text-center text-info py-4" style={styles.heading}>
              Modifier {props.number} for{<br />}
              {<span className="deep-orange-text">"{props.item}"</span>}
            </h2>
            <MDBCol>
              {menuItemModifierState.modifier.map(({ name }, index) => (
                <MDBBtn
                  key={index}
                  color="info"
                  style={styles.modalBtn}
                  onClick={() => {
                    this.handleCurrentModifier(index);
                  }}
                >
                  {name || "NEW"}
                </MDBBtn>
              ))}
              <MDBBtn
                color="orange"
                style={styles.modalBtn}
                onClick={this.newModifier}
              >
                <MDBIcon
                  icon="plus"
                  size="lg"
                  inverse
                  style={styles.icon}
                  onClick={this.newModifier}
                />
              </MDBBtn>
              <MDBInput
                label="Modifier Name"
                size="lg"
                type="text"
                name="name"
                value={currentSubModifier ? currentSubModifier.name : ""}
                onChange={this.handleChange}
              />
              {props.number === 2 || props.number === 3 ? (
                <MDBInput
                  label="Price"
                  size="lg"
                  type="number"
                  name="price"
                  value={currentSubModifier ? currentSubModifier.price : ""}
                  onChange={this.handleChange}
                />
              ) : null}
              <MDBInput
                label="Cost"
                size="lg"
                type="number"
                name="cost"
                value={currentSubModifier ? currentSubModifier.cost : ""}
                onChange={this.handleChange}
              />
            </MDBCol>
            <MDBCol>
              <h2 className="text-center text-info py-4" style={styles.heading}>
                Modifier {props.number}{" "}
              </h2>
              <MDBInput
                label="Choices Limit"
                size="lg"
                type="number"
                name="choicesLimit"
                value={state.currentModifier.choicesLimit}
                onChange={this.handleChange}
              />
              <CheckBox
                label="Forced"
                name="forced"
                modalIndex={modalIndex}
                handleCheckBox={props.handleCheckBox}
                checked={state.currentModifier.forced}
              />
            </MDBCol>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={this.toggle} style={styles.btns}>
              Close
            </MDBBtn>
            <MDBBtn color="success" style={styles.btns}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ModifierModal;
