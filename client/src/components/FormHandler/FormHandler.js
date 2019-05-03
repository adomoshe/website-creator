import React, { Component } from "react";

import BasicInfoForm from "./BasicInfoForm";
import MenuCategoryForm from "./MenuCategoryForm";
import MenuItemForm from "./MenuItemForm";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      menu: [
        {
          category: "Lunch", //Basic
          subCategory: "Chicken", //Basic
          items: [
            {
              name: "Chicken Sandwich", //Basic
              description: "Chicken sandwich with lettuce, tomato, and fries",
              price: 12.95, //Basic
              cost: 4.25, //Basic
              addToInventory: false, //Basic
              tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
              course: 1,
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
    };
    this.initialState = this.state;
  }

  formHandlerState = () => {
    return this.state;
  };
  nextStep = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ step: state.step - 1 }));
  };

  setCategory = category => {
    this.setState(
      state => ({ categories: [...state.categories, category] }),
      () => {
        console.log("Form Handler state after categories update ", this.state);
      }
    );
  };

  setItem = item => {
    this.setState(
      state => ({ items: [...state.items, item] }),
      () => {
        console.log("Form Handler state after item update ", this.state);
      }
    );
  };

  render() {
    switch (this.state.step) {
      case 0:
        return <BasicInfoForm nextStep={this.nextStep} />;
      case 1:
        return (
          <MenuCategoryForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            setCategory={this.setCategory}
          />
        );
      case 2:
        return (
          <MenuItemForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            setItem={this.setItem}
            formHandlerState={this.formHandlerState}
          />
        );
      default:
        throw new Error("Form handler state is not valid");
    }
  }
}

export default FormHandler;
