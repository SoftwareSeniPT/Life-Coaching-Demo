/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IHomeHeroProps} from "./home-hero.int";

// Styles
const style: any = require("./home-hero.css");

// Ownee components
import {ProfileOverview} from "../profile-overview/profile-overview";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {IntensityLevelChart} from "./intensity-level-chart/intensity-level-chart";
import {IntensityLevelLegend} from "./intensity-level-legend/intensity-level-legend";

// Action
import {slideNextActivity, slidePrevActivity} from "./home-hero.act";

/*
 * Import --------------------
 */

export class HomeHero extends React.Component<IHomeHeroProps, {}> {
    constructor(props: IHomeHeroProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, dispatch}: any = this.props;

        return (
            <div className={`home-hero ${style.homeHero}`}>
            
                {/* Hero background image */}
                <BlurredBG imageUrl={data.blurredBackground.imageUrl}/>

                {/* Profile overview */}
                <ProfileOverview 
                    imageUrl={data.profileOverview.imageUrl} 
                    name={data.profileOverview.name} 
                    lastActive={data.profileOverview.lastActive} 
                />               

                {/* Intensity level chart */}
                <IntensityLevelChart 
                    chartData={data.intensityLevel.chartData} 
                    activities={data.intensityLevel.activities}
                    selectedActivity={data.intensityLevel.selectedActivity} 
                    slideNextActivity={() => dispatch(slideNextActivity()) }
                    slidePrevActivity={() => dispatch(slidePrevActivity()) }
                />        

                {/* Intensity level legend */}
                <IntensityLevelLegend />
            </div>
        );
    }
};
