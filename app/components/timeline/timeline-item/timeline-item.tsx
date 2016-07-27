/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITimelineItem} from "./timeline-item.int";

// Ownee components
import {TimelineContent} from "./timeline-content/timeline-content";
import {TimelineComments} from "./timeline-comments/timeline-comments";
import {TimelineAction} from "./timeline-action/timeline-action";

// Styles
const style: any = require("./timeline-item.css");

/*
 * Import --------------------
 */

export class TimelineItem extends React.Component<ITimelineItem, {}> {
    constructor(props: ITimelineItem) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, type, setCommentVisibility, index, playVideo}: any = this.props;
        const contentData: any = data.content;
        const commentData: any = data.comments;

        {/* Function to capitalize first letter of string */}
        const capitalizeFirstLetter: any = (string: string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        return (
            <div className={`
                    timeline-item timeline-item-type-${type} 
                    ${style.timelineItem} 
                    ${style["timelineItemType" + capitalizeFirstLetter(type)]}
                `}>

                {/* 
                 * Timeline contents
                 * handle multiple type of post
                 * including
                 * - text post
                 * - video post
                 * - forum post
                 * - activity (running) report map
                 */}
                <div className={style.timelineContent}>
                    <TimelineContent 
                        type={data.type} 
                        data={contentData} 
                        commentCount={commentData.length}
                        commentVisibility={data.showComment} 
                        index={index} 
                        playVideo={(id: string, key: number, isPlaying: boolean) => playVideo(id, key, isPlaying)}
                        setCommentVisibility={(id: number, visible: boolean) => setCommentVisibility(id, visible) }
                    />
                </div>

                {/* 
                 * Show comment only if the showComment state is true 
                 * and the comments is not empty
                 */}
                {data.showComment && data.comments.length > 0 ?
                    <div className={style.timelineComment}>
                        <TimelineComments 
                            data={commentData} 
                            likeCount={contentData.likeCount}
                            commentVisibility={data.showComment}
                            index={index}
                            setCommentVisibility={(id: number, visible: boolean) => setCommentVisibility(id, visible) }
                        />
                    </div> 
                : null}

                {/* Like, comment, and share button */}
                <div className={style.timelineAction}>
                    <TimelineAction 
                        commentVisibility={data.showComment}
                        index={index} 
                        liked={contentData.liked} 
                        setCommentVisibility={(id: number, visible: boolean) => setCommentVisibility(id, visible) }
                    />
                </div>
            </div>
        );
    }
};
