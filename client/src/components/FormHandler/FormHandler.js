import React, { Component } from "react";

import BasicInfoForm from "./BasicInfoForm";
import MenuCategoryForm from "./MenuCategoryForm";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, categories: [] };
    this.initialState = this.state;
  }
  nextStep = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ step: state.step - 1 }));
  };

  setCategories = category => {
    this.setState(state => ({ categories: state.categories.push(category) }));
    console.log("Form Handler state after categories update ", this.state);
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
      default:
        throw new Error("Form handler state is not valid");
    }
  }
}

export default FormHandler;
