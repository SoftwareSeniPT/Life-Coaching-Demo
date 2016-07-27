/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITrainingWeekProps, ITrainingWeekState} from "./training-week.int";

// Styles
const style: any = require("./training-week.css");

// Ownee components
import Header from "../../components/header/header";
import {List} from "../../components/list/list";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {ProgressChart} from "../../components/progress-chart/progress-chart";
import {Media} from "../../reusable/media/media";

// Action
import {trainingListVisibility, trainingListView, openTrainingListItem} from "./training-week.act";

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class TrainingWeek extends React.Component<ITrainingWeekProps, ITrainingWeekState> {
    constructor(props: ITrainingWeekProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            dispatch,
            trainingWeekData,
            progressChartData
        }: any = this.props;

        return (
            <div className={`training-week ${style.trainingWeek}`}>
                {/* Include header */}
                <Header />

                {/* Training week hero */}
                <div className={style.trainingWeekHero}>
                    <div className={style.filter}>
                        <span className="gf">AH</span>
                    </div>

                    <div 
                        className={style.title}>Training Week</div>
                    <div 
                        className={style.subtitle}>Week 2 Fundamentals</div>

                    {/* Progress Chart */}
                    <ProgressChart
                        progressPoints={progressChartData.progressPoints}
                        targetPoints={progressChartData.targetPoints}
                    />    

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />  
                </div>

                {/* Meal Plan Header */}
                <TrainingHeader 
                    thumbnailUrl="./assets/images/workout-3.jpg" 
                    title="Message from Luke" />

                {/* Shopping list */}
                <List 
                    data={trainingWeekData.trainingList}
                    listVisibility={(id: number, visible: boolean) => {
                        dispatch(trainingListVisibility(id, visible));
                    }}
                    openShoppingListItem={(categoryID: number, itemID: number) => {
                        dispatch(openTrainingListItem(categoryID, itemID));
                    } }
                    listView={(id: number, view: string) => dispatch(trainingListView(id, view)) }
                />
            </div>
        );
    }

    componentDidMount(): any {
        scroll(0, 0);
    }
};

// Ownee components
export class TrainingHeader extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {
            thumbnailUrl,
            title,
            desc
        }: any = this.props;

        return (
            <div className={style.trainingWeekHeader}>
                <div className={style.itemMedia}>
                    <Media
                        type="video"
                        thumbnailUrl={thumbnailUrl}
                        showPlaybutton={true}
                    />
                </div>
                <div className={style.itemDetails}>
                    <div className={style.itemDetailsTitle}>
                        {title}
                    </div>
                    <div className={style.itemDetailsDesc}>
                        {desc}
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(function(state: any): any {
    return {
        trainingWeekData: state.trainingWeekReducer,
        progressChartData: state.progressChartReducer
    };
})(TrainingWeek);
