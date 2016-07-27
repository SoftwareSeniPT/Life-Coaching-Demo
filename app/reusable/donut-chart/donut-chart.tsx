/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IDonutChart} from "./donut-chart.int";
import {Slice} from "./slice/slice";

// Styles
const style: any = require("./donut-chart.css");

/*
 * Import --------------------
 */

export class DonutChart extends React.Component<IDonutChart, {}> {
    constructor(props: IDonutChart) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        let colors: [string] = this.props.colors,
            colorsLength: number = colors.length,
            labels: boolean = this.props.labels,
            hole: number = this.props.hole,
            radius: number = this.props.radius,
            diameter: number = radius * 2,
            self: any = this,
            sum: any, startAngle: any = null;

        sum = this.props.data.reduce((carry: any, current: any): any => { return carry + current; }, 0);
        startAngle = 0;

        return (
            <svg 
                className={style.donutChart} 
                width={ diameter } 
                height={ diameter } 
                viewBox={ "0 0 " + diameter + " " + diameter } 
                version="1.1"
            >
                {this.props.data.map((slice: any, sliceIndex: number): any => {
                    var angle: number, 
                        nextAngle: number, 
                        percent: any;

                    nextAngle = startAngle;
                    angle = (slice / sum) * 360;
                    percent = (slice / sum) * 100;
                    startAngle += angle;

                    return <Slice
                        key={ sliceIndex }
                        value={ slice }
                        percent={ self.props.percent }
                        percentValue={ percent.toFixed(1) }
                        startAngle={ nextAngle }
                        angle={ angle }
                        radius={ radius }
                        hole={ radius - hole }
                        trueHole={ hole }
                        showLabel= { labels }
                        fill={ colors[sliceIndex % colorsLength]}
                        stroke={ self.props.stroke }
                        strokeWidth={ self.props.strokeWidth }
                        />;
                })}
            </svg>
        );
    }
};
