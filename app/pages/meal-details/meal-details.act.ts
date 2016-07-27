/*
 * Redux action for meal details
 */

interface IMealDetailsIngredientSelect {
  type: string;
  id?: number;
}

export function selectIngredient(id: number): IMealDetailsIngredientSelect {
  "use strict";
  return {
    type: "Select Ingredient on Meal Details",
    id: id
  };
}

export function unselectIngredient(id: number): IMealDetailsIngredientSelect {
  "use strict";
  return {
    type: "Unselect Ingredient on Meal Details",
    id: id
  };
}

export function selectAllIngredient(): IMealDetailsIngredientSelect {
  "use strict";
  return {
    type: "Select All Ingredient on Meal Details"
  };
}

export function unselectAllIngredient(): IMealDetailsIngredientSelect {
  "use strict";
  return {
    type: "Unselect All Ingredient on Meal Details"
  };
}

