import React, { Component } from "react";
import "./MenuBuilder.css";

import FormHandler from "../components/FormHandler/FormHandler";
import CategoryNav from "../components/Navs/CategoryNav";
import SubCategoryNav from "../components/Navs/SubCategoryNav";
import ItemNav from "../components/Navs/ItemNav";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
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
        }
      ]
    };
    this.initialState = this.state;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  menuBuilderState = () => {
    return this.state;
  };

  menuBuilderSetCategory = category => {
    this.setState(
      state => ({ categories: [...state.categories, category] }),
      () => {
        console.log("Menu Builder state after categories update ", this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <CategoryNav menuBuilderState={this.menuBuilderState} />
        <SubCategoryNav menuBuilderState={this.menuBuilderState} />
        <ItemNav menuBuilderState={this.menuBuilderState} />
        <FormHandler
          menuBuilderState={this.menuBuilderState}
          menuBuilderSetCategory={this.menuBuilderSetCategory}
        />
      </div>
    );
  }
}

export default Main;
