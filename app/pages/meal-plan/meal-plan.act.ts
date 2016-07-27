/*
 * Redux action for hero component
 */ 

interface IShoppingListVisibility {
  type: string;
  id: number;
  visible: boolean;
}

interface IShoppingListView {
  type: string;
  id: number;
  view: string;
}

export function shoppingListVisibility(id: number, currentVisibility: boolean): IShoppingListVisibility {
  "use strict";

  return {
    type: "Set Shopping List Day Visibility",
    id: id,
    visible: (currentVisibility ? false : true)
  };
}

export function shoppingListView(id: number, currentView: string): IShoppingListView {
  "use strict";

  return {
    type: "Set View List Style",
    id: id,
    view: currentView
  };
}

export function openShoppingListItem(categoryID: number, itemID: number): any {
  "use strict";

  return {
    type: "Open Shopping List Item",
    categoryID: categoryID,
    itemID: itemID
  };
}

