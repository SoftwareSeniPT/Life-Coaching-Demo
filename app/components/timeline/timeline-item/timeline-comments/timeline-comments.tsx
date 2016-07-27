/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITimelineComments} from "./timeline-comments.int";

// Ownee Component
import {TimelineCommentItem} from "./timeline-comment-item/timeline-comment-item";

// Styles
const style: any = require("./timeline-comments.css");

/*
 * Import --------------------
 */

export class TimelineComments extends React.Component<ITimelineComments, {}> {
    constructor(props: ITimelineComments) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, likeCount, index, setCommentVisibility, commentVisibility}: any = this.props;

        return (
            <div className={`timeline-comments ${style.timelineComments}`}>

                {/* Post like count */}
                <div className={style.likeCount}>
                    {likeCount} people like this
                </div>

                {/* Show only if the timeline is not empty */}
                {data.length ? data.map((commentData: any) => {
                  return(
                      <TimelineCommentItem 
                          data={commentData} 
                          key={commentData.id}
                      />
                  );
                }) : null}

                {/* Link to hide and show more comment */}    
                <div className={style.commentMenu}>
                    <span onClick={() => setCommentVisibility(index, commentVisibility)}> Hide comments</span> 
                    <span className={style.commentMenuActive}>
                        Show more comments
                    </span>
                </div>
            </div>
            );
    }
};
