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
      name: "Core Crusher",
      desc: "At home functional training",
      link: "/training-details",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-1.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Monday"
      },
      opened: true,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Cardio"
        }, {
          name: "At Home"
        }, {
          name: "Strength"
        }, {
          name: "Functional"
        }]
      },
      middleMenu: {
        name: "Reschedule",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: true
      }
    }, {
      name: "Core Crusher",
      desc: "At home functional training",
      link: "/training-details",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-2.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Tuesday"
      },
      opened: true,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Cardio"
        }, {
            name: "At Home"
          }, {
            name: "Strength"
          }, {
            name: "Functional"
          }]
      },
      middleMenu: {
        name: "Reschedule",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }, {
      name: "Active Rest",
      desc: "At home functional training",
      link: "/training-details",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-3.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Wednesday"
      },
      opened: true,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Cardio"
        }, {
            name: "At Home"
          }, {
            name: "Strength"
          }, {
            name: "Functional"
          }]
      },
      middleMenu: {
        name: "Reschedule",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }]
  }, {
    categoryTitle: "Week Four",
    visibility: false,
    view: "list",
    items: [{
      name: "Core Crusher",
      desc: "At home functional training",
      link: "/training-details",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-4.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Friday"
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Cardio"
        }, {
            name: "At Home"
          }, {
            name: "Strength"
          }, {
            name: "Functional"
          }]
      },
      middleMenu: {
        name: "Reschedule",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: true
      }
    }, {
      name: "Core Crusher",
      desc: "At home functional training",
      link: "/training-details",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-1.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Saturday"
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Cardio"
        }, {
            name: "At Home"
          }, {
            name: "Strength"
          }, {
            name: "Functional"
          }]
      },
      middleMenu: {
        name: "Reschedule",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }, {
      name: "Active Rest",
      desc: "At home functional training",
      link: "/training-details",
      media: {
        type: "video",
        thumbnailUrl: "./assets/images/workout-2.jpg",
        showThumbnailOnly: true,
        videoIframeUrl: "//players.brightcove.net/4531464363001/" +
          "0d03fc6c-15e0-4cff-957a-90f22a17f2e2_default/index.html?videoId=4649061187001"
      },
      label: {
        type: "text",
        value: "Sunday"
      },
      opened: false,
      leftMenu: {
        type: "tags",
        tags: [{
          name: "Cardio"
        }, {
            name: "At Home"
          }, {
            name: "Strength"
          }, {
            name: "Functional"
          }]
      },
      middleMenu: {
        name: "Reschedule",
        callback: ""
      },
      rightMenu: {
        type: "check",
        selected: false
      }
    }]
  }]
};

export const trainingWeekReducer: any = (state: any = initialState, action: any) => {
    let trainingList: any;
    switch (action.type) {
      case "Set Training List Day Visibility":
            trainingList = state.trainingList.map((o: any, i: number) => {
            if (i === action.id) {
              return Object.assign({}, o, { visibility: action.visible });
            } else {
              return o;
            }
          });

            return Object.assign({}, state, { trainingList: trainingList });

        case "Set Training List View Style":
            trainingList = state.trainingList.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { view: action.view });
                } else {
                    return o;
                }
            });

            return Object.assign({}, state, { trainingList: trainingList });

        case "Open Training List Item":
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
