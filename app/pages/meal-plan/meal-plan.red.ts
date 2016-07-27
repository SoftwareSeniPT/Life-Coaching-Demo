/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;
const initialState: any = {
  shoppingList: [{
    categoryTitle: "Monday",
    visibility: true,
    view: "grid",
    items: [{
      name: "Crispy Chicken Salad",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-1.jpg"
      },
      label: {
        type: "rating",
        value: 4
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: true
      }
    }, {
      name: "BBQ Steak",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-2.jpg"
      },
      label: {
        type: "rating",
        value: 4
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: false
      }
    }, {
      name: "Mushroom Omlette",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-3.jpg"
      },
      label: {
        type: "rating",
        value: 4
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: false
      }
    }, {
      name: "Crispy Chicken",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-4.jpg"
      },
      label: {
        type: "rating",
        value: 4
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: false
      }
    }]
  }, {
    categoryTitle: "Tuesday",
    visibility: false,
    view: "list",
    items: [{
      name: "Crispy Chicken Salad",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-2.jpg"
      },
      opened: false,
      label: {
        type: "rating",
        value: 4
      },
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: false
      }
    }, {
      name: "BBQ Steak",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-1.jpg"
      },
      opened: false,
      label: {
        type: "rating",
        value: 4
      },
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: false
      }
    }, {
      name: "Mushroom Omlette",
      desc: "With roast sweet potato & chives",
      link: "/meal-details",
      media: {
        type: "image",
        thumbnailUrl: "./assets/images/meal-4.jpg"
      },
      opened: false,
      label: {
        type: "rating",
        value: 4
      },
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Easy"
        }, {
          name: "GF"
        }, {
          name: "DF"
        }, {
          name: "Vegetarian"
        }]
      },
      middleMenu: {
        name: "Swap",
        callback: ""
      },
      rightMenu: {
        type: "add",
        selected: false
      }
    }]
  }]
};

export const mealPlanReducer: any = (state: any = initialState, action: any) => {
    let shoppingList: any;
    switch (action.type) {
      case "Set Shopping List Day Visibility":
          shoppingList = state.shoppingList.map((o: any, i: number) => {
            if (i === action.id) {
              return Object.assign({}, o, { visibility: action.visible });
            } else {
              return o;
            }
          });

          return Object.assign({}, state, { shoppingList: shoppingList });

        case "Set View List Style":
          shoppingList = state.shoppingList.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { view: action.view });
                } else {
                    return o;
                }
            });

          return Object.assign({}, state, { shoppingList: shoppingList });

        case "Open Shopping List Item":
          shoppingList = state.shoppingList.map((o: any, i: number) => {
                if (i === action.categoryID) {
                    const items: any = o.items.map((item: any, key: number) => {
                      if (key === action.itemID) {
                          return Object.assign({}, item, { opened: true });
                      } else {
                          return item;
                      }
                    });

                    return Object.assign({}, o, { items: items });
                } else {
                    return o;
                }
            });

          return Object.assign({}, state, { shoppingList: shoppingList });

        default:
            return state;
    }
};
