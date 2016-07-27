/*
 * Reducer for Timeline component
 */

const initialState: any = [{
    id: 1,
    type: "sleepStats",
    sleepTimeAverage: 5.4,
    text: "You are sleeping an average of 5.4 hours per night this week. That might not be enough."
}, {
    id: 2,
    type: "currentWeather",
    location: "Sidney, NSW",
    current: {
        time: "Sat, 9.00AM",
        temperature: 25,
        weather: "Partly Cloudy"
    },
    later: {
        time: "Sat, 15.00AM",
        temperature: 12,
        weather: "Chance of Rain"
    }
}, {
    id: 3,
    type: "dailyAffirmation",
    imgUrl: "./assets/images/profile-pic.png",
    text: "I am here. I am present. I am fearless. Imagine what I could achieve if there were no fear."
}];

export const overviewReducer: any = (state: any = initialState, action: any) => {

    switch (action.type) {
        case "Add Item":
            return [
                ...state, {
                    id: action.id,
                    name: action.name,
                    power: action.power
                }
            ];

        case "Remove Item":
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];

        default:
            return state;
    }
};
