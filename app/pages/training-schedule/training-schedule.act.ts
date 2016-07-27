/*
 * Redux action for hero component
 */ 

export function selectSchedule(id: number, dayID: number, current: number): any {
    "use strict";

    return {
      type: "Select schedule on schedule list",
      id: id,
      dayID: dayID,
      current: current
    };
}

export function selectCustomEntry(id: number): any {
    "use strict";

    return {
      type: "Select custom entry on schedule list",
      id: id
    };
}

export function unselectCustomEntry(id: number): any {
    "use strict";

    return {
      type: "Unselect custom entry on schedule list",
      id: id
    };
}

