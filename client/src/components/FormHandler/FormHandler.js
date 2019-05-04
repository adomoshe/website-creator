import React, { Component } from "react";

import BasicInfoForm from "./BasicInfoForm";
import MenuCategoryForm from "./MenuCategoryForm";
import MenuSubCategoryForm from "./MenuSubCategoryForm";
import MenuItemForm from "./MenuItemForm";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    this.initialState = this.state;
  }

  nextStep = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ step: state.step - 1 }));
  };

  setItem = item => {
    this.setState(
      state => ({ items: [...state.items, item] }),
      () => {
        console.log("Form Handler state after item update ", this.state);
      }
    );
  };

  render() {
    switch (this.state.step) {
      case 0:
        return <BasicInfoForm nextStep={this.nextStep} />;
      case 1:
        return (
          <MenuCategoryForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            menuBuilderSetCategory={this.props.menuBuilderSetCategory}
            menuBuilderState={this.props.menuBuilderState}
          />
        );
      case 2:
        return (
          <MenuSubCategoryForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            menuBuilderState={this.props.menuBuilderState}
            menuBuilderSetSubCategory={this.props.menuBuilderSetSubCategory}
          />
        );
        case 3:
        return (
          <MenuItemForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            menuBuilderState={this.props.menuBuilderState}
            menuBuilderSetItem={this.props.menuBuilderSetItem}
          />
        );
      default:
        throw new Error("Form handler state is not valid");
    }
  }
}

export default FormHandler;
