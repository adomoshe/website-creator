import React, { Component } from "react";
import {} from "mdbreact";

import SideNav from "./SideNav";
import ItemSideNav from "./ItemSideNav";

export default class NavHandler extends Component {
  state = {
    sideNavCollapse: false,
    currentCategoryIndex: null,
    categoryDisplay: [],
    subCategoryDisplay: []
  };

  menuBuilderState = this.props.menuBuilderState();

  mapAndSetCategories = () => {
    const catArr = this.menuBuilderState.categories.map(({ name }) => {
      return name;
    });
    this.setState({ categoryDisplay: [...catArr] });
  };
  componentDidMount() {
    this.mapAndSetCategories();
  }

  handleCategoryClick = categoryIndex => {
    if (this.state.sideNavCollapse) {
      this.setState(state => ({
        sideNavCollapse: !state.sideNavCollapse
      }));
      this.mapAndSetCategories();

      this.props.menuBuilderSetCurrent("category", null);
      this.props.setFormHandlerStep(1);
    } else {
      const subCatArr = this.menuBuilderState.categories[
        categoryIndex
      ].subCategories.map(({ name }) => {
        return name;
      });

      this.setState(state => ({
        sideNavCollapse: !state.sideNavCollapse,
        currentCategoryIndex: categoryIndex,
        categoryDisplay: [this.menuBuilderState.categories[categoryIndex].name],
        subCategoryDisplay: [...subCatArr]
      }));

      this.props.menuBuilderSetCurrent("category", categoryIndex);
      this.props.setFormHandlerStep(2);
    }

    this.props.menuBuilderSetCurrent("subCategory", null);
    this.props.menuBuilderSetCurrent("item", null);
  };

  handleSubCategoryClick = subCategoryIndex => {
    const currentCategoryIndex = this.state.currentCategoryIndex;

    this.props.menuBuilderSetCurrent("category", currentCategoryIndex);
    this.props.menuBuilderSetCurrent("subCategory", subCategoryIndex);
    this.props.menuBuilderSetCurrent("item", null);
  };

  render() {
    return (
      <>
        {this.menuBuilderState.formStep &&
        this.menuBuilderState.categories.length ? (
          <SideNav
          setFormHandlerStep={this.props.setFormHandlerStep}
            handleCategoryClick={this.handleCategoryClick}
            handleSubCategoryClick={this.handleSubCategoryClick}
            sideNavCollapse={this.state.sideNavCollapse}
            categoryDisplay={this.state.categoryDisplay}
            subCategoryDisplay={this.state.subCategoryDisplay}
          />
        ) : null}
        {this.menuBuilderState.current.subCategory !== null ? (
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
