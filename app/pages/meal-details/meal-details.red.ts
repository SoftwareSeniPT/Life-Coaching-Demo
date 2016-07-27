/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
  name: "BBQ Steak",
  title: "With carrots & green salad",
  rating: 4,
  tags: ["Easy", "Gluten Free", "Vegetarian"],
  preparation: "20 mins",
  cooking: "20 mins",
  serves: 2,
  imageUrl: "./assets/images/meal-4.jpg",
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Neque, mollitia consequatur, qui dolor possimus in, 
        consectetur dolore aspernatur earum dolorem fugit odit. 
        Assumenda veritatis architecto voluptatibus, aperiam non ipsum.`,
  macros: [{
    name: "Fats",
    value: 20,
    unit: "g"
  }, {
    name: "Carbs",
    value: 50,
    unit: "g"
  }, {
    name: "Protein",
    value: 40,
    unit: "g"
  }],
  selectedIngredients: 0,
  ingredients: [{
    id: 1,
    name: "Ingredient list item one",
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
  }],
  method: [
    "Chop the broccoli, beans, cauliflower and carrots into similar size pieces and put in boiling water.",
    "Prepare the fish by scoring with a sharp knife and rubbing salt and the coriander into the flesh.",
    "Chop the broccoli, beans, cauliflower and carrots into similar size pieces and put in boiling water.",
    `Prepare the fish by scoring with a sharp knife and rubbing salt and the coriander into the flesh. 
      Prepare the fish by scoring with a sharp knife and rubbing salt and the coriander into the flesh. 
      Prepare the fish by scoring with sharp knife and rubbing salt and the coriander into the flesh.`
  ]
};

export const mealDetailsReducer: any = (state: any = initialState, action: any) => {
    let ingredients: any;
    switch (action.type) {
      case "Select Ingredient on Meal Details":
            ingredients = state.ingredients.map((o: any, i: number) => {
              if (action.id === i) {
                return Object.assign({}, o, {selected: true});
              } else {
                return o;
              }
            });

            return Object.assign({}, state, { 
              ingredients: ingredients,
              selectedIngredients: (state.selectedIngredients + 1)
            });

      case "Unselect Ingredient on Meal Details":
            ingredients = state.ingredients.map((o: any, i: number) => {
              if (action.id === i) {
                return Object.assign({}, o, {selected: false});
              } else {
                return o;
              }
            });

            return Object.assign({}, state, {
              ingredients: ingredients, 
              selectedIngredients: (state.selectedIngredients - 1) 
            });

      case "Select All Ingredient on Meal Details":
          ingredients = state.ingredients.map((o: any, i: number) => {
            return Object.assign({}, o, { selected: true });
          });

          return Object.assign({}, state, {
            ingredients: ingredients,
            selectedIngredients: state.ingredients.length
          });

      case "Unselect All Ingredient on Meal Details":
            ingredients = state.ingredients.map((o: any, i: number) => {
                return Object.assign({}, o, {selected: false});
            });

            return Object.assign({}, state, { 
              ingredients: ingredients, 
              selectedIngredients: 0 
            });

        default:
            return state;
    }
};

