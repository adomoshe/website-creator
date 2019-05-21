import React from "react";
import { MDBBtn, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdbreact";

const styles = {
  border: { borderRadius: 10 },
  sideNav: {
    maxHeight: "30vh",
    overflow: "auto"
  }
};

const ItemSideNav = props => (
  <MDBListGroup>
    <MDBListGroupItem color="warning" className="h5">
      <small>
        {props.categoryDisplay} <MDBIcon icon="angle-right" /> {/*currentSubCat*/}
      </small>{" "}
      <MDBIcon icon="angle-right" /> ITEMS{" "}
      <small>
        <MDBIcon icon="level-down-alt" />
      </small>
    </MDBListGroupItem>
    <div style={styles.sideNav}>
      {props.itemDisplay.map(({ name }, itemIndex) => {
        return (
          <MDBListGroupItem
            hover
            className="text-dark"
            key={itemIndex}
            style={styles.border}
            onClick={() => {
              props.handleItemClick(itemIndex);
            }}
          >
            {name}{" "}
          </MDBListGroupItem>
        );
      })}

      <MDBBtn
        color="deep-orange darken-4 w-100"
        className="mx-0 my-0"
        onClick={props.newItem}
      >
        <MDBIcon icon="plus" size="lg" inverse="true" /> Item
      </MDBBtn>
    </div>
  </MDBListGroup>
);

export default ItemSideNav;
