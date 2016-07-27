/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IWallHeroProps} from "./wall-hero.int";

// Styles
const style: any = require("./wall-hero.css");

// Ownee components
import {ProfileOverview} from "./profile-overview/profile-overview";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {ProgressChart} from "../progress-chart/progress-chart";
import {HeroAction} from "./hero-action/hero-action";

/*
 * Import --------------------
 */

export class WallHero extends React.Component<IWallHeroProps, {}> {
    constructor(props: IWallHeroProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, progressChartData}: any = this.props;

        return (
            <div className={`wall-hero ${style.wallHero}`}>
            
                {/* Hero background image */}
                <BlurredBG 
                    imageUrl={data.bgUrl}/>   

                {/* Profile name */}
                <div className={style.name}>{data.name}</div>               

                {/* Progress chart */}
                <ProgressChart 
                    progressPoints={progressChartData.progressPoints} 
                    targetPoints={progressChartData.targetPoints}
                />        

                {/* Profile overview */}
                <ProfileOverview
                  imageUrl={data.imageUrl}
                  friendCount={data.friendCount}
                  groupCount={data.groupCount}
                  location={data.location}
                  signupDate={data.signupDate}
                  lastActive={data.lastActive}
                  /> 

                {/* Wall Hero Action */}
                <HeroAction />
            </div>
        );
    }
};
