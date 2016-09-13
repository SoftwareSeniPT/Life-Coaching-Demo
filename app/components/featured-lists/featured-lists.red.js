"use strict";
var initialState = [{
        id: 1,
        imgUrl: "./assets/images/pexels-photo-102129-tiny.jpeg",
        title: "At Home HITR",
        iconName: "pitch",
        timeStamp: "1 hour",
        iconBackground: "#ff2e62"
    }, {
        id: 2,
        imgUrl: "./assets/images/pexels-photo-139829-tiny.jpg",
        title: "Message to Luke",
        timeStamp: "10 mins ago"
    }, {
        id: 3,
        imgUrl: "./assets/images/money-card-business-credit-card-50987-tiny.jpg",
        title: "Crispy Chicken",
        iconName: "pencil",
        timeStamp: "6pm",
        iconBackground: "#87d454"
    }];
exports.featuredListReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "Add Item":
            return state.concat([
                {
                    id: action.id,
                    name: action.name,
                    power: action.power
                }
            ]);
        case "Remove Item":
            return state.slice(0, action.id).concat(state.slice(action.id + 1));
        default:
            return state;
    }
};
