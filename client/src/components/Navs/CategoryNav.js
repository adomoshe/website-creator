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

class CategoryNav extends Component {
  state = { isOpen: false };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    return (
      <MDBNavbar color="black" expand="md" dark style={styles.root}>
        <MDBNavbarBrand>
          <strong>Categories</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {menuBuilderState.categories.map(({name}, index) => {
              return (
                <MDBNavItem onClick={() => {this.props.menuBuilderSetCurrent("category", index)}} key={index}>
                  <MDBNavLink to="#">{name}</MDBNavLink>
                </MDBNavItem>
              );
            })}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default CategoryNav;
