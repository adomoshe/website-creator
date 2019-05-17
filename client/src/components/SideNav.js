import React, { Component } from "react";
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
    cursor: "pointer"
  },
  subCatListItem: {
    borderLeft: "0.3rem solid #33b5e5",
    cursor: "pointer"
  },
  editIcon: {
    cursor: "pointer",
    fontWeight: "200"
  },
  plusIcon: { cursor: "pointer" }
};

class SideNav extends Component {
  state = {
    collapse: {}
  };

  handleCategoryClick = categoryIndex => {
    this.setState(
      state => (state.collapse[categoryIndex] = !state.collapse[categoryIndex])
    );
    this.props.menuBuilderSetCurrent("subCategory", null);
    this.props.menuBuilderSetCurrent("item", null);
    this.props.setFormHandlerStep(1);
  };

  handleSubCategoryClick = (categoryIndex, subCategoryIndex) => {
    console.log("category index", categoryIndex);
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
              this.props.setFormHandlerStep(1);}}
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
        {menuBuilderState.categories.map(({ name }, categoryIndex) => {
          return (
            <div key={categoryIndex}>
              <MDBListGroupItem
                style={styles.catListItem}
                hover
                onClick={() => {
                  this.handleCategoryClick(categoryIndex);
                }}
              >
                <span className="text-dark">{name}</span>
              </MDBListGroupItem>

              <MDBCollapse isOpen={this.state.collapse[categoryIndex]} navbar>
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
                            this.handleSubCategoryClick(
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
                        this.newSubCategory(categoryIndex);
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
      </MDBListGroup>
    );
  }
}

export default SideNav;
