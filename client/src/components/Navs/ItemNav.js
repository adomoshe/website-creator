import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";

const styles = {
  root: {
    marginTop: "0.5rem"
  },
  styles: {
    marginLeft: "0.5rem"
  }
};

class ItemNav extends Component {
  state = { isOpen: false };

  newItem = () => {
    
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    return (
      <MDBNavbar color="orange" expand="md" dark style={styles.root}>
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
            <MDBNavItem>
            <MDBIcon icon="plus" size="lg" inverse style={styles.icon} onClick={this.newItem} />
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default ItemNav;
