/*
 * Reducer for Timeline component
 */

const initialState: any = {
    name: "Alison Everet",
    friendCount: 27,
    groupCount: 5,
    location: "Sidney",
    signupDate: "2 August 2015",
    lastActive: "5 mins ago",
    imageUrl: "./assets/images/profile-pic.png",
    bgUrl: "./assets/images/profile-pic.png"
};

export const wallHeroReducer: any = (state: any = initialState, action: any) => {

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
