/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IProfileOverviewProps} from "./profile-overview.int";

// Styles
const style: any = require("./profile-overview.css");

/*
 * Import --------------------
 */

export class ProfileOverview extends React.Component<IProfileOverviewProps, {}> {
    constructor(props: IProfileOverviewProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            imageUrl, 
            friendCount, 
            groupCount, 
            location, 
            signupDate, 
            lastActive
         }: any = this.props; 

        return (
            <div className={`wall-profile-overview ${style.profileOverview}`}>
                <div 
                    className={style.profileImage} 
                    style={{backgroundImage: `url(${imageUrl})`}} />
                <div className={style.profileDetails}>
                    <ul className={style.profileDetailsList}>
                        <li>
                            <span className={style.heading}>
                                Friends
                            </span>
                            <span>
                                {friendCount}
                            </span>
                        </li>
                        <li>
                            <span className={style.heading}>
                                Groups
                            </span>
                            <span>
                                {groupCount}
                            </span>
                        </li>
                        <li>
                            <span className={style.heading}>
                                Location
                            </span>
                            <span>
                                {location}
                            </span>
                        </li>
                        <li>
                            <span className={style.heading}>
                                Member since
                            </span>
                            <span>
                                {signupDate}
                            </span>
                        </li>
                        <li>
                            <span className={style.heading}>
                                Last Active
                            </span>
                            <span>
                                {lastActive}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};
