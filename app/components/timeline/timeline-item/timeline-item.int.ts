interface ITimelineItemDataComment {
    name: string;
    imageUrl: string;
    postTimestamp: string;
    online: boolean;
    text: string;
    likeCount: number;
}

export interface ITimelineItemData {
    name: string;
    imageUrl: string;
    postTimestamp: string;
    online: boolean;
    text: string;
    likeCount: number;
    comments: [ITimelineItemDataComment];
}

export interface ITimelineItem {
    index: number;
    data: ITimelineItemData;
    key: number;
    type: string;
    setCommentVisibility: any;
    playVideo: any;
}
