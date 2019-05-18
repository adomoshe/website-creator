import React, { Component } from "react";
import { MDBBtn, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdbreact";

const styles = {
  border: { borderRadius: 10 }
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

    const currentCat = menuBuilderState.categories[current.category].name;

    const currentSubCat =
      menuBuilderState.categories[current.category].subCategories[
        current.subCategory
      ].name;

    return (
      <MDBListGroup>
        <MDBListGroupItem color="warning" className="h5">
          <small>
            {currentCat} <MDBIcon icon="angle-right" /> {currentSubCat}
          </small>{" "}
          <MDBIcon icon="angle-right" /> ITEMS{" "}
          <small>
            <MDBIcon icon="level-down-alt" />
          </small>
        </MDBListGroupItem>
        {menuBuilderState.categories[current.category].subCategories[
          current.subCategory
        ].items.map(({ name }, itemIndex) => {
          return (
            <MDBListGroupItem
              hover
              className="text-dark"
              key={itemIndex}
              style={styles.border}
              onClick={() => {
                this.handleItemClick(itemIndex);
              }}
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
          <MDBIcon icon="plus" size="lg" inverse="true" style={styles.icon} />{" "}
          Item
        </MDBBtn>
      </MDBListGroup>
    );
  }
}

export default ItemSideNav;
