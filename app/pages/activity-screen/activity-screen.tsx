/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IActivityScreenProps, IActivityScreenState} from "./activity-screen.int";

// Styles
const style: any = require("./activity-screen.css");

// Redux
import { connect } from "react-redux";

// Ownee component
import Header from "../../components/header/header";
import {MainMenu} from "../../components/main-menu/main-menu";
import {ProfileOverview} from "../../components/profile-overview/profile-overview";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {ActivityDetails} from "../../components/activity-details/activity-details";

/*
 * Import --------------------
 */

class ActivityScreen extends React.Component<IActivityScreenProps, IActivityScreenState> {
    constructor(props: IActivityScreenProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {profileData}: any = this.props;

        return (
            <div className={`activity-screen ${style.activityScreen}`}>
                {/* Include header */}
                <Header />

                {/* Profile Overview */}
                <ProfileOverview
                    imageUrl={profileData.profileOverview.imageUrl}
                    name={profileData.profileOverview.name}
                    lastActive={profileData.profileOverview.lastActive}
                /> 

                {/* Activity Details */}
                <ActivityDetails />

                {/* Main Menu */}
                <MainMenu />   

                {/* Blurred background */}
                <BlurredBG imageUrl={profileData.blurredBackground.imageUrl} />               
            </div>
        );
    }

    componentDidMount(): any {
        scroll(0, 0);
    }
};

export default connect(function(state: any): any {
    return {
        profileData: state.homeHeroReducer
    };
})(ActivityScreen);
