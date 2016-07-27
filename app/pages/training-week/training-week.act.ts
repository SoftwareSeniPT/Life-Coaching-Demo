/*
 * Redux action for hero component
 */ 

interface ITrainingListVisibility {
  type: string;
  id: number;
  visible: boolean;
}

interface ITrainingListView {
  type: string;
  id: number;
  view: string;
}

export function trainingListVisibility(id: number, currentVisibility: boolean): ITrainingListVisibility {
  "use strict";

  return {
    type: "Set Training List Day Visibility",
    id: id,
    visible: (currentVisibility ? false : true)
  };
}

export function trainingListView(id: number, currentView: string): ITrainingListView {
  "use strict";

  return {
    type: "Set Training List View Style",
    id: id,
    view: currentView
  };
}

export function openTrainingListItem(categoryID: number, itemID: number): any {
    "use strict";

    return {
        type: "Open Training List Item",
        categoryID: categoryID,
        itemID: itemID
    };
}

