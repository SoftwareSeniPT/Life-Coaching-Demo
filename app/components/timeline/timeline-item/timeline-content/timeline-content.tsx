/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITimelineContent} from "./timeline-content.int";

// React router
import {Link} from "react-router";

// Ownee components
import {ElipsisMenu} from "../../../../reusable/elipsis-menu/elipsis-menu";

// Styles
const style: any = require("./timeline-content.css");

/*
 * Import --------------------
 */

class PlayButton extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactElement<{}> {
    const {}: any = this.props;

    return (
      <svg id="Layer_1" data-name="Layer 1"  viewBox="0 0 28.97 28.97">
          <circle cx="14.48" cy="14.48" r="13.98" 
              style={{ fill: "none", stroke: "#fff", strokeMiterlimit: "10" }}/>
          <path 
          d="M12.36,9.45s0.65-3,2.54-.86,4.92,5.08,4.92,5.08a1.35,1.35,0,0,1,0,2.27c-1.4,1.3-5.62,5.3-5.62,5.3s-1.84,1.51-1.84-1V9.45Z" 
          transform="translate(-0.42 -0.37)" 
          style={{fill: "#fff"}}/>
      </svg>
    );
  }
};

export class TimelineContent extends React.Component<ITimelineContent, {}> {
    constructor(props: ITimelineContent) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
              index, 
              data, 
              type, 
              commentCount, 
              setCommentVisibility, 
              commentVisibility
        }: any = this.props;

        const onlineUser: boolean = data.onlineUser;

        let userOnlineStatus: string = "userOffline";
        if (onlineUser) {
          userOnlineStatus = "userOnline";
        }

        return (
            <div className={`timeline-content ${style.timelineContent}`}>

                {/* Timeline header */} 
                <div className={style.timelineHeader}>

                    {/* Profile image */}
                    <div className={`${style.timelineImage} ${style[userOnlineStatus]}`}>
                        <img src={data.imageUrl}/>
                    </div>

                    {/* Profile name */}
                    <div className={style.timelineName}>
                        <Link to="/wall">{data.name}</Link>
                    </div>

                    {/* Post timestamp */}
                    <div className={style.timelineTimestamp}>
                        {(() => {
                            switch (type) {

                              /* ------ Timestamp for forum post */ 
                              case "forum-post":
                                return (
                                    <div className={style.forumTimestamp}>
                                        <i className={`icon-comments ${style.forumTimestampIcon}`}/> 
                                        <span>Posted on the</span> 
                                        <span className={style.forumTimestampLink}>
                                            {data.forumName}
                                        </span> 
                                        <span>under</span> 
                                        <span className={style.forumTimestampLink}>
                                            {data.threadName}
                                        </span>
                                    </div>
                                 );
  
                              default:
                                return <div>Posted at {data.postTimestamp}</div>;
                            }
                        })()}
                    </div>

                    {/* Ellipsis menu */}
                    <div className={style.ellipsisMenu}>
                        <ElipsisMenu type={data.isAdmin ? "postAdmin" : "postNonAdmin"} />
                    </div>
                </div>

                {/* Timeline body */}
                <div className={style.timelineBody}>
                    {data.text}

                    {(() => {
                        switch (type) {

                          /* ------ Timeline body for video post */ 
                          case "video":
                            return (
                                <div className={style.iframeVideo}>
                                    <iframe id={`player-${index}`} src={data.iframeLink} />
                                </div>
                            );

                          /* ------ Timeline body for forum post */  
                          case "forum-post":
                            return <span className={style.readMore}>... Read More</span>;  

                          /* ------ Timeline body for activity map */  
                          case "image-activity-map":
                            return (
                              <div className={style.activityMap}>
                                 <div 
                                     style={{ backgroundImage: `url(${data.mapImgUrl})` }} 
                                     className={style.activityMapImage} 
                                 />
                                 <div 
                                     className={style.activityInformation}>

                                    {/* Running length average information */}
                                    <div 
                                        className={style.runningLengthAverage}>
                                        <span 
                                            className={style.activityInformationValue}>
                                            {data.runningLengthAverage}
                                        </span>
                                        <span>KMS</span>
                                    </div>

                                    {/* Running pace average information */}
                                    <div 
                                        className={style.runningPaceAverage}>
                                        <span 
                                            className={style.activityInformationValue}>
                                            {data.runningPaceAverage}
                                        </span>
                                        <span>Average Pace</span>
                                    </div>

                                    {/* Total steps information */}
                                    <div 
                                        className={style.totalSteps}>
                                        <span 
                                            className={style.activityInformationValue}>
                                            {data.totalSteps}
                                        </span>
                                        <span>Steps</span>
                                    </div>
                                 </div>
                              </div>
                            );  
                             
                          default:
                            return null;
                        }
                    })()}
                </div>

                {/* Timeline footer */}
                {type === "text" ? 
                    <div className={style.timelineFooter}>

                        {/* Like button */}
                        <i className={`icon-heart-o ${style.timelineFooterIcon}`}
                          data-count={data.likeCount} />

                        {/* Comment button */}
                        <i className={`icon-comment-o ${style.timelineFooterIcon}`}
                            data-count={commentCount} 
                            onClick={() => setCommentVisibility(index, commentVisibility) }
                        />
                    </div>
                : null}
            </div>
        );
    }
};
