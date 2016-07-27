/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
  trainingList: [{
    categoryTitle: "Week Four",
    visibility: true,
    view: "list",
    items: [{
      name: "Deadlift",
      desc: "Keep your knees soft, start from bottom and keep our core on",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-1.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "01"
      },
      opened: true,
      leftMenu: {
        type: "link",
        icon: "edit",
        value: "Edit Weight"
      },
      middleMenu: {
        name: "More Info",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: true
      }
    }, {
      name: "Bent Over Row",
      desc: "Keep your knees soft, start from bottom and keep our core on",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-2.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "02"
      },
      opened: true,
      leftMenu: {
        type: "link",
        icon: "edit",
        value: "Edit Weight"
      },
      middleMenu: {
        name: "More Info",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }, {
      name: "Pull Ups",
      desc: "Keep your knees soft, start from bottom and keep our core on",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-3.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Superset 3A"
      },
      opened: true,
      leftMenu: {
        type: "link",
        icon: "edit",
        value: "Edit Weight"
      },
      middleMenu: {
        name: "More Info",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }, {
      name: "Burpees",
      desc: "Keep your knees soft, start from bottom and keep our core on",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-4.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Superset 3B"
      },
      opened: true,
      leftMenu: {
        type: "link",
        icon: "edit",
        value: "Edit Weight"
      },
      middleMenu: {
        name: "More Info",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }]
  }]
};

export const trainingDetailsReducer: any = (state: any = initialState, action: any) => {
    let trainingList: any;
    switch (action.type) {
        case "Set Training Details Video Visibility":
            trainingList = state.trainingList.map((o: any, i: number) => {
            if (i === action.id) {
                return Object.assign({}, o, { visibility: action.visible });
              } else {
                return o;
              }
            });

            return Object.assign({}, state, { trainingList: trainingList });

        case "Set Training Details Video View Style":
            trainingList = state.trainingList.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { view: action.view });
                } else {
                    return o;
                }
            });

            return Object.assign({}, state, { trainingList: trainingList });

        case "Open Training Details Video Item":
            trainingList = state.trainingList.map((o: any, i: number) => {
                if (i === action.categoryID) {
                    const items: any = o.items.map((item: any, key: number) => {
                        if (key === action.itemID) {
                            return Object.assign({}, item, { opened: true });
                        } else {
                            return item;
                        }
                    });

                    return Object.assign({}, o, { items: items });
                } else {
                    return o;
                }
            });

            return Object.assign({}, state, { trainingList: trainingList });

        default:
            return state;
    }
};
