/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
  messages: [{
    name: "Justin Jackson",
    profilePic: "./assets/images/profile-pic.png",
    subject: "Re: Lorem ipsum dolor sit amet",
    text: "Is your idea of a morning workout reaching...",
    time: "5m",
    removeButtonOpened: false,
    read: true
  }, {
    name: "Marie Carrie",
    profilePic: "./assets/images/profile-pic-1.jpg",
    subject: "Re: Lorem ipsum dolor sit amet",
    text: "Is your idea of a morning workout reaching...",
    time: "10m",
    removeButtonOpened: false,
    read: true
  }, {
    name: "Edgar Poe",
    profilePic: "./assets/images/profile-pic-2.jpg",
    subject: "Re: Lorem ipsum dolor sit amet",
    text: "Is your idea of a morning workout reaching...",
    time: "25m",
    removeButtonOpened: false,
    read: false
  }, {
    name: "Donald Mill",
    profilePic: "./assets/images/profile-pic-1.jpg",
    subject: "Re: Lorem ipsum dolor sit amet",
    text: "Is your idea of a morning workout reaching...",
    time: "1h",
    removeButtonOpened: false,
    read: false
  }, {
    name: "Anna Jean",
    profilePic: "./assets/images/profile-pic.png",
    subject: "Re: Lorem ipsum dolor sit amet",
    text: "Is your idea of a morning workout reaching...",
    time: "2h",
    removeButtonOpened: false,
    read: true
  }, {
    name: "Rome Lean",
    profilePic: "./assets/images/profile-pic.png",
    subject: "Re: Lorem ipsum dolor sit amet",
    text: "Is your idea of a morning workout reaching...",
    time: "3h",
    removeButtonOpened: false,
    read: true
  }]
};

export const messageReducer: any = (state: any = initialState, action: any) => {
    let messageList: any;
    switch (action.type) {
        case "Open remove action":
            messageList = state.messages.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { removeButtonOpened: true });
                } else {
                    return Object.assign({}, o, { removeButtonOpened: false });
                }
            });
            return Object.assign({}, state, { messages: messageList });

        case "Close remove action":
            messageList = state.messages.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign({}, o, { removeButtonOpened: false });
                } else {
                    return Object.assign({}, o, { removeButtonOpened: false });
                }
            });
            return Object.assign({}, state, { messages: messageList });

        case "Remove message item":
            messageList = [...state.messages.slice(0, action.id),
                ...state.messages.slice(action.id + 1)];
            return Object.assign({}, state, { messages: messageList });

        default:
            return state;
    }
};
