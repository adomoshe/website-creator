import React, { Component } from "react";
import "./MenuBuilder.css";

import { MDBRow, MDBCol } from "mdbreact";

import FormHandler from "../components/FormHandler/FormHandler";
import NavHandler from "../components/NavHandler/NavHandler";

class Main extends Component {
  state = {
    formStep: 1,
    current: { category: null, subCategory: null, item: null },
    categories: [
      {
        name: "LUNCH", //Basic
        subCategories: [
          {
            name: "CHICKEN", //Basic
            items: [
              {
                name: "CHICKEN SANDWICH", //Basic
                // description:
                //   "Chicken sandwich with lettuce, tomato, and fries",
                price: 12.95, //Basic
                cost: 4.25, //Basic
                addToInventory: false, //Basic
                tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
                course: 1, //dropdown 1-7
                printer: 2, //dropdown 1-7
                cookScreen: 3, //dropdown 1-7
                expoPrinter: 4, //dropdown 1-7
                labelPrinter: 2, //dropdown 1-3
                options: {
                  //all false by default
                  hideOnCart: false,
                  disableDiscount: false,
                  qtyPrompt: false,
                  checkId: false, //Basic
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
              },
              {
                name: "BURGER", //Basic
                // description: "Burger with lettuce, tomato, and fries",
                price: 9.95, //Basic
                cost: 2.25, //Basic
                addToInventory: false, //Basic
                tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
                course: 1, //dropdown 1-7
                printer: 6, //dropdown 1-7
                cookScreen: 4, //dropdown 1-7
                expoPrinter: 3, //dropdown 1-7
                labelPrinter: 2, //dropdown 1-3
                options: {
                  //all false by default
                  hideOnCart: false,
                  disableDiscount: false,
                  qtyPrompt: false,
                  checkId: false, //Basic
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
                      { name: "WHITE2", cost: 2.5 },
                      { name: "WHEAT2", cost: 0.2 },
                      { name: "NO BUN2", cost: 1.5 }
                    ]
                  },
                  {
                    choicesLimit: 1,
                    forced: true,
                    modifier: [
                      { name: "CHEDDAR2", price: 0.5, cost: 0.7 },
                      { name: "SWISS2", price: 0.75, cost: 0.2 }
                    ]
                  },
                  {
                    choicesLimit: 2,
                    forced: true,
                    modifier: [
                      { name: "BACON2", price: 0.9, cost: 0.6 },
                      { name: "HAM2", price: 0.2, cost: 0.9 }
                    ]
                  },
                  {
                    choicesLimit: 3,
                    forced: false,
                    modifier: [
                      { name: "KETCHUP2", cost: 0.8 },
                      { name: "HOT SAUCE2", cost: 1.5 },
                      { name: "MAYO2", cost: 0.2 }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "DINNER", //Basic
        subCategories: [
          {
            name: "STEAK", //Basic
            items: [
              {
                name: "TRI TIP", //Basic
                // description: "Tri tip with fries",
                price: 15.43, //Basic
                cost: 2.35, //Basic
                addToInventory: false, //Basic
                tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
                course: 1, //dropdown 1-7
                printer: 6, //dropdown 1-7
                cookScreen: 7, //dropdown 1-7
                expoPrinter: 2, //dropdown 1-7
                labelPrinter: 1, //dropdown 1-3
                options: {
                  //all false by default
                  hideOnCart: false,
                  disableDiscount: false,
                  qtyPrompt: false,
                  checkId: false, //Basic
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
              },
              {
                name: "FILET MIGNON", //Basic
                // description: "With fries",
                price: 23.25, //Basic
                cost: 10.25, //Basic
                addToInventory: false, //Basic
                tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
                course: 4, //dropdown 1-7
                printer: 3, //dropdown 1-7
                cookScreen: 6, //dropdown 1-7
                expoPrinter: 3, //dropdown 1-7
                labelPrinter: 2, //dropdown 1-3
                options: {
                  //all false by default
                  hideOnCart: false,
                  disableDiscount: false,
                  qtyPrompt: false,
                  checkId: false, //Basic
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

  initialState = this.state;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  nextFormStep = () => {
    this.setState(state => ({ formStep: state.formStep + 1 }));
  };

  prevFormStep = () => {
    this.setState(state => ({ formStep: state.formStep - 1 }));
  };

  menuBuilderSetCategory = category => {
    const categoryModel = [{ name: category, subCategories: [] }];

    this.setState(state => ({
      categories: [...state.categories, ...categoryModel]
    }));
  };

  menuBuilderSetSubCategory = subCategory => {
    const current = this.state.current;
    const subCategoryModel = [{ name: subCategory, items: [] }];

    this.setState(
      state =>
        (state.categories[current.category].subCategories = [
          ...state.categories[current.category].subCategories,
          ...subCategoryModel
        ])
    );
  };

  menuBuilderSetItem = (item, newItem = false) => {
    const current = this.state.current;

    if (newItem) {
      this.setState(
        state => {
          state.categories[current.category].subCategories[
            current.subCategory
          ].items = [
            ...state.categories[current.category].subCategories[
              current.subCategory
            ].items,
            item
          ];
        },
        () => {
          this.forceUpdate();
          console.log(
            "MenuBuilder state after NEW ITEM item update: ",
            this.state
          );
        }
      );
    } else {
      this.setState(
        state => {
          state.categories[current.category].subCategories[
            current.subCategory
          ].items[current.item] = item;
        },
        () => {
          this.forceUpdate();
          console.log(
            "MenuBuilder state after EXISTING item update: ",
            this.state
          );
        }
      );
    }
  };

  menuBuilderSetCurrent = (field, index) => {
    this.setState(
      state => {
        state.current[field] = index;
      },
      () => {
        this.forceUpdate();
        console.log(
          `At MenuBuilder setting current field: ${field} to index: ${index}`
        );
      }
    );
  };

  setFormHandlerStep = step => {
    this.setState({ formStep: step });
  };

  render() {
    const state = this.state;
    console.log("MenuBuilder rendering with state: ", state);
    return (
      <MDBRow>
        <MDBCol md="5" xl="3" className="px-md-0 my-3 my-md-5 position-fixed">
          <NavHandler
            menuBuilderState={this.state}
            setFormHandlerStep={this.setFormHandlerStep}
            menuBuilderSetCurrent={this.menuBuilderSetCurrent}
          />
        </MDBCol>
        <MDBCol md="6" lg="6" className="my-3 my-md-5 offset-md-5 offset-xl-3">
          <FormHandler
            menuBuilderState={this.state}
            nextFormStep={this.nextFormStep}
            prevFormStep={this.prevFormStep}
            menuBuilderSetCategory={this.menuBuilderSetCategory}
            menuBuilderSetSubCategory={this.menuBuilderSetSubCategory}
            menuBuilderSetItem={this.menuBuilderSetItem}
            setFormHandlerStep={this.setFormHandlerStep}
            menuBuilderSetCurrent={this.menuBuilderSetCurrent}
          />{" "}
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Main;
