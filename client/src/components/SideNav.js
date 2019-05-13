import React, { Component } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavLink,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse
} from "mdbreact";

const styles = {
  root: {
    marginTop: "4rem"
  }
};

class SideNav extends Component {
  state = {
    collapse: ""
  };

  toggleSingleCollapse = collapseId => () => {
    this.setState({
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBNavbar color="amber lighten-4" style={styles.root} light>
          <MDBContainer fluid>
            <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
            <MDBHamburgerToggler
              color="#d3531a"
              id="hamburger1"
              onClick={this.toggleSingleCollapse("collapse1")}
            />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBNavbar color="bg-danger" style={{ marginTop: "20px" }} dark>
          <MDBContainer fluid>
            <MDBNavbarBrand className="white-text">MDBNavbar</MDBNavbarBrand>
            <MDBHamburgerToggler
              onClick={this.toggleSingleCollapse("collapse2")}
              isOpen={false}
              id="hamburger2"
            />
            <MDBCollapse isOpen={this.state.collapse2} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBNavbar color="indigo darken-2" style={{ marginTop: "20px" }} dark>
          <MDBContainer fluid>
            <MDBNavbarBrand className="white-text">MDBNavbar</MDBNavbarBrand>
            <MDBHamburgerToggler
              onClick={this.toggleSingleCollapse("collapse3")}
              id="hamburger3"
            />
            <MDBCollapse isOpen={this.state.collapse3} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default SideNav;
