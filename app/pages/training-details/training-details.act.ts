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

export function trainingDetailsListVisibility(id: number, currentVisibility: boolean): ITrainingListVisibility {
    "use strict";

    return {
      type: "Set Training Details Video Visibility",
      id: id,
      visible: (currentVisibility ? false : true)
    };
}

export function trainingDetailsListView(id: number, currentView: string): ITrainingListView {
    "use strict";

    return {
      type: "Set Training Details Video View Style",
      id: id,
      view: currentView
    };
}

export function openTrainingDetailsListItem(categoryID: number, itemID: number): any {
    "use strict";

    return {
        type: "Open Training Details Video Item",
        categoryID: categoryID,
        itemID: itemID
    };
}

