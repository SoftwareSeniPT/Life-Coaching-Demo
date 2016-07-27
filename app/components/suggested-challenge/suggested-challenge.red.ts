/*
 * Reducer for Timeline component
 */

const initialState: any = [{
    id: 1,
    challengeType: "Distance Challenge",
    challengeName: "Kerri's \"Lead the Way\"",
    challengeDesc: "Challenge up to 40 of your friends to see who can run the furtherst in a weekend and log the most distance.",
    imgUrl: "./assets/images/yoda.jpg"
}];

export const suggestedChallengeReducer: any = (state: any = initialState, action: any) => {

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
