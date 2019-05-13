import React, { Component } from "react";
import "./MenuBuilder.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";

import FormHandler from "../components/FormHandler/FormHandler";
import SideNav from "../components/SideNav";
// import CategoryNav from "../components/Navs/CategoryNav";
// import SubCategoryNav from "../components/Navs/SubCategoryNav";
// import ItemNav from "../components/Navs/ItemNav";

import MenuModel from "../components/MenuModel";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStep: 3,
      current: { category: 0, subCategory: 0, item: 0 },
      categories: [
        {
          name: "LUNCH", //Basic
          subCategories: [
            {
              name: "CHICKEN", //Basic
              items: [
                {
                  name: "CHICKEN SANDWICH", //Basic
                  description:
                    "Chicken sandwich with lettuce, tomato, and fries",
                  price: 12.95, //Basic
                  cost: 4.25, //Basic
                  addToInventory: false, //Basic
                  tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
                  course: 1, //dropdown 1-7
                  printer: 1, //dropdown 1-7
                  cookScreen: 1, //dropdown 1-7
                  expoPrinter: 1, //dropdown 1-7
                  labelPrinter: 1, //dropdown 1-3
                  options: {
                    //all false by default
                    hideOnCart: false,
                    disableDiscount: false,
                    qtyPrompt: false,
                    checkAge: false, //Basic
                    serviceItem: false
                  },
                  belongsTo: {
                    //true is default
                    tableService: true,
                    quickServe: true,
                    phoneOrder: true,
                    driveThru: false,
                    online: false,
                    party: false,
                    bar: false
                  },
                  comments: ["lettuce", "tomato", "no onion"],
                  modifiers: [
                    {
                      choicesLimit: 1,
                      forced: true,
                      modifier: [
                        { name: "WHITE", cost: 2.5 },
                        { name: "WHEAT", cost: 0.2 },
                        { name: "NO BUN", cost: 1.5 }
                      ]
                    },
                    {
                      choicesLimit: 1,
                      forced: true,
                      modifier: [
                        { name: "CHEDDAR", price: 0.5, cost: 0.7 },
                        { name: "SWISS", price: 0.75, cost: 0.2 }
                      ]
                    },
                    {
                      choicesLimit: 2,
                      forced: true,
                      modifier: [
                        { name: "BACON", price: 0.9, cost: 0.6 },
                        { name: "HAM", price: 0.2, cost: 0.9 }
                      ]
                    },
                    {
                      choicesLimit: 3,
                      forced: false,
                      modifier: [
                        { name: "KETCHUP", cost: 0.8 },
                        { name: "HOT SAUCE", cost: 1.5 },
                        { name: "MAYO", cost: 0.2 }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
    this.initialState = this.state;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  menuBuilderState = () => this.state;

  nextFormStep = () => {
    this.setState(state => ({ formStep: state.formStep + 1 }));
  };

  prevFormStep = () => {
    this.setState(state => ({ formStep: state.formStep - 1 }));
  };

  menuBuilderSetCategory = category => {
    const modifiedCategoryModel = JSON.parse(JSON.stringify(MenuModel));
    modifiedCategoryModel.categories[0].name = category;

    this.setState(state => ({
      categories: [...state.categories, ...modifiedCategoryModel.categories]
    }));
  };

  menuBuilderSetSubCategory = subCategory => {
    const current = this.state.current;
    const modifiedSubCategoryModel = JSON.parse(JSON.stringify(MenuModel));
    modifiedSubCategoryModel.categories[0].subCategories[0].name = subCategory;

    this.setState(
      state =>
        (state.categories[current.category].subCategories = [
          ...state.categories[current.category].subCategories,
          ...modifiedSubCategoryModel.categories[0].subCategories
        ])
    );
  };

  menuBuilderSetItem = item => {
    const current = this.state.current;

    this.setState(
      state => {
        state.categories[current.category].subCategories[
          current.subCategory
        ].items[current.item] = item;
      },
      () => {
        this.forceUpdate();
        console.log("MenuBuilder state after item update: ", this.state);
      }
    );
  };

  menuBuilderSetCurrent = (field, index) => {
    this.setState(state => {
      state.current[field] = index;
    });
  };

  render() {
    const state = this.state;
    const current = this.state.current;
    console.log(state);
    return (
      <MDBContainer fluid>
      <MDBRow>
        {state.formStep && state.categories ? (
          <MDBCol md="3"><SideNav
            menuBuilderState={this.menuBuilderState}
            menuBuilderSetCurrent={this.menuBuilderSetCurrent}
          /></MDBCol>
        ) : 
        //   <CategoryNav
        //     menuBuilderState={this.menuBuilderState}
        //     menuBuilderSetCurrent={this.menuBuilderSetCurrent}
        //   />
        // ) : null}
        // {state.formStep > 1 &&
        // state.current.category !== null &&
        // state.categories[current.category].subCategories ? (
        //   <SubCategoryNav
        //     menuBuilderState={this.menuBuilderState}
        //     menuBuilderSetCurrent={this.menuBuilderSetCurrent}
        //   />
        // ) : null}
        // {state.formStep > 2 &&
        // state.current.subCategory !== null &&
        // state.categories[current.category].subCategories[current.subCategory]
        //   .items ? (
        //   <ItemNav
        //     menuBuilderState={this.menuBuilderState}
        //     menuBuilderSetCurrent={this.menuBuilderSetCurrent}
        //   />
        null}
        <FormHandler
          menuBuilderState={this.menuBuilderState}
          nextFormStep={this.nextFormStep}
          prevFormStep={this.prevFormStep}
          menuBuilderSetCategory={this.menuBuilderSetCategory}
          menuBuilderSetSubCategory={this.menuBuilderSetSubCategory}
          menuBuilderSetItem={this.menuBuilderSetItem}
        />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Main;
