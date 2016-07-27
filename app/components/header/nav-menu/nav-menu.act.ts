/*
 * Redux action for hero component
 */

interface INavMenuVisibility {
    type: string;
    visible: boolean;
}

interface INavSubMenuVisibility {
    type: string;
    id: number;
    visible: boolean;
}

export function navmenuVisibility(currentVisibility: boolean): INavMenuVisibility {
    "use strict";

    return {
        type: "Set Navigation Menu Visibility",
        visible: (currentVisibility ? false : true)
    };
}

export function navSubmenuVisibility(id: number, currentVisibility: boolean): INavSubMenuVisibility {
    "use strict";

    return {
        type: "Set Navigation Menu Visibility",
        id: id,
        visible: (currentVisibility ? false : true)
    };
}
