import React, { Component } from "react";

import BasicInfoForm from "./BasicInfoForm";
import MenuCategoryForm from "./MenuCategoryForm";
import MenuItemForm from "./MenuItemForm";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, categories: ["Appetizers", "Lunch"] };
    this.initialState = this.state;
  }
  formHandlerState = () => {
    return this.state;
  };
  nextStep = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ step: state.step - 1 }));
  };

  setCategories = category => {
    this.setState(
      state => ({ categories: [...state.categories, category] }),
      () => {
        console.log("Form Handler state after categories update ", this.state);
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
            setCategories={this.setCategories}
          />
        );
      case 2:
        return (
          <MenuItemForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            formHandlerState={this.formHandlerState}
          />
        );
      default:
        throw new Error("Form handler state is not valid");
    }
  }
}

export default FormHandler;
