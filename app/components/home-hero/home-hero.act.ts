/*
 * Redux action for meal details
 */

interface IMealDetailsIngredientSelect {
  type: string;
  id?: number;
}

export function slideNextActivity(): IMealDetailsIngredientSelect {
  "use strict";
  return {
    type: "Slide next activity detail"
  };
}

export function slidePrevActivity(): IMealDetailsIngredientSelect {
  "use strict";
  return {
    type: "Slide prev activity detail"
  };
}

