import React, { Component } from "react";
import "./MenuBuilder.css";

import FormHandler from "../components/FormHandler/FormHandler";
import CategoryNav from "../components/Navs/CategoryNav";
import SubCategoryNav from "../components/Navs/SubCategoryNav";
import ItemNav from "../components/Navs/ItemNav";

import categoryModel from "../components/categoryModel";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStep: 3,
      current: { category: 0, subCategory: 0, item: 0 },
      categories: [
        {
          name: "Lunch", //Basic
          subCategories: [
            {
              name: "Chicken", //Basic
              items: [
                {
                  name: "Chicken Sandwich", //Basic
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
                      cost: 0.5,
                      modifier: [
                        { name: "white" },
                        { name: "wheat" },
                        { name: "no bun" }
                      ]
                    },
                    {
                      choicesLimit: 1,
                      forced: true,
                      cost: 0.5,
                      modifier: [
                        { name: "cheddar", price: 0.5 },
                        { name: "swiss", price: 0.75 }
                      ]
                    },
                    {
                      choicesLimit: 2,
                      forced: true,
                      cost: 0.5,
                      modifier: [
                        { name: "bacon", price: 0.9 },
                        { name: "ham", price: 0.2 }
                      ]
                    },
                    {
                      choicesLimit: 3,
                      forced: false,
                      cost: 0.5,
                      modifier: [
                        { name: "ketchup" },
                        { name: "hot sauce" },
                        { name: "mayo" }
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
    this.setState(state => ({ categories: [...state.categories, category] }));
  };

  menuBuilderSetSubCategory = subCategory => {
    const current = this.state.current;
    const modifiedSubCategoryModel = categoryModel[0].subCategories[0];
    modifiedSubCategoryModel.name = subCategory;
    const setSubCategoryState = state => {
      state.categories[current.category].subCategories.push(
        modifiedSubCategoryModel
      );
    };
    this.setState(setSubCategoryState);
  };

  menuBuilderSetItem = item => {
    const current = this.state.current;
    const setItemState = state => {
      state.categories[current.category].subCategories[
        current.subCategory
      ].items[current.item] = item;
    };
    this.setState(setItemState, () => {
      console.log(this.state);
    });
  };

  menuBuilderSetCurrent = (field, index) => {
    const setCurrentFieldState = state => {
      state.current[field] = index;
      // if (field === "category") {
      //   state.current.subCategory = null;
      // }
    };
    this.setState(setCurrentFieldState);
  };

  render() {
    const state = this.state;
    const current = this.state.current;
    console.log(state);
    return (
      <div>
        {state.formStep && state.categories ? (
          <CategoryNav
            menuBuilderState={this.menuBuilderState}
            menuBuilderSetCurrent={this.menuBuilderSetCurrent}
          />
        ) : null}
        {state.formStep > 1 &&
        state.current.category !== null &&
        state.categories[current.category].subCategories ? (
          <SubCategoryNav
            menuBuilderState={this.menuBuilderState}
            menuBuilderSetCurrent={this.menuBuilderSetCurrent}
          />
        ) : null}
        {state.formStep > 2 &&
        state.current.subCategory !== null &&
        state.categories[current.category].subCategories[current.subCategory]
          .items ? (
          <ItemNav
            menuBuilderState={this.menuBuilderState}
            menuBuilderSetCurrent={this.menuBuilderSetCurrent}
          />
        ) : null}

        <FormHandler
          menuBuilderState={this.menuBuilderState}
          nextFormStep={this.nextFormStep}
          prevFormStep={this.prevFormStep}
          menuBuilderSetCategory={this.menuBuilderSetCategory}
          menuBuilderSetSubCategory={this.menuBuilderSetSubCategory}
          menuBuilderSetItem={this.menuBuilderSetItem}
        />
      </div>
    );
  }
}

export default Main;
