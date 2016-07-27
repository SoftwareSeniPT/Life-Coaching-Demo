/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IActivityDetailsProps, IActivityDetailsState} from "./activity-details.int";

// Styles
const style: any = require("./activity-details.css");

/*
 * Import --------------------
 */

export class ActivityDetails extends React.Component<IActivityDetailsProps, IActivityDetailsState> {
    constructor(props: IActivityDetailsProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {}: any = this.props;

        return (
            <div className={`activity-details ${style.activityDetails}`}>

                <ActivityDetailsItem 
                    customClass="heartRate" 
                    icon="heartbeat" 
                    value="71 BPM" 
                    label="Average Heart Rate"
                />

                <ActivityDetailsItem
                    customClass="steps"
                    icon="pitch"
                    value="5,500"
                    label="Daily Average Steps"
                />

                <ActivityDetailsItem
                    customClass="mood"
                    icon="smile-o"
                    value="Good"
                    label="Daily Average Mood"
                />

                <ActivityDetailsItem
                    customClass="energy"
                    icon="bolt"
                    value="6/10"
                    label="Daily Average Energy"
                />
                
                <ActivityDetailsItem
                    customClass="water"
                    icon="tint"
                    value="2.4L"
                    label="Daily Average Water"
                />                

                <ActivityDetailsItem
                    customClass="sleep"
                    icon="moon-fill"
                    value="6HRS"
                    label="Daily Average Sleep"
                />
            </div>
        );
    }
};

/* Ownee components */

class ActivityDetailsItem extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {customClass, icon, value, label}: any = this.props;

        return (
            <div className={`${style.activityItem} ${style[customClass]}`}>
                <i className={`icon-${icon}`} />
                <div className={style.value}>
                    {value}
                </div>
                <div className={style.label}>
                    {label}
                </div>
            </div>
        );
    }
};
