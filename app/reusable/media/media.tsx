/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IMediaProps, IMediaState} from "./media.int";

// Styles
const style: any = require("./media.css");

/*
 * Import --------------------
 */

export class Media extends React.Component<IMediaProps, IMediaState> {
    constructor(props: IMediaProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            // I type = "image", 
            thumbnailUrl = undefined, 
            // I videoUrl = undefined, 
            showPlaybutton = false
        }: any = this.props;

        return (
            <div className={`media ${style.media}`}>
                <div className={style.bgImage} style={{backgroundImage: `url(${thumbnailUrl})`}} />

                {showPlaybutton ? 
                    <div className={style.playButton}>
                        <i className="icon-play" />
                    </div>
                : null}
            </div>
        );
    }
};
