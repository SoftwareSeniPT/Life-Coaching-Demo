/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IHome} from "./home.int";

// Ownee components
import Header from "../../components/header/header";
import {HomeHero} from "../../components/home-hero/home-hero";
import {FeaturedLists} from "../../components/featured-lists/featured-lists";
import {Timeline} from "../../components/timeline/timeline";
import {ProTip} from "../../components/pro-tip/pro-tip";
import {Overview} from "../../components/overview/overview";
import {MainMenu} from "../../components/main-menu/main-menu";

// Actions
import {commentVisibility, setVideoOnLoad, setVideoPause} from "../../components/timeline/timeline.act";

// Styles
const style: any = require("./home.css");

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class Home extends React.Component<IHome, {}> {
    constructor(props: IHome) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            dispatch,
            featuredListItems, 
            timelineItems, 
            heroData, 
            overviewItems,
            suggestedChallengeData
        }: any = this.props;

        return (
            <div className={`home page-with-header ${style.home}`}>
                {/* Include header */}
                <Header />

                {/* Hero component */}
                <HomeHero data={heroData} dispatch={dispatch} />

                {/* Featured list component */}
                <FeaturedLists data={featuredListItems} />

                {/* Timeline component */}
                <Timeline 
                    data={timelineItems} 
                    suggestedChallengeData={suggestedChallengeData}
                    setVideoOnLoad={(id: number) => dispatch(setVideoOnLoad(id)) }
                    setVideoPause={(id: number) => dispatch(setVideoPause(id)) }
                    setCommentVisibility={(id: number, visible: boolean) => dispatch(commentVisibility(id, visible)
                        ) }
                />

                {/* Protip component */}
                <ProTip />

                {/* Home Overview component */}
                <Overview data={overviewItems} />

                {/* Main Menu */}
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
        featuredListItems: state.featuredListReducer,
        timelineItems: state.timelineReducer,
        heroData: state.homeHeroReducer,
        overviewItems: state.overviewReducer,
        suggestedChallengeData: state.suggestedChallengeReducer
     };
})(Home);
