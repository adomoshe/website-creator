import React, { Component } from "react";
import { MDBBtn, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdbreact";

const styles = {
};

class ItemSideNav extends Component {
  handleItemClick = itemIndex => {
    this.props.menuBuilderSetCurrent("item", itemIndex);
    this.props.setFormHandlerStep(3);
  };

  newItem = () => {
    this.props.setFormHandlerStep(3);

    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;
    const itemArrLen =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].items.length;

    this.props.menuBuilderSetCurrent("item", itemArrLen);
  };

  render() {
    const menuBuilderState = this.props.menuBuilderState();
    const current = menuBuilderState.current;

    return (
        <MDBListGroup>
          <MDBListGroupItem color="warning">Items</MDBListGroupItem>
          {menuBuilderState.categories[current.category].subCategories[
            current.subCategory
          ].items.map(({ name }, itemIndex) => {
            return (
              <MDBListGroupItem
                hover
                className="text-dark"
                onClick={() => {
                  this.handleItemClick(itemIndex);
                }}
                key={itemIndex}
              >
                {name}{" "}
              </MDBListGroupItem>
            );
          })}

        <MDBBtn
          color="deep-orange darken-4"
          style={styles.addBtn}
          className="mx-0 my-0"
          onClick={this.newItem}
        >
          <MDBIcon
            icon="plus"
            size="lg"
            inverse="true"
            style={styles.icon}
          />{" "}
          Item
        </MDBBtn>
        </MDBListGroup>
    );
  }
}

export default ItemSideNav;
