/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITimelineCommentItem} from "./timeline-comment-item.int";

// React router
import {Link} from "react-router";

// Styles
const style: any = require("./timeline-comment-item.css");

/*
 * Import --------------------
 */

export class TimelineCommentItem extends React.Component<ITimelineCommentItem, {}> {
    constructor(props: ITimelineCommentItem) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data}: any = this.props;

        return (
            <div className={`timeline-comment-item ${style.timelineCommentItem}`}>
                <div className={style.commentHeader}>
                    <div className={style.commentImage}>
                        <img src={data.imageUrl}/>
                    </div>
                    <div className={style.commentName}>
                        <Link to="/wall">{data.name}</Link>
                    </div>
                    <div className={style.commentTimestamp}>{data.postTimestamp}</div>
                </div>
                <div className={style.commentBody}>{data.text}</div>
                <div className={style.commentFooter}>
                    <i 
                        className={`${data.liked ? "icon-heart" : "icon-heart-o"} ${style.commentFooterIcon}`} 
                        data-count={data.likeCount} 
                    />
                </div>
            </div>
            );
    }
};
