/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITrainingLogProps, ITrainingLogState} from "./training-log.int";

// Ownee components
import Header from "../../components/header/header";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {Calendar} from "../../reusable/calendar/calendar";
import {Media} from "../../reusable/media/media";
import {ProgressChart} from "../../components/progress-chart/progress-chart";

// React router
import {Link} from "react-router";

import {selectTraining, changeMonthShown} from "./training-log.act";

// Styles
const style: any = require("./training-log.css");

// MomentJS
import * as moment from "moment"; 

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class TrainingLog extends React.Component<ITrainingLogProps, ITrainingLogState> {
    constructor(props: ITrainingLogProps) {
        super(props);
    }

    trainingDate(date: any): any {
        const dateArr: any = [];
        date.map((o: any, key: number) => {
            dateArr.push(new Date(o.date).getTime());
        });
        return dateArr;
    }

    ISODateString(d: any): any {
        function pad(n: number): any { return n < 10 ? "0" + n : n; }
        return d.getUTCFullYear() + "-"
            + pad(d.getUTCMonth() + 1) + "-"
            + pad(d.getUTCDate()) + "T"
            + pad(d.getUTCHours()) + ":"
            + pad(d.getUTCMinutes()) + ":"
            + pad(d.getUTCSeconds()) + "Z";
    }

    formattedDate(date: any = Date.now()): any {
      let d: any = new Date(date),
        month: string = "" + (d.getMonth() + 1),
        day: string = "" + d.getDate(),
        year: string = d.getFullYear();

      if (month.length < 2) { month = "0" + month; }
      if (day.length < 2) { day = "0" + day; }

      return [year, month, day].join("/");
    }

    componentDidMount(): any {
        const {dispatch}: any = this.props;
        dispatch(changeMonthShown(this.formattedDate()));
        scroll(0, 0);
    }

    render(): React.ReactElement<{}> {
        const {trainingLogData, dispatch}: any = this.props;
        return (
            <div className={`training-log ${style.trainingLog}`}>
                <Header />

                {/* Training log hero */}
                <div className={style.trainingLogHero}>
                    <div
                      className={style.title}>Training Log</div>
                    <div
                      className={style.subtitle}>
                        {trainingLogData.monthShown !== undefined ?
                            moment(Date.parse(trainingLogData.monthShown)).format("MMMM YYYY")
                            : null}
                      </div>

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />
                </div>

                {/* Calendar */}
                <div className={style.calendar}>
                    <Calendar
                        month = {this.formattedDate()}
                        showHeader = {false}
                        availableDate={this.trainingDate(trainingLogData.training) } 
                        dayCallback={(id: number) => { dispatch(selectTraining(id)); } }
                        changeMonthShown={(month: string) => dispatch(changeMonthShown(month))}
                    /> 
                </div> 

                {trainingLogData.selectedTraining !== undefined ?
                    <div className={style.date}>
                        {moment(new Date(trainingLogData.training[trainingLogData.selectedTraining].date)).format("DD MMMM YYYY")}
                    </div>
                : null}
                    
                {/* Training item */}
                {trainingLogData.selectedTraining !== undefined ?
                    <div className={style.listItemContent}>
                        <div className={style.listItemMedia}>
                            <Media
                                type="video"
                                thumbnailUrl={trainingLogData.training[trainingLogData.selectedTraining].mediaUrl} 
                                showPlaybutton={true} />

                            <div className={`list-label ${style.listLabel}`}>
                                Completed
                            </div>
                        </div>

                        <div className={style.itemDetails}>
                            <div className={style.itemDetailsTitle}>
                                <Link to="/meal-details">
                                    {trainingLogData.training[trainingLogData.selectedTraining].name}
                                </Link>
                            </div>
                            <div className={style.desc}>
                                 At home functional training
                            </div>
                        </div>
                    </div>
                : null}

                {/* item Meta Action */}
                {trainingLogData.selectedTraining !== undefined ?
                    <div className={style.itemMetaAction}>
                        <div className={style.tags}>
                            <span>Cardio </span>
                            <span>At Home </span>
                            <span>Strength </span>
                            <span>Functional </span>
                        </div>

                        <div className={style.menu}>
                            View training plan
                        </div>
                    </div>
                : null}

                {/* progress chart */}
                <div className={style.progressChart}>
                    {/* Progress chart */}
                    <ProgressChart
                        progressPoints={50}
                        targetPoints={120}
                    />  

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />
                </div>
            </div>
        );
    }
};

export default connect(function(state: any): any {
  return {
    trainingLogData: state.trainingLogReducer
  };
})(TrainingLog);
