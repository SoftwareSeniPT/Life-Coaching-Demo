/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
    scheduleSelected: 0,
    schedule: [{
        name: "Monday",
        date: "May 3",
        selected: false
    }, {
        name: "Tuesday",
        date: "May 4",
        selected: false
    }, {
        name: "Wednesday",
        date: "May 5",
        selected: false
    }, {
        name: "Thursday",
        date: "May 6",
        selected: false
    }, {
        name: "Friday",
        date: "May 7",
        selected: false
    }, {
        name: "Saturday",
        date: "May 8",
        selected: false
    }, {
        name: "Sunday",
        date: "May 9",
        selected: false
    }],
    customEntries: [{
        name: "Yoga",
        time: "Wednesday AM",
        duration: "1 hour",
        selected: true
    }, {
        name: "Walking",
        time: "Wednesday AM",
        duration: "1 hour",
        selected: false
    }, {
        name: "Yoga",
        time: "Wednesday AM",
        duration: "1 hour",
        selected: false
    }]
};

export const trainingScheduleReducer: any = (state: any = initialState, action: any) => {
    let scheduleList: any;
    let customEntries: any;
    switch (action.type) {
        case "Select schedule on schedule list":
            scheduleList = state.schedule.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { 
                        selected: (action.dayID === action.current ? false : action.dayID)
                    });
                } else {
                    return o;
                }
            });

            return Object.assign({}, state, { 
                schedule: scheduleList
            });

        case "Select custom entry on schedule list":
            customEntries = state.customEntries.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { 
                        selected: true
                    });
                } else {
                    return o;
                }
            });

            return Object.assign({}, state, { customEntries: customEntries });

        case "Unselect custom entry on schedule list":
            customEntries = state.customEntries.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, {
                        selected: false
                    });
                } else {
                    return o;
                }
            });

            return Object.assign({}, state, { customEntries: customEntries });

        default:
            return state;
    }
};
