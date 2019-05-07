import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

const styles = {
  root: {
    marginTop: "0.5rem"
  }
};

class SubCategoryNav extends Component {
  state = { isOpen: false };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    console.log(menuBuilderState.categories[current.category])
    return (
      <MDBNavbar color="black" expand="md" dark style={styles.root}>
        <MDBNavbarBrand>
          <strong>Sub-Categories</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {menuBuilderState.categories[current.category].subCategories.map(
              ({ name }, index) => {
                return (
                  <MDBNavItem onClick={() => {this.props.menuBuilderSetCurrent("subCategory", index)}} key={index}>
                    <MDBNavLink to="#">{name}</MDBNavLink>
                  </MDBNavItem>
                );
              }
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default SubCategoryNav;
