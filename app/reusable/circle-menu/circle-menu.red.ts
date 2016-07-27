/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;
const initialState: any = {
    menuOpened: false
};

export const circleMenuReducer: any = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "Toogle open menu":
            let visible: boolean;
            if (action.visible) {
              visible = false;
            } else {
              visible = true;
            }
            return Object.assign({}, state, { menuOpened: visible });

        default:
            return state;
    }
};
