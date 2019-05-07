import React, { Component } from "react";

import BasicInfoForm from "./BasicInfoForm";
import MenuCategoryForm from "./MenuCategoryForm";
import MenuSubCategoryForm from "./MenuSubCategoryForm";
import MenuItemForm from "./MenuItem/MenuItemForm";

class FormHandler extends Component {
  render() {
    const menuBuilderState = this.props.menuBuilderState()
    switch (menuBuilderState.formStep) {
      case 0:
        return <BasicInfoForm nextStep={this.props.nextFormStep} />;
      case 1:
        return (
          <MenuCategoryForm
            nextStep={this.props.nextFormStep}
            prevStep={this.props.prevFormStep}
            menuBuilderSetCategory={this.props.menuBuilderSetCategory}
            menuBuilderState={this.props.menuBuilderState}
          />
        );
      case 2:
        return (
          <MenuSubCategoryForm
            nextStep={this.props.nextFormStep}
            prevStep={this.props.prevFormStep}
            menuBuilderSetSubCategory={this.props.menuBuilderSetSubCategory}
            menuBuilderState={this.props.menuBuilderState}
          />
        );
        case 3:
        return (
          <MenuItemForm
            nextStep={this.props.nextFormStep}
            prevStep={this.props.prevFormStep}
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
