/*
 * Reducer for Timeline component
 */

const initialState: any = {
    progressPoints: 57,
    targetPoints: 120
};

export const progressChartReducer: any = (state: any = initialState, action: any) => {

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
