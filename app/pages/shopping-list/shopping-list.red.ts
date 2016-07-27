/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
  selectedList: 0,
  shopping: [{
    name: "Protein",
    lists: [{
      id: 1,
      name: "3 chicken breasts",
      selected: false
    }, {
      id: 2,
      name: "2 fillet salmons",
      selected: false
    }, {
      id: 3,
      name: "Ingredient list",
      selected: false
    }, {
      id: 4,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 5,
      name: "Ingredient list",
      selected: false
    }]
  }, {
    name: "Vegetables / Fruit",
    lists: [{
      id: 1,
      name: "2 avocados",
      selected: false
    }, {
      id: 2,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 3,
      name: "Ingredient list",
      selected: false
    }, {
      id: 4,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 5,
      name: "Ingredient list",
      selected: false
    }]
  }, {
    name: "Fats",
    lists: [{
      id: 1,
      name: "300g butter",
      selected: false
    }, {
      id: 2,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 3,
      name: "Ingredient list",
      selected: false
    }, {
      id: 4,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 5,
      name: "Ingredient list",
      selected: false
    }]
  }, {
    name: "Carbohydrates",
    lists: [{
      id: 1,
      name: "2 cups rice",
      selected: false
    }, {
      id: 2,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 3,
      name: "Ingredient list",
      selected: false
    }, {
      id: 4,
      name: "Ingredient list item longer",
      selected: false
    }, {
      id: 5,
      name: "Ingredient list",
      selected: false
    }]
  }, {
    name: "Others",
    lists: [{
      id: 1,
      name: "Comes up as list item once entered",
      selected: false
    }]
  }]
};

const length: any = (state: any) => {
  let num: number = 0;
  state.shopping.map((o: any) => {
    num = num + o.lists.length;
  });
  return num;
};

export const shoppingListReducer: any = (state: any = initialState, action: any) => {
    let shopping: any;
    switch (action.type) {
      case "Select List on Shopping List":
            shopping = state.shopping.map((o: any, i: number) => {
              if (action.itemID === i) {
                const lists: any = o.lists.map((list: any, id: number) => {
                  if (action.listID === id) {
                    return Object.assign({}, list, { selected: true });
                  } else {
                    return list;
                  }
                });
                return Object.assign({}, o, { lists: lists });
              } else {
                return o;
              }
            });

            return Object.assign({}, state, { 
              shopping: shopping,
              selectedList: (state.selectedList + 1)
            });

      case "Unselect List on Shopping List":
          shopping = state.shopping.map((o: any, i: number) => {
            if (action.itemID === i) {
              const lists: any = o.lists.map((list: any, id: number) => {
                if (action.listID === id) {
                  return Object.assign({}, list, { selected: false });
                } else {
                  return list;
                }
              });
              return Object.assign({}, o, { lists: lists });
            } else {
              return o;
            }
          });

          return Object.assign({}, state, {
            shopping: shopping,
            selectedList: (state.selectedList - 1)
          });

      case "Add item on Shopping List":
          shopping = state.shopping.map((o: any, i: number) => {
            if (o.name === "Others") {
              const lists: any = [...o.lists, {
                id: (o.lists.length + 1),
                name: action.value,
                showRemove: true,
                selected: false
              }];

              return Object.assign({}, o, { lists: lists });
            } else {
              return o;
            }
          });

          return Object.assign({}, state, {
            shopping: shopping
          });

      case "Remove Item on Shopping List":

        shopping = state.shopping.map((o: any, i: number) => {
          if (o.name === "Others") {
            const lists: any = [
              ...o.lists.slice(0, action.id),
              ...o.lists.slice(action.id + 1)
            ]; 
            return Object.assign({}, o, { lists: lists });
          } else {
            return o;
          }
        });

        return Object.assign({}, state, {
          shopping: shopping
        });                 

      case "Select All List on Shopping List":
          shopping = state.shopping.map((o: any, i: number) => {
              const lists: any = o.lists.map((list: any, id: number) => {
                  return Object.assign({}, list, { selected: true });
              });
              return Object.assign({}, o, { lists: lists });
          });

          return Object.assign({}, state, {
            shopping: shopping,
            selectedList: length(state)
          });

      case "Unselect All List on Shopping List":
          shopping = state.shopping.map((o: any, i: number) => {
            const lists: any = o.lists.map((list: any, id: number) => {
              return Object.assign({}, list, { selected: false });
            });
            return Object.assign({}, o, { lists: lists });
          });

          return Object.assign({}, state, {
            shopping: shopping,
            selectedList: 0
          });

        default:
            return state;
    }
};

