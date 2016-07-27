/*
 * Redux action for hero component
 */ 

export function toogleOpenMenu(currentVisibility: boolean): any {
  "use strict";
  return {
    type: "Toogle open menu",
    visible: currentVisibility
  };
}

