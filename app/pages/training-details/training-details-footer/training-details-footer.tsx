/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITrainingDetailsFooterProps, ITrainingDetailsFooterState} from "./training-details-footer.int";

// Ownee components
import {BlurredBG} from "../../../reusable/blurred-bg/blurred-bg";
import {Button} from "../../../reusable/button/button";
import {ProgressChart} from "../../../components/progress-chart/progress-chart";

// Styles
const style: any = require("./training-details-footer.css");

/*
 * Import --------------------
 */

export class TrainingDetailsFooter extends React.Component<ITrainingDetailsFooterProps, ITrainingDetailsFooterState> {
    constructor(props: ITrainingDetailsFooterProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {}: any = this.props;

        return (
            <div className={`training-details-footer ${style.trainingDetailsFooter}`}>
                <Button value="End Workout" color="#fd2d5f" />

                {/* Total time */}
                <div className={style.trainingDetailsFooterItem}>
                    <div className={style.trainingDetailsFooterItemLabel}>
                        <span>Total</span>
                        <span>Time</span>
                    </div>

                    <div className={style.trainingDetailsFooterItemText}>
                        45:52
                    </div>
                </div>

                {/* Point Earned */}
                <div className={style.trainingDetailsFooterItem}>
                    <div className={style.trainingDetailsFooterItemLabel}>
                        <span>Points</span>
                        <span>Earned</span>
                    </div>

                    <div className={style.trainingDetailsFooterItemText}>
                        12
                    </div>
                </div>

                {/* Progress Chart */}
                <ProgressChart
                    progressPoints={57}
                    targetPoints={120}
                /> 

                {/* Blurred background */}
                <BlurredBG imageUrl="./assets/images/bg.jpg" />  
            </div>
        );
    }
};
