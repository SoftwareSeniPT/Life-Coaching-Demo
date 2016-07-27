/*
 * Redux action for meal details
 */

interface IList {
  type: string;
  itemID?: number;
  listID?: number;
}

export function selectList(itemID: number, listID: number): IList {
  "use strict";
  return {
    type: "Select List on Shopping List",
    itemID: itemID,
    listID: listID
  };
}

export function unselectList(itemID: number, listID: number): IList {
  "use strict";
  return {
    type: "Unselect List on Shopping List",
    itemID: itemID,
    listID: listID
  };
}

export function selectAllList(): IList {
  "use strict";
  return {
    type: "Select All List on Shopping List"
  };
}

export function unselectAllList(): IList {
  "use strict";
  return {
    type: "Unselect All List on Shopping List"
  };
}

export function addItem(value: string): any {
  "use strict";
  return {
    type: "Add item on Shopping List",
    value: value
  };
}

export function removeItem(id: number): any {
  "use strict";
  return {
    type: "Remove Item on Shopping List",
    id: id
  };
}

