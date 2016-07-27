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
        const {imageUrl, name, lastActive}: any = this.props; 

        return (
            <div className={`profile-overview ${style.profileOverview}`}>

                {/* Profile Image */}
                <div className={style.profileImage}>
                    <img src={imageUrl}/>
                </div>

                {/* Profile Name */}
                <div className={style.profileName}>
                    {name}
                </div>

                {/* Last active state */}
                <div className={style.profileActivity}>
                    Active {lastActive}
                </div>
            </div>
        );
    }
};
