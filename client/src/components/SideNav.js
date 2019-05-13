import React, { Component } from "react";
import {
  // MDBNavbar,
  // MDBContainer,
  // MDBCol,
  MDBNavLink,
  MDBNavItem,
  // MDBHamburgerToggler,
  // MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

const styles = {
  root: {
    marginTop: "4rem",
    width: "100%"
  }
};

class SideNav extends Component {
  state = {
    collapse: {}
  };

  handleCategoryClick = categoryIndex => {
    this.setState(
      state => (state.collapse[categoryIndex] = !state.collapse[categoryIndex])
    );
    this.props.menuBuilderSetCurrent("category", categoryIndex);
  };

  handleSubCategoryClick = subCategoryIndex => {
    this.props.menuBuilderSetCurrent("subCategory", subCategoryIndex);
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    // const current = menuBuilderState.current;

    return (
        <MDBListGroup style={styles.root}>
          <MDBListGroupItem color="info">Categories</MDBListGroupItem>
          {menuBuilderState.categories.map(({ name }, categoryIndex) => {
            return (
              <MDBListGroupItem
                href="#"
                color="light"
                hover
                onClick={() => {
                  this.handleCategoryClick(categoryIndex);
                }}
                key={categoryIndex}
              >
                {name}
                <MDBCollapse isOpen={this.state.collapse[categoryIndex]} navbar>
                  <MDBNavbarNav left>
                    {menuBuilderState.categories[
                      categoryIndex
                    ].subCategories.map(({ name }, index) => {
                      return (
                        <MDBNavItem key={index} onClick={() => {
                          this.handleSubCategoryClick(index);
                        }} active>
                          <MDBNavLink to="#!">{name}</MDBNavLink>
                        </MDBNavItem>
                      );
                    })}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBListGroupItem>
            );
          })}
        </MDBListGroup>
    );
  }
}

export default SideNav;
