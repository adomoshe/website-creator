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

class ItemNav extends Component {
  state = { isOpen: false };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    return (
      <MDBNavbar color="black" expand="md" dark style={styles.root}>
        <MDBNavbarBrand>
          <strong>Items</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {menuBuilderState.categories[current.category].subCategories[
              current.subCategory
            ].items.map(({ name }, index) => {
              return (
                <MDBNavItem
                  onClick={() => {
                    this.props.menuBuilderSetCurrent("item", index);
                  }}
                  key={index}
                >
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

export default ItemNav;
