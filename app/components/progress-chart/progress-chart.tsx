/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IProgressChartProps} from "./progress-chart.int";

// Ownee components
import {DonutChart} from "../../reusable/donut-chart/donut-chart";

// Styles
const style: any = require("./progress-chart.css");

/*
 * Import --------------------
 */

export class ProgressChart extends React.Component<IProgressChartProps, {}> {
    constructor(props: IProgressChartProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {progressPoints, targetPoints}: any = this.props;
        const remainingPoints: number = targetPoints - progressPoints;
        return (
            <div className={`progress-chart 
                ${style.progressChart}`}> 
                <div className={style.chart}>
                    <DonutChart
                      data={[progressPoints, remainingPoints]}
                      radius={40}
                      hole={38}
                      colors={["#26ff93", "#bbbbbb"]}
                      strokeWidth={ 1 }
                      /> 
                      
                      <div 
                          className={style.progressPoints}>
                          {progressPoints}
                      </div> 

                      <div 
                          className={style.progressPointsLabel}>
                          <span>Progress</span>
                          <span>Points</span>
                      </div>      

                      <div 
                          className={style.targetPoints}>
                          <span>Target</span>
                          <span>{`${targetPoints} Points`}</span>
                      </div>               
                </div>
            </div>
        );
    }
};
