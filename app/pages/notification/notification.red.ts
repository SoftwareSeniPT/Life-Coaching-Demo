/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
  notifications: [{
    name: "Justin Jackson",
    profilePic: "./assets/images/profile-pic.png",
    type: "follow",
    removeButtonOpened: false,
    read: true
  }, {
    name: "Marie Carrie",
    profilePic: "./assets/images/profile-pic-1.jpg",
    type: "postLike",
    post: "Is your idea of a morning workout reaching...",
    removeButtonOpened: false,
    read: true
  }, {
    name: "Edgar Poe",
    profilePic: "./assets/images/profile-pic-2.jpg",
    type: "commentLike",
    post: "Lorem ipsum dolor sit amet, consectetur...",
    removeButtonOpened: false,
    read: false
  }, {
    name: "Donald Mill",
    profilePic: "./assets/images/profile-pic-1.jpg",
    type: "sharePost",
    post: "Soluta consectetur fuga voluptatibus mini...",
    removeButtonOpened: false,
    read: false
  }, {
    name: "Anna Jean",
    profilePic: "./assets/images/profile-pic.png",
    type: "post",
    post: "Distinctio vitae nulla laboriosam aperiam...",
    removeButtonOpened: false,
    read: true
  }, {
    name: "Rome Lean",
    profilePic: "./assets/images/profile-pic.png",
    type: "comment",
    post: "Soluta consectetur fuga voluptatibus mini...",
    removeButtonOpened: false,
    read: true
  }]
};

export const notificationReducer: any = (state: any = initialState, action: any) => {
    let notifList: any;
    switch (action.type) {
        case "Open remove action":
            notifList = state.notifications.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { removeButtonOpened: true });
                } else {
                    return Object.assign({}, o, { removeButtonOpened: false });
                }
            });
            return Object.assign({}, state, { notifications: notifList });

        case "Close remove action":
            notifList = state.notifications.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { removeButtonOpened: false });
                } else {
                    return Object.assign({}, o, { removeButtonOpened: false });
                }
            });
            return Object.assign({}, state, { notifications: notifList });

        case "Remove notification item":
            notifList = [...state.notifications.slice(0, action.id),
                ...state.notifications.slice(action.id + 1)];
            return Object.assign({}, state, { notifications: notifList });

        default:
            return state;
    }
};
