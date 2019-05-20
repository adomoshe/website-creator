import React, { Component } from "react";
import {} from "mdbreact";

import SideNav from "./SideNav"
import ItemSideNav from "./ItemSideNav"

class NavHandler extends Component {
  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current
    
    return (
      <>
        {menuBuilderState.formStep && menuBuilderState.categories.length ? (
          <SideNav
            menuBuilderState={this.props.menuBuilderState}
            setFormHandlerStep={this.props.setFormHandlerStep}
            menuBuilderSetCurrent={this.props.menuBuilderSetCurrent}
          />
        ) : null}
        {menuBuilderState.current.subCategory !== null &&
        menuBuilderState.categories[current.category].subCategories[current.subCategory]
          .items[0] ? (
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
