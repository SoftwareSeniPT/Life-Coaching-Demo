/*
 * Redux action for hero component
 */ 

export function openRemoveAction(id: number): any {
  "use strict";

  return {
    type: "Open remove action",
    id: id
  };
}

export function closeRemoveAction(id: number): any {
  "use strict";

  return {
    type: "Close remove action",
    id: id
  };
}

export function removeItem(id: number): any {
  "use strict";

  return {
    type: "Remove message item",
    id: id
  };
}
