/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITimeline} from "./timeline.int";

// Ownee component
import {TimelineItem} from "./timeline-item/timeline-item";
import {SuggestedChallenge} from "../..//components/suggested-challenge/suggested-challenge";

// Styles
const style: any = require("./timeline.css");

/*
 * Import --------------------
 */

export class Timeline extends React.Component<ITimeline, {}> {

    constructor(props: ITimeline) {
        super(props);
    }

    playVideo(id: string, key: number, isPlaying: boolean = false): any {
      const iframeTag: any = document.getElementById(id);
      const win: any = iframeTag.contentWindow;
      const {setVideoOnLoad, setVideoPause}: any = this.props;

      if (isPlaying) {
        win.postMessage("pauseVideo", "http://players.brightcove.net");
        setVideoPause(key);
      } else {
        win.postMessage("playVideo", "http://players.brightcove.net");
        setVideoOnLoad(key);
      }

      win.postMessage("getThumbnail", "http://players.brightcove.net");

    }

    render(): React.ReactElement<{}> {
        const {data, suggestedChallengeData, setCommentVisibility}: any = this.props;

        return (
            <div className={`timeline ${style.timeline}`}>
                {/* Show only if the timeline is not empty */}
                {data.length ? data.map((timelineItem: any, key: number) => {
                    if (timelineItem.type === "suggested-challenge") {
                        return (
                            <SuggestedChallenge 
                                data={suggestedChallengeData} 
                                key={key}
                            />
                        );
                    }
                    return (
                        <TimelineItem 
                            type={timelineItem.type} 
                            data={timelineItem} 
                            key={key}
                            index={key} 
                            setCommentVisibility={(id: number, visible: boolean) => setCommentVisibility(id, visible) }
                            playVideo={(id: string, key: number, isPlaying: boolean) => this.playVideo(id, key, isPlaying)}
                        />
                    );
                }) : null}
            </div>
        );
    }
};
