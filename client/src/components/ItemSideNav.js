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
  },
  addBtn: {
    width: "100%"
  }
};

class ItemSideNav extends Component {
  state = {
    collapse: {}
  };

  // handleCategoryClick = categoryIndex => {
  //   this.setState(
  //     state => (state.collapse[categoryIndex] = !state.collapse[categoryIndex])
  //   );
  //   this.props.menuBuilderSetCurrent("category", categoryIndex);
  // };

  handleItemClick = itemIndex => {
    this.props.menuBuilderSetCurrent("item", itemIndex);
    this.props.setFormHandlerStep(3);
  };

  newItem = () => {
    this.props.setFormHandlerStep(3);

    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const itemArrLen = menuBuilderState.categories[current.category].subCategories[
      current.subCategory
    ].items.length

    this.props.menuBuilderSetCurrent("item", itemArrLen + 1);
  }

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;

    return (
      <MDBCard style={styles.card}>
        <MDBCardBody>
          <MDBListGroup>
            <MDBListGroupItem color="danger">Items</MDBListGroupItem>
            {menuBuilderState.categories[current.category].subCategories[
              current.subCategory
            ].items.map(({ name }, itemIndex) => {
              return (
                <MDBListGroupItem
                  color="light"
                  hover
                  onClick={() => {
                    this.handleItemClick(itemIndex);
                  }}
                  key={itemIndex}
                >
                  {name}{" "}
                </MDBListGroupItem>
              );
            })}
          </MDBListGroup>

          <MDBBtn
            color="orange"
            style={styles.addBtn}
            onClick={this.newItem}
          >
            <MDBIcon icon="plus" size="lg" inverse="true" style={styles.icon} /> Item
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default ItemSideNav;
