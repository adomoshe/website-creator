const categoryModel = [
  {
    name: "", //Basic
    subCategories: [
      {
        name: "", //Basic
        items: [
          {
            name: "", //Basic
            description: "",
            price: null, //Basic
            cost: null, //Basic
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
            comments: [],
            modifiers: [
              {
                choicesLimit: null,
                forced: false,
                modifier: [{ name: "", cost: null }]
              },
              {
                choicesLimit: null,
                forced: false,
                modifier: [{ name: "", price: null,  cost: null }]
              },
              {
                choicesLimit: null,
                forced: false,
                modifier: [{ name: "", price: null, cost: null }]
              },
              {
                choicesLimit: null,
                forced: false,
                modifier: [{ name: "", cost: null }]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default categoryModel;
