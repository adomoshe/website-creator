import React, { Component } from "react";
import {} from "mdbreact";

import SideNav from "./SideNav";
import ItemSideNav from "./ItemSideNav";

export default class NavHandler extends Component {
  state = {
    sideNavCollapse: false,
    currentCategoryIndex: null,
    currentSubCategoryIndex: null,
    categoryDisplay: [],
    subCategoryDisplay: [],
    currentSubCategoryName: '',
    itemDisplay: []
  };

  mapAndSetCategories = () => {
    const menuBuilderState = this.props.menuBuilderState;
    console.log(menuBuilderState);
    const catArr = menuBuilderState.categories.map(({ name }) => {
      return name;
    });
    this.setState({ categoryDisplay: [...catArr] });
  };

  componentDidMount() {
    this.mapAndSetCategories();
  }

  componentDidUpdate(prevProps) {
    const preCategoryLen = prevProps.menuBuilderState.categories.length;
    const currentCategoryLen = this.props.menuBuilderState.categories.length;

    if (preCategoryLen !== currentCategoryLen) {
      this.mapAndSetCategories();
    }
  }

  handleCategoryClick = categoryIndex => {
    const menuBuilderState = this.props.menuBuilderState;

    if (this.state.sideNavCollapse) {
      this.mapAndSetCategories();
      this.props.menuBuilderSetCurrent("category", null);
      this.props.setFormHandlerStep(1);
      this.setState(state => ({
        sideNavCollapse: !state.sideNavCollapse
      }));
    } else {
      const subCatArr = menuBuilderState.categories[
        categoryIndex
      ].subCategories.map(({ name }) => {
        return name;
      });
      this.setState(state => ({
        sideNavCollapse: !state.sideNavCollapse,
        currentCategoryIndex: categoryIndex,
        categoryDisplay: [menuBuilderState.categories[categoryIndex].name],
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
    setTimeout(() => {
      this.itemDisplay();
    }, 0);
  };

  handleItemClick = itemIndex => {
    this.props.menuBuilderSetCurrent("item", itemIndex);
    this.props.setFormHandlerStep(3);
  };

  newItem = () => {
    this.props.setFormHandlerStep(3);

    const menuBuilderState = this.props.menuBuilderState;
    const current = menuBuilderState.current;
    const itemArrLen =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].items.length;

    this.props.menuBuilderSetCurrent("item", itemArrLen);
  };

  itemDisplay = () => {
    const menuBuilderState = this.props.menuBuilderState;
    const current = menuBuilderState.current;

    const currentSubCategoryName =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].name;

    const itemArr = menuBuilderState.categories[current.category].subCategories[
      current.subCategory
    ].items.map(({ name }) => {
      return name;
    });

    this.setState({ itemDisplay: [...itemArr], currentSubCategoryName });
    console.log(itemArr);
  };

  addBtn = () => {
    this.setState({ sideNavCollapse: false });
    this.mapAndSetCategories();
    this.props.setFormHandlerStep(1);
    this.props.menuBuilderSetCurrent("subCategory", null);
    this.props.menuBuilderSetCurrent("item", null);
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState;
    console.log(this.state);

    return (
      <>
        {menuBuilderState.formStep && menuBuilderState.categories.length ? (
          <SideNav
            addBtn={this.addBtn}
            handleCategoryClick={this.handleCategoryClick}
            handleSubCategoryClick={this.handleSubCategoryClick}
            sideNavCollapse={this.state.sideNavCollapse}
            categoryDisplay={this.state.categoryDisplay}
            subCategoryDisplay={this.state.subCategoryDisplay}
          />
        ) : null}
        {menuBuilderState.current.subCategory !== null ? (
          <ItemSideNav
            categoryDisplay={this.state.categoryDisplay}
            itemDisplay={this.state.itemDisplay}
            currentSubCategoryName={this.state.currentSubCategoryName}
            handleItemClick={this.handleItemClick}
            newItem={this.newItem}
          />
        ) : null}
      </>
    );
  }
}
