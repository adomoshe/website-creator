import React, { Component } from "react";
import {
  // MDBNavbar,
  // MDBContainer,
  // MDBCol,
  MDBNavLink,
  MDBNavItem,
  // MDBHamburgerToggler,
  // MDBNavbarBrand,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBNavbarNav,
  MDBCollapse,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

const styles = {
  card: {
    marginTop: "4rem"
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
      <MDBCard style={styles.card}>
        <MDBCardBody>
          <MDBListGroup style={styles.root}>
            <MDBListGroupItem color="primary">Categories</MDBListGroupItem>
            {menuBuilderState.categories.map(({ name }, categoryIndex) => {
              return (
                <MDBListGroupItem
                  color="light"
                  hover
                  onClick={() => {
                    this.handleCategoryClick(categoryIndex);
                  }}
                  key={categoryIndex}
                >
                  {name}
                  <MDBCollapse
                    isOpen={this.state.collapse[categoryIndex]}
                    navbar
                  >
                    <MDBNavbarNav left>
                      {menuBuilderState.categories[
                        categoryIndex
                      ].subCategories.map(({ name }, subCategoryIndex) => {
                        return (
                          <>
                          <MDBNavItem
                            key={subCategoryIndex}
                            onClick={() => {
                              this.handleSubCategoryClick(subCategoryIndex);
                            }}
                            active
                          >
                            <MDBNavLink to="#!">{name}</MDBNavLink>
                          </MDBNavItem>
                          <MDBBtn
                          color="orange"
                          style={styles.modalBtn}
                        >
                          <MDBIcon
                            icon="plus"
                            size="lg"
                            inverse
                            style={styles.icon}
                          />
                        </MDBBtn>
                        </>
                        );
                      })}
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBListGroupItem>
              );
            })}
            {/* <MDBListGroupItem color="light" hover onClick={this.newField}> */}
              <MDBBtn
                color="orange"
                style={styles.modalBtn}
              >
                <MDBIcon
                  icon="plus"
                  size="lg"
                  inverse
                  style={styles.icon}
                />
              </MDBBtn>
            {/* </MDBListGroupItem> */}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default SideNav;
