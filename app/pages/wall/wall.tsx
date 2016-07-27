/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IWallProps, IWallStates} from "./wall.int";

// Ownee components
import Header from "../../components/header/header";
import {Timeline} from "../../components/timeline/timeline";
import {Overview} from "../../components/overview/overview";
import {WallHero} from "../../components/wall-hero/wall-hero";
import {MainMenu} from "../../components/main-menu/main-menu";

// Actions
import {commentVisibility, setVideoOnLoad, setVideoPause} from "../../components/timeline/timeline.act";

// Styles
const style: any = require("./wall.css");

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class Wall extends React.Component<IWallProps, IWallStates> {
    constructor(props: IWallProps) {
        super(props);
        this.state = {
          isOnTop: false
        };
    }

    render(): React.ReactElement<{}> {
        const {
            dispatch,
            timelineItems, 
            overviewItems,
            suggestedChallengeData,
            wallHeroData,
            progressChartData
        }: any = this.props;

        return (
            <div className={`wall page-with-header ${style.wall}`}>

                {/* Include header */}
                <Header />

                {/* Wall hero */}
                <WallHero 
                    data={wallHeroData} 
                    progressChartData={progressChartData}
                />

                {/* Timeline component */}
                <Timeline 
                    data={timelineItems} 
                    suggestedChallengeData={suggestedChallengeData}
                    setCommentVisibility={(id: number, visible: boolean) => dispatch(commentVisibility(id, visible))}
                    setVideoOnLoad={(id: number) => dispatch(setVideoOnLoad(id)) }
                    setVideoPause={(id: number) => dispatch(setVideoPause(id)) }
                />

                {/* Home Overview component */}
                <Overview data={overviewItems} />

                <MainMenu />
            </div>
        );
    }

    componentDidMount(): any {
      scroll(0, 0);
    }
};

export default connect(function(state: any): any {
    return { 
        wallHeroData: state.wallHeroReducer,
        timelineItems: state.timelineReducer,
        overviewItems: state.overviewReducer,
        suggestedChallengeData: state.suggestedChallengeReducer,
        progressChartData: state.progressChartReducer
     };
})(Wall);
