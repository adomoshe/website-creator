import React, { Component } from "react";
import {
  // MDBNavbar,
  // MDBContainer,
  // MDBCol,
  // MDBNavLink,
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
  },
  addBtn: {
    width: "100%"
  },
  pointer: {
    cursor: "pointer"
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
    this.props.setFormHandlerStep(1);
    this.props.menuBuilderSetCurrent("subCategory", null);
    this.props.menuBuilderSetCurrent("item", null);
  };

  handleSubCategoryClick = (categoryIndex, subCategoryIndex) => {
    console.log("category index", categoryIndex)
    this.props.menuBuilderSetCurrent("category", categoryIndex);
    this.props.menuBuilderSetCurrent("subCategory", subCategoryIndex);
    this.props.menuBuilderSetCurrent("item", 0);
    this.props.setFormHandlerStep(3);
  };

  newSubCategory = categoryIndex => {
    this.props.menuBuilderSetCurrent("category", categoryIndex);
    this.props.setFormHandlerStep(2);
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    // const current = menuBuilderState.current;

    return (
      <MDBCard style={styles.card}>
        <MDBCardBody>
          <MDBListGroup>
            <MDBListGroupItem color="primary">Categories</MDBListGroupItem>
            {menuBuilderState.categories.map(({ name }, categoryIndex) => {
              return (
                <>
                  <MDBListGroupItem
                    key={categoryIndex}
                    color="light"
                    hover
                    onClick={() => {
                      this.handleCategoryClick(categoryIndex);
                    }}
                  >
                    {name}{" "}
                  </MDBListGroupItem>

                  <MDBCollapse
                    isOpen={this.state.collapse[categoryIndex]}
                    navbar
                  >
                    <MDBNavbarNav left>
                      {menuBuilderState.categories[
                        categoryIndex
                      ].subCategories.map(({ name }, subCategoryIndex) => {
                        return (
                          <MDBListGroupItem key={subCategoryIndex}>
                            <MDBNavItem
                              role="button"
                              style={styles.pointer}
                              onClick={() => {
                                this.handleSubCategoryClick(categoryIndex, subCategoryIndex);
                              }}
                              active
                            >
                              {name}
                            </MDBNavItem>
                          </MDBListGroupItem>
                        );
                      })}
                    </MDBNavbarNav>
                    <MDBListGroupItem>
                      <MDBBtn
                        color="orange"
                        style={styles.addBtn}
                        onClick={() => {this.newSubCategory(categoryIndex)}}
                      >
                        <MDBIcon
                          icon="plus"
                          size="lg"
                          inverse="true"
                          style={styles.icon}
                        />{" "}
                        Sub-Category
                      </MDBBtn>
                    </MDBListGroupItem>
                  </MDBCollapse>
                </>
              );
            })}
          </MDBListGroup>
          <MDBBtn
            color="orange"
            style={styles.addBtn}
            onClick={() => {
              this.props.setFormHandlerStep(1);
            }}
          >
            <MDBIcon icon="plus" size="lg" inverse="true" style={styles.icon} />
            Category
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default SideNav;
