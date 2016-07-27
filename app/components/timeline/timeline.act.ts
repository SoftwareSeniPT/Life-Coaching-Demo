/*
 * Redux action for hero component
 */ 

interface ICommentVisibility {
  type: string;
  id: number;
  visible: boolean;
}

export function commentVisibility(id: number, currentVisibility: boolean): ICommentVisibility {
  "use strict";

  return {
    type: "Set Comment Visibility",
    id: id,
    visible: (currentVisibility ? false : true)
  };
}

export function setVideoOnLoad(id: number): any {
  "use strict";

  return {
    type: "Set Video OnLoad",
    id: id
  };
}

export function setVideoPause(id: number): any {
  "use strict";

  return {
    type: "Set Video Pause",
    id: id
  };
}

