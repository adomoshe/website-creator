import React, { Component } from "react";
import {} from "mdbreact";

import SideNav from "./SideNav"
import ItemSideNav from "./ItemSideNav"

class NavHandler extends Component {
  state = {
    sideNavCollapse: {}
  }

  handleCategoryClick = categoryIndex => {
    this.setState(
      state => (state.sideNavCollapse[categoryIndex] = !state.sideNavCollapse[categoryIndex])
    );
    this.props.menuBuilderSetCurrent("subCategory", null);
    this.props.menuBuilderSetCurrent("item", null);
    this.props.setFormHandlerStep(1);
  };

  handleSubCategoryClick = (categoryIndex, subCategoryIndex) => {
    console.log("category index", categoryIndex);
    this.props.menuBuilderSetCurrent("category", categoryIndex);
    this.props.menuBuilderSetCurrent("subCategory", subCategoryIndex);
    // this.props.menuBuilderSetCurrent("item", 0);
    // this.props.setFormHandlerStep(3);
  };

  newSubCategory = categoryIndex => {
    this.props.menuBuilderSetCurrent("category", categoryIndex);
    this.props.setFormHandlerStep(2);
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();

    return (
      <>
        {menuBuilderState.formStep && menuBuilderState.categories.length ? (
          <SideNav
            menuBuilderState={this.props.menuBuilderState}
            setFormHandlerStep={this.props.setFormHandlerStep}
            menuBuilderSetCurrent={this.props.menuBuilderSetCurrent}

            handleCategoryClick={this.handleCategoryClick}
            handleSubCategoryClick={this.handleSubCategoryClick}
            newSubCategory={this.newSubCategory}

            sideNavCollapse={this.state.sideNavCollapse}
          />
        ) : null}
        {menuBuilderState.current.subCategory !== null ? (
          <ItemSideNav
            menuBuilderState={this.props.menuBuilderState}
            setFormHandlerStep={this.props.setFormHandlerStep}
            menuBuilderSetCurrent={this.props.menuBuilderSetCurrent}
          />
        ) : null}
      </>
    );
  }
}

export default NavHandler;
