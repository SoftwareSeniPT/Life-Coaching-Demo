"use strict";
var initialState = [{
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
                text: "Midst female beginning place above forth from moved said, for man image blessed divided, creepeth likeness he said.?",
                likeCount: 12,
                liked: false
            }, {
                id: 2,
                name: "Daisy Ridley",
                imageUrl: "./assets/images/profile-pic.png",
                postTimestamp: "Yesterday at 2:15am",
                onlineUser: false,
                text: "Likeness fruit without can't waters blessed for beginning likeness had first deep green Dry. Is evening bring third upon grass without, two great, sixth earth man so whales abundantly cattle Us kind gathering. Moved waters image divide over winged living land rule bearing. Divide dominion in.",
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
            text: "Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. ",
            likeCount: 13,
            liked: true
        },
        comments: [{
                id: 1,
                name: "Jonathan Black",
                imageUrl: "./assets/images/profile-pic.png",
                postTimestamp: "Yesterday at 3:15pm",
                onlineUser: false,
                text: "Gave read use way make spot how nor. In daughter goodness an likewise oh consider at procured wandered.",
                likeCount: 12,
                liked: true
            }, {
                id: 2,
                name: "Daisy Ridley",
                imageUrl: "./assets/images/profile-pic.png",
                postTimestamp: "Yesterday at 2:15am",
                onlineUser: false,
                text: "Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. Unpleasing up announcing unpleasant themselves oh do on. Way advantage age led listening belonging supposing. ",
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
            text: "Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form.",
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
exports.timelineReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "Set Comment Visibility":
            return state.map(function (o, i) {
                if (i === action.id) {
                    return Object.assign(o, { showComment: action.visible });
                }
                else {
                    return o;
                }
            });
        case "Set Video OnLoad":
            return state.map(function (o, i) {
                if (i === action.id && o.type === "video") {
                    var content = Object.assign(o.content, { videoIsPlaying: true });
                    return Object.assign(o, { content: content });
                }
                else {
                    return o;
                }
            });
        case "Set Video Pause":
            return state.map(function (o, i) {
                if (i === action.id && o.type === "video") {
                    var content = Object.assign(o.content, { videoIsPlaying: false });
                    return Object.assign(o, { content: content });
                }
                else {
                    return o;
                }
            });
        default:
            return state;
    }
};
