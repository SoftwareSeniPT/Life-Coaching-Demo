/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ISuggestedChallenge} from "./suggested-challenge.int";

// Styles
const style: any = require("./suggested-challenge.css");

/*
 * Import --------------------
 */

export class SuggestedChallenge extends React.Component<ISuggestedChallenge, {}> {
    constructor(props: ISuggestedChallenge) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data}: any = this.props;
        const challengeData: any = data[0];

        return (
            <div className={`suggested-challenge ${style.suggestedChallenge}`}>
                <div className={style.title}>
                    <i className={`${style.icon } icon-prize-award`}></i> 
                    <span>Suggested Challenge</span>
                </div>
                <div 
                    className={style.content} 
                    style={{ backgroundImage: `url(${challengeData.imgUrl})` }}>

                    <div className={style.challengeType}>
                        {challengeData.challengeType}
                    </div>
                    <div className={style.challengeName}>
                        {challengeData.challengeName}
                    </div>
                    <div className={style.challengeDesc}>
                        {challengeData.challengeDesc}
                    </div>
                    <div className={style.challengeButton}>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        );
    }
};
