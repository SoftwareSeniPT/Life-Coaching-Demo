/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = [{
    name: "Activity",
    url: "/activity-screen",
    submenu: [],
    submenuVisibility: false
}, {
    name: "My Day Ahead",
    url: null,
    submenu: [],
    submenuVisibility: false
}, {
    name: "Training Plan",
    url: null,
    submenu: [{
        name: "Next Training Session",
        url: "/training-week"
    }, {
        name: "Training Schedule",
        url: "/training-schedule"
    }, {
        name: "Calendar",
        url: null
    }, {
        name: "Exercise Library",
        url: null
    }, {
        name: "Exercise",
        url: null
    }, {
        name: "Training Log",
        url: "/training-log"
    }, {
        name: "My Program",
        url: null
    }],
    submenuVisibility: false
}, {
    name: "Meal Plan",
    url: null,
    submenu: [{
        name: "Meal Plan",
        url: "/meal-plan"
    }, {
        name: "Recipe Library",
        url: null
    }, {
        name: "Recipe",
        url: null
    }, {
        name: "Nutrition Info",
        url: null
    }, {
        name: "Shopping List",
        url: "/shopping-list"
    }],
    submenuVisibility: false
}, {
    name: "My Trainer",
    url: null,
    submenu: [],
    submenuVisibility: false
}, {
    name: "Settings",
    url: null,
    submenu: [],
    submenuVisibility: false
}];

/* Nav  visibility */
export const navMenuReducer: any = (state: any = initialState, action: any) => {

    switch (action.type) {
        case "Set Submenu Visibility":
            return state.map((o: any, i: number) => {
              if (i === action.id) {
                return Object.assign(o, { submenuVisibility: action.visible });
              } else {
                return o;
              }
            });

        default:
            return state;
    }
};

/* Nav menu visibility */
export const navMenuVisibilityReducer: any = (state: any = {visible: false}, action: any) => {

    switch (action.type) {
        case "Set Navigation Menu Visibility":
            return { visible: action.visible };

        default:
            return state;
    }
};
