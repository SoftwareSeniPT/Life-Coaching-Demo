/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
    intensityLevel: {
        selectedActivity: 0,
        activities: [{
            type: "steps",
            total: 23657,
            goal: 10000
        }, {
            type: "drink",
            total: "2.0",
            goal: "3.0"
        }, {
            type: "sleep",
            total: 6,
            goal: 8
        }],
        chartData: {
          data: [7, 5, 10, 7, 80, 90, 30, 7, 5, 7, 50],
          colors: ["#fac763", "#fe2d60", "#26ff93", "#fac763", "#26ff93", "#777", "#fe2d60", "#fac763", "#fe2d60", "#fac763", "#26ff93"]
        }
    },
    profileOverview: {
        imageUrl: "./assets/images/profile-pic.png",
        name: "Gaynor Missingham",
        lastActive: "10 mins ago"
    },
    blurredBackground: {
        imageUrl: "./assets/images/profile-pic.png"
    }
};

export const homeHeroReducer: any = (state: any = initialState, action: any) => {
    let chart: any;
    switch (action.type) {
        case "Slide next activity detail":
            const newIDnext: number = state.intensityLevel.selectedActivity + 1;
            if (newIDnext < state.intensityLevel.activities.length) {
              chart = Object.assign({}, ...state.intensityLevel, {
                selectedActivity: newIDnext
              });

              return Object.assign({}, ...state, { intensityLevel: chart });
            } else {
              return state;
            }
            break;

        case "Slide prev activity detail":
            const newIDprev: number = state.intensityLevel.selectedActivity - 1;
            if (newIDprev >= 0) {
              chart = Object.assign({}, ...state.intensityLevel, {
                selectedActivity: newIDprev
              });

              return Object.assign({}, ...state, { intensityLevel: chart });
            } else {
              return state;
            }
            break;

        default:
            return state;
    }
};
