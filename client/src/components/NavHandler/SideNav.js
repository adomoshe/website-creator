import React from "react";
import {
  // MDBBtn,
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

const SideNav = props => (
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
          props.setFormHandlerStep(1);
        }}
      />
      <MDBIcon
        icon="edit"
        size="sm"
        inverse="true"
        style={styles.editIcon}
        className=" float-right mx-2"
      />
      <MDBIcon
        icon="minus"
        size="sm"
        inverse="true"
        style={styles.addIcon}
        className=" float-right mx-2"
      />
    </MDBListGroupItem>
    <div style={styles.sideNav}>
      {props.categoryDisplay.map((category, categoryIndex) => {
        return (
          <div key={categoryIndex}>
            <MDBListGroupItem
              style={styles.catListItem}
              hover
              onClick={() => {
                props.handleCategoryClick(categoryIndex);
              }}
            >
              <span className="text-dark">{category}</span>
            </MDBListGroupItem>

            <MDBCollapse isOpen={props.sideNavCollapse} navbar>
              <MDBListGroup>
                {props.subCategoryDisplay.map(
                  (subCategory, subCategoryIndex) => {
                    return (
                      <MDBListGroupItem
                        key={subCategoryIndex}
                        className="ml-2"
                        role="button"
                        style={styles.subCatListItem}
                        onClick={() => {
                          props.handleSubCategoryClick(subCategoryIndex);
                        }}
                      >
                        <span className="text-dark">{subCategory}</span>
                      </MDBListGroupItem>
                    );
                  }
                )}
                <MDBListGroupItem
                  className="ml-2 px-0 py-0"
                >Enter More Sub-Categories
                    <MDBIcon icon="arrow-right" /*className="deep-orange darken-4"*/ size="lg" />{" "}
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </div>
        );
      })}
    </div>
  </MDBListGroup>
);

export default SideNav;
