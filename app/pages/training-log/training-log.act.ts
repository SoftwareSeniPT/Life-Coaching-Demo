/*
 * Redux action for hero component
 */ 

export function selectTraining(id: number): any {
    "use strict";

    return {
      type: "Select training on training log",
      id: id
    };
}

export function changeMonthShown(month: string): any {
    "use strict";

    return {
      type: "Change month shown",
      month: month
    };
}

