/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = [{
    id: 1,
    type: "text",
    showComment: false,
    content: {
        name: "Gaynor Missingham",
        isAdmin: true,
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "3:15pm",
        onlineUser: true,
        text: "Is your idea of a morning workout reaching over to pick up the pizza box?",
        likeCount: 13,
        liked: false
    },
    comments: [{
        id: 1,
        name: "Jonathan Black",
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "Yesterday at 3:15pm",
        onlineUser: false,
        text: "Is your idea of a morning workout reaching over to pick up the pizza box?",
        likeCount: 12,
        liked: false
    }, {
        id: 2,
        name: "Daisy Ridley",
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "Yesterday at 2:15am",
        onlineUser: false,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere optio quod, dignissimos eaque
        obcaecati unde cum eius vero, quae rerum rem numquam maxime! Neque omnis enim culpa laudantium possimus ut
        nisi cupiditate explicabo modi ratione optio, quis ullam animi ea, maiores aliquid est eligendi et
        molestiae sapiente tempora inventore cumque.`,
        likeCount: 0,
        liked: false
    }]
}, {
    id: 2,
    type: "text",
    showComment: true,
    content: {
        name: "Malik Ibrahim",
        imageUrl: "./assets/images/profile-pic-1.jpg",
        postTimestamp: "4:15pm",
        onlineUser: false,
        text: "Is your idea of a morning workout reaching over to pick up the pizza box?",
        likeCount: 13,
        liked: true
    },
    comments: [{
        id: 1,
        name: "Jonathan Black",
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "Yesterday at 3:15pm",
        onlineUser: false,
        text: "Is your idea of a morning workout reaching over to pick up the pizza box?",
        likeCount: 12,
        liked: true
    }, {
        id: 2,
        name: "Daisy Ridley",
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "Yesterday at 2:15am",
        onlineUser: false,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere optio quod, dignissimos eaque
        obcaecati unde cum eius vero, quae rerum rem numquam maxime! Neque omnis enim culpa laudantium possimus ut
        nisi cupiditate explicabo modi ratione optio, quis ullam animi ea, maiores aliquid est eligendi et
        molestiae sapiente tempora inventore cumque.`,
        likeCount: 0,
        liked: false
    }]
}, {
    id: 3,
    type: "video",
    showComment: true,
    content: {
        name: "Daniel Craig",
        imageUrl: "./assets/images/profile-pic-2.jpg",
        postTimestamp: "4:15pm",
        onlineUser: false,
        text: "Is your idea of a morning workout reaching over to pick up the pizza box?",
        likeCount: 13,
        iframeLink: "//players.brightcove.net/4730681146001/41KT2xKte_default/index.html?videoId=4731318600001",
        videoIsPlaying: false,
        liked: false
    },
    comments: []
}, {
    id: 4,
    type: "suggested-challenge"
}, {
    id: 5,
    type: "forum-post",
    showComment: true,
    content: {
        name: "Jenny Smith",
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "4:15pm",
        onlineUser: true,
        text: "Is your idea of a morning workout reaching over to pick up the pizza box?",
        likeCount: 13,
        forumName: "Good Food Forum",
        threadName: "Thread Name",
        liked: false
    },
    comments: []
}, {
    id: 6,
    type: "image-activity-map",
    showComment: true,
    content: {
        name: "Peter Worthington Smith",
        imageUrl: "./assets/images/profile-pic.png",
        postTimestamp: "2:15pm",
        onlineUser: true,
        text: "Smashed it!",
        likeCount: 13,
        mapImgUrl: "./assets/images/run_map.png",
        runningLengthAverage: "3.8",
        runningPaceAverage: "00:34:34",
        totalSteps: "4,200",
        liked: false
    },
    comments: []
}];

export const timelineReducer: any = (state: any = initialState, action: any) => {

    switch (action.type) {
        case "Set Comment Visibility":
            return state.map((o: any, i: number) => {
                if (i === action.id) {
                    return Object.assign(o, { showComment: action.visible });
                } else {
                    return o;
                }
            });

        case "Set Video OnLoad"    :
            return state.map((o: any, i: number) => {
                if (i === action.id && o.type === "video") {
                    const content: any = Object.assign(o.content, { videoIsPlaying: true });
                    return Object.assign(o, { content: content });
                } else {
                    return o;
                }
            }); 

        case "Set Video Pause"    :
            return state.map((o: any, i: number) => {
                if (i === action.id && o.type === "video") {
                    const content: any = Object.assign(o.content, { videoIsPlaying: false });
                    return Object.assign(o, { content: content });
                } else {
                    return o;
                }
            });          

        default:
            return state;
    }
};
