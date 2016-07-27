/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITimelineAction} from "./timeline-action.int";

// Styles
const style: any = require("./timeline-action.css");

/*
 * Import --------------------
 */

export class TimelineAction extends React.Component<ITimelineAction, {}> {
    constructor(props: ITimelineAction) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {setCommentVisibility, index, commentVisibility, liked}: any = this.props;
        return (
            <div className={`timeline-action ${style.timelineAction}`}>

                {/* Like button */}
                <div className={style.timelineActionLike}>
                    <i className={`${liked ? "icon-heart" : "icon-heart-o"} ${style.timelineActionIcon}`}/> 
                    <span>Like</span>
                </div>

                {/* Comment button */}
                <div 
                    className={style.timelineActionComment}
                    onClick={() => setCommentVisibility(index, commentVisibility)}>
                    <i className={`icon-comment-o ${style.timelineActionIcon}`} /> 
                    <span>Comment</span>
                </div>

                {/* Share button */}
                <div className={style.timelineActionShare}>
                    <i className={`icon-share-outline ${style.timelineActionIcon}`} /> 
                    <span>Share</span>
                </div>
            </div>
            );
    }
};
