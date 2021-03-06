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
    const currentModifier = menuItemFormState.item.modifiers[modalIndex];

    const modifierModel = JSON.parse(
      JSON.stringify(
        MenuModel.categories[0].subCategories[0].items[0].modifiers[modalIndex]
          .modifier
      )
    );

    const modifierState = currentModifier || modifierModel;

    this.state = {
      modal: false,
      modalIndex: modalIndex,
      subModifierIndex: 0,
      currentModifier: modifierState
    };
  }

  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "number") {
      value = parseFloat(value);
    } else {
      value = value.toUpperCase();
    }

    if (name === "choicesLimit") {
      this.setState(state => (state.currentModifier.choicesLimit = value));
    } else {
      this.setState(
        state => {
          state.currentModifier.modifier[state.subModifierIndex][name] = value;
        },
        () => {
          this.forceUpdate();
        }
      );
    }
  };

  handleCurrentModifier = subModifierIndex => {
    this.setState({ subModifierIndex });
  };

  newModifier = () => {
    const state = this.state;
    const props = this.props;
    const lastSubModifier =
      state.currentModifier.modifier[state.currentModifier.modifier.length - 1];

      if (lastSubModifier.name.length < 3) {
      alert(
        'Please give your last "NEW" modifier a name longer than 3 letters before starting a new one'
      );
      this.setState(state => ({
        subModifierIndex: state.currentModifier.modifier.length - 1
      }));
      return;
    } else if (
      !lastSubModifier.price &&
      (props.number === 2 || props.number === 3)
    ) {
      alert(
        'Please give your last "NEW" modifier a price before starting a new one OR enter this as a free modifier in modifier 1 or 4'
      );
      this.setState(state => ({
        subModifierIndex: state.currentModifier.modifier.length - 1
      }));
      return;
    } else {
      const modifierModel = JSON.parse(
        JSON.stringify(
          MenuModel.categories[0].subCategories[0].items[0].modifiers[
            state.modalIndex
          ].modifier
        )
      );

      this.setState(state => ({
        subModifierIndex: state.currentModifier.modifier.length
      }));
      this.setState(
        state =>
          (state.currentModifier.modifier = [
            ...state.currentModifier.modifier,
            ...modifierModel
          ])
      );
    }
  };

  //   const state = this.state;
  //   const props = this.props;
  //   const currentSubModifier =
  //     state.currentModifier.modifier[state.subModifierIndex];

  //   if (currentSubModifier.name.length < 3) {
  //     alert("Please enter a modifier name longer than 3 letters");
  //     return;
  //   } else if (
  //     !currentSubModifier.price &&
  //     (props.number === 2 || props.number === 3)
  //   ) {
  //     alert(
  //       "Please enter a modifier price or enter this as a free modifier in modifier 1 or 4"
  //     );
  //     return;
  //   } else {
  //     const modifierModel = JSON.parse(
  //       JSON.stringify(
  //         MenuModel.categories[0].subCategories[0].items[0].modifiers[
  //           state.modalIndex
  //         ].modifier
  //       )
  //     );

  //     this.setState(
  //       state => (
  //         (state.subModifierIndex = state.currentModifier.modifier.length,
  //         state.currentModifier.modifier = [
  //           ...state.currentModifier.modifier,
  //           ...modifierModel
  //         ])
  //       )
  //     );
  //   }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleCheckBox = checkBoxState => {
    const checked = checkBoxState.checked;

    this.setState(state => {
      state.currentModifier.forced = checked;
    });
  };

  addSubModifier = () => {
    const props = this.props;
    const state = this.state;
    const currentSubModifier =
      state.currentModifier.modifier[state.subModifierIndex];

    if (currentSubModifier.name.length < 3) {
      alert("Please enter a modifier name longer than 3 letters");
      return;
    } else if (
      !currentSubModifier.price &&
      (props.number === 2 || props.number === 3)
    ) {
      alert(
        "Please enter a modifier price or enter this as a free modifier in modifier 1 or 4"
      );
      return;
    } else {
      this.setState(
        state => state.currentModifier.modifier[state.subModifierIndex]
      );
    }
  };

  setModifier = () => {
    this.props.setModifier(
      this.state.currentModifier,
      this.state.subModifierIndex
    );
    this.toggle();
  };

  render() {
    const props = this.props;
    const state = this.state;
    const modalIndex = state.modalIndex;
    const subModifierIndex = state.subModifierIndex;
    const menuItemFormState = props.menuItemFormState();
    const menuItemModifierState = menuItemFormState.item.modifiers[modalIndex];
    const currentSubModifier = state.currentModifier.modifier[subModifierIndex];
    console.log("ModifierModal currentSubModifier ", currentSubModifier);

    return (
      <>
        <MDBBtn color="info" outline style={styles.modalBtn} onClick={this.toggle}>
          Modifier {props.number}
          {(props.number === 2 || props.number === 3) && " + $"}
        </MDBBtn>

        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalBody>
            <h2 className="text-center text-info py-4" style={styles.heading}>
              Modifier {props.number} for{<br />}
              <span className="deep-orange-text">"{props.item.name}"</span>
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
                value={currentSubModifier.name}
                onChange={this.handleChange}
              />
              {props.number === 2 || props.number === 3 ? (
                <MDBInput
                  label="Price"
                  size="lg"
                  type="number"
                  name="price"
                  value={currentSubModifier.price}
                  onChange={this.handleChange}
                />
              ) : null}
              <MDBInput
                label="Cost"
                size="lg"
                type="number"
                name="cost"
                value={currentSubModifier.cost}
                onChange={this.handleChange}
              />
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBBtn
                color="success"
                style={styles.btns}
                onClick={this.addSubModifier}
              >
                Save
              </MDBBtn>
            </MDBCol>
            <MDBCol>
              <hr />
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
                handleCheckBox={this.handleCheckBox}
                checked={state.currentModifier.forced}
              />
            </MDBCol>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={this.toggle} style={styles.btns}>
              Close
            </MDBBtn>
            <MDBBtn
              color="success"
              style={styles.btns}
              onClick={this.setModifier}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ModifierModal;
