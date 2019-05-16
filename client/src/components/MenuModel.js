const MenuModel = {
  categories: [
    {
      name: "", //Basic
      subCategories: [
        {
          name: "", //Basic
          items: [
            {
              name: "", //Basic
              // description: "",
              price: "", //Basic
              cost: 0, //Basic
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
              comments: [],
              modifiers: [
                {
                  choicesLimit: "",
                  forced: false,
                  modifier: [{ name: "", cost: 0 }]
                },
                {
                  choicesLimit: "",
                  forced: false,
                  modifier: [{ name: "", price: "", cost: 0 }]
                },
                {
                  choicesLimit: "",
                  forced: false,
                  modifier: [{ name: "", price: "", cost: 0 }]
                },
                {
                  choicesLimit: "",
                  forced: false,
                  modifier: [{ name: "", cost: 0 }]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default MenuModel;

// [
//   {
//     name: "LUNCH", //Basic
//     subCategories: [
//       {
//         name: "CHICKEN", //Basic
//         items: [
//           {
//             name: "CHICKEN SANDWICH", //Basic
//             description:
//               "Chicken sandwich with lettuce, tomato, and fries",
//             price: 12.95, //Basic
//             cost: 4.25, //Basic
//             addToInventory: false, //Basic
//             tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
//             course: 1, //dropdown 1-7
//             printer: 1, //dropdown 1-7
//             cookScreen: 1, //dropdown 1-7
//             expoPrinter: 1, //dropdown 1-7
//             labelPrinter: 1, //dropdown 1-3
//             options: {
//               //all false by default
//               hideOnCart: false,
//               disableDiscount: false,
//               qtyPrompt: false,
//               checkId: false, //Basic
//               serviceItem: false
//             },
//             belongsTo: {
//               //true is default
//               tableService: true,
//               quickServe: true,
//               phoneOrder: true,
//               driveThru: false,
//               online: false,
//               party: false,
//               bar: false
//             },
//             comments: ["lettuce", "tomato", "no onion"],
//             modifiers: [
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "WHITE", cost: 2.5 },
//                   { name: "WHEAT", cost: 0.2 },
//                   { name: "NO BUN", cost: 1.5 }
//                 ]
//               },
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "CHEDDAR", price: 0.5, cost: 0.7 },
//                   { name: "SWISS", price: 0.75, cost: 0.2 }
//                 ]
//               },
//               {
//                 choicesLimit: 2,
//                 forced: true,
//                 modifier: [
//                   { name: "BACON", price: 0.9, cost: 0.6 },
//                   { name: "HAM", price: 0.2, cost: 0.9 }
//                 ]
//               },
//               {
//                 choicesLimit: 3,
//                 forced: false,
//                 modifier: [
//                   { name: "KETCHUP", cost: 0.8 },
//                   { name: "HOT SAUCE", cost: 1.5 },
//                   { name: "MAYO", cost: 0.2 }
//                 ]
//               }
//             ]
//           },
//           {
//             name: "CHICKEN SANDWICH2", //Basic
//             description:
//               "Chicken sandwich with lettuce, tomato, and fries",
//             price: 12.95, //Basic
//             cost: 4.25, //Basic
//             addToInventory: false, //Basic
//             tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
//             course: 1, //dropdown 1-7
//             printer: 1, //dropdown 1-7
//             cookScreen: 1, //dropdown 1-7
//             expoPrinter: 1, //dropdown 1-7
//             labelPrinter: 1, //dropdown 1-3
//             options: {
//               //all false by default
//               hideOnCart: false,
//               disableDiscount: false,
//               qtyPrompt: false,
//               checkId: false, //Basic
//               serviceItem: false
//             },
//             belongsTo: {
//               //true is default
//               tableService: true,
//               quickServe: true,
//               phoneOrder: true,
//               driveThru: false,
//               online: false,
//               party: false,
//               bar: false
//             },
//             comments: ["lettuce", "tomato", "no onion"],
//             modifiers: [
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "WHITE", cost: 2.5 },
//                   { name: "WHEAT", cost: 0.2 },
//                   { name: "NO BUN", cost: 1.5 }
//                 ]
//               },
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "CHEDDAR", price: 0.5, cost: 0.7 },
//                   { name: "SWISS", price: 0.75, cost: 0.2 }
//                 ]
//               },
//               {
//                 choicesLimit: 2,
//                 forced: true,
//                 modifier: [
//                   { name: "BACON", price: 0.9, cost: 0.6 },
//                   { name: "HAM", price: 0.2, cost: 0.9 }
//                 ]
//               },
//               {
//                 choicesLimit: 3,
//                 forced: false,
//                 modifier: [
//                   { name: "KETCHUP", cost: 0.8 },
//                   { name: "HOT SAUCE", cost: 1.5 },
//                   { name: "MAYO", cost: 0.2 }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: "LUNCH2", //Basic
//     subCategories: [
//       {
//         name: "CHICKEN2", //Basic
//         items: [
//           {
//             name: "CHICKEN SANDWICH3", //Basic
//             description:
//               "Chicken sandwich with lettuce, tomato, and fries",
//             price: 12.95, //Basic
//             cost: 4.25, //Basic
//             addToInventory: false, //Basic
//             tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
//             course: 1, //dropdown 1-7
//             printer: 1, //dropdown 1-7
//             cookScreen: 1, //dropdown 1-7
//             expoPrinter: 1, //dropdown 1-7
//             labelPrinter: 1, //dropdown 1-3
//             options: {
//               //all false by default
//               hideOnCart: false,
//               disableDiscount: false,
//               qtyPrompt: false,
//               checkId: false, //Basic
//               serviceItem: false
//             },
//             belongsTo: {
//               //true is default
//               tableService: true,
//               quickServe: true,
//               phoneOrder: true,
//               driveThru: false,
//               online: false,
//               party: false,
//               bar: false
//             },
//             comments: ["lettuce", "tomato", "no onion"],
//             modifiers: [
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "WHITE", cost: 2.5 },
//                   { name: "WHEAT", cost: 0.2 },
//                   { name: "NO BUN", cost: 1.5 }
//                 ]
//               },
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "CHEDDAR", price: 0.5, cost: 0.7 },
//                   { name: "SWISS", price: 0.75, cost: 0.2 }
//                 ]
//               },
//               {
//                 choicesLimit: 2,
//                 forced: true,
//                 modifier: [
//                   { name: "BACON", price: 0.9, cost: 0.6 },
//                   { name: "HAM", price: 0.2, cost: 0.9 }
//                 ]
//               },
//               {
//                 choicesLimit: 3,
//                 forced: false,
//                 modifier: [
//                   { name: "KETCHUP", cost: 0.8 },
//                   { name: "HOT SAUCE", cost: 1.5 },
//                   { name: "MAYO", cost: 0.2 }
//                 ]
//               }
//             ]
//           },
//           {
//             name: "CHICKEN SANDWICH4", //Basic
//             description:
//               "Chicken sandwich with lettuce, tomato, and fries",
//             price: 12.95, //Basic
//             cost: 4.25, //Basic
//             addToInventory: false, //Basic
//             tax: { one: true, two: false, three: false, toGo: false }, //Default one is true //Basic
//             course: 1, //dropdown 1-7
//             printer: 1, //dropdown 1-7
//             cookScreen: 1, //dropdown 1-7
//             expoPrinter: 1, //dropdown 1-7
//             labelPrinter: 1, //dropdown 1-3
//             options: {
//               //all false by default
//               hideOnCart: false,
//               disableDiscount: false,
//               qtyPrompt: false,
//               checkId: false, //Basic
//               serviceItem: false
//             },
//             belongsTo: {
//               //true is default
//               tableService: true,
//               quickServe: true,
//               phoneOrder: true,
//               driveThru: false,
//               online: false,
//               party: false,
//               bar: false
//             },
//             comments: ["lettuce", "tomato", "no onion"],
//             modifiers: [
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "WHITE", cost: 2.5 },
//                   { name: "WHEAT", cost: 0.2 },
//                   { name: "NO BUN", cost: 1.5 }
//                 ]
//               },
//               {
//                 choicesLimit: 1,
//                 forced: true,
//                 modifier: [
//                   { name: "CHEDDAR", price: 0.5, cost: 0.7 },
//                   { name: "SWISS", price: 0.75, cost: 0.2 }
//                 ]
//               },
//               {
//                 choicesLimit: 2,
//                 forced: true,
//                 modifier: [
//                   { name: "BACON", price: 0.9, cost: 0.6 },
//                   { name: "HAM", price: 0.2, cost: 0.9 }
//                 ]
//               },
//               {
//                 choicesLimit: 3,
//                 forced: false,
//                 modifier: [
//                   { name: "KETCHUP", cost: 0.8 },
//                   { name: "HOT SAUCE", cost: 1.5 },
//                   { name: "MAYO", cost: 0.2 }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ]