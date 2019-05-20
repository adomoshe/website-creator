import React from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBCollapse,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

const styles = {
  catListItem: {
    borderLeft: "0.6rem solid #33b5e5",
    borderRadius: 10,
    cursor: "pointer"
  },
  subCatListItem: {
    borderLeft: "0.3rem solid #33b5e5",
    borderRadius: 10,
    cursor: "pointer"
  },
  editIcon: {
    cursor: "pointer",
    fontWeight: "200"
  },
  plusIcon: { cursor: "pointer" },
  sideNav: {
    maxHeight: "40vh",
    overflow: "auto"
  }
};

const SideNav = (props) => {
    const menuBuilderState = props.menuBuilderState();
    const sideNavCollapse = props.sideNavCollapse

    return (
      <MDBListGroup styles={styles.fixed}>
        <MDBListGroupItem className="pr-0 bg-info">
          <span className="text-white">Main Menu</span>
          <MDBIcon
            icon="plus"
            size="sm"
            inverse="true"
            style={styles.plusIcon}
            className="float-right mx-2"
            onClick={() => {
              props.setFormHandlerStep(1);}}
          />
          <MDBIcon
            icon="edit"
            size="sm"
            inverse="true"
            style={styles.editIcon}
            className=" float-right mx-2"
          />
          <MDBIcon icon="minus" size="sm"
            inverse="true"
            style={styles.addIcon}
            className=" float-right mx-2" />
        </MDBListGroupItem>
        <div style={styles.sideNav}>
        {menuBuilderState.categories.map(({ name }, categoryIndex) => {
          return (
            <div key={categoryIndex}>
              <MDBListGroupItem
                style={styles.catListItem}
                hover
                onClick={() => {
                  props.handleCategoryClick(categoryIndex);
                }}
              >
                <span className="text-dark">{name}</span>
              </MDBListGroupItem>

              <MDBCollapse isOpen={sideNavCollapse[categoryIndex]} navbar>
                <MDBListGroup>
                  {menuBuilderState.categories[categoryIndex].subCategories.map(
                    ({ name }, subCategoryIndex) => {
                      return (
                        <MDBListGroupItem
                          key={subCategoryIndex}
                          className="ml-2"
                          role="button"
                          style={styles.subCatListItem}
                          onClick={() => {
                            props.handleSubCategoryClick(
                              categoryIndex,
                              subCategoryIndex
                            );
                          }}
                        >
                          <span className="text-dark">{name}</span>
                        </MDBListGroupItem>
                      );
                    }
                  )}
                  <MDBListGroupItem
                    style={styles.subCatListItem}
                    className="ml-2 px-0 py-0"
                  >
                    <MDBBtn
                      color="deep-orange darken-4"
                      outline
                      className="w-100 mx-0 my-0"
                      onClick={() => {
                        props.newSubCategory(categoryIndex);
                      }}
                    >
                      <MDBIcon icon="plus" size="lg" style={styles.icon} />{" "}
                      Sub-Category
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCollapse>
            </div>
          );
        })}
        </div>
      </MDBListGroup>
    );
  }

  export default SideNav