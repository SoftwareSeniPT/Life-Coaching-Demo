/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IIntensityLevelChartProps} from "./intensity-level-chart.int";

// Ownee components
import {DonutChart} from "../../../reusable/donut-chart/donut-chart";
import {FontIcon} from "../../../reusable/font-icons/font-icons";

// Styles
const style: any = require("./intensity-level-chart.css");

// Domtastic
const $: any = require("domtastic");

// Hammerjs for touch even
const hammer: any = require("hammerjs");

/*
 * Import --------------------
 */

export class IntensityLevelChart extends React.Component<IIntensityLevelChartProps, {}> {
    refs: {
        [key: string]: (Element);
        activityDetails: (HTMLInputElement);
    };

    constructor(props: IIntensityLevelChartProps) {
        super(props);
    }

    componentDidMount(): any {
        const {slideNextActivity, slidePrevActivity}: any = this.props;
        hammer(this.refs.activityDetails).on("swipeleft", (ev: any): any => {
            slideNextActivity();
        });

        hammer(this.refs.activityDetails).on("swiperight", (ev: any): any => {
            slidePrevActivity();
        });
    }

    render(): React.ReactElement<{}> {
        const {chartData, width = undefined, activities, selectedActivity}: any = this.props;

        let radius: number;
        if (width === undefined || width === "") {
            if (screen.width <= 500) {
                radius = ((screen.width * 0.9) - 80) / 2;
            } else {
                radius = ((500 * 0.9) - 80) / 2;
            }
        } else {
            radius = width / 2;
        }
       
        return (
            <div className={`intensity-level-chart 
                ${style.intensityLevelChart}`}> 
                <DonutChart
                  data={ chartData.data}
                  radius={ radius }
                  hole={ radius - 8 }
                  colors={chartData.colors}
                  strokeWidth={ 1 }
                />

                <div className={style.timeIndicator}>
                    <span className={style.noon}>Noon</span>
                    <span className={style.time6pm}>6pm</span>
                    <span className={style.midnight}>Midnight</span>
                    <span className={style.time6am}>6am</span>
                </div>

                <div className= {style.activityDetails} ref="activityDetails">
                    <div className={style.detailsItemsWrapper}>
                        <div 
                            className={style.detailsItems} 
                            style={{ transform: `translateX(${selectedActivity * - 100}%)` }}>
                            {activities.map((act: any, key: number): any => {
                                return <ChartSlide
                                    total={act.total}
                                    label={act.type}
                                    goal={act.goal}
                                    key={key}
                                    />;
                            })}
                        </div>
                    </div>

                    <div className={style.dots}>
                        {activities.map((act: any, key: number): any => {
                            return <span 
                                key={key}
                                className={`icon-circle ${selectedActivity === key ? "active" : ""}`} />;
                        })}
                    </div>
                </div>

                <div className={style.activityIcons}>
                    <FontIcon icon="pitch" customClass="icon-1" /> 
                    <FontIcon icon="fork" customClass="icon-2" /> 
                    <FontIcon icon="star" customClass="icon-3" /> 
                    <FontIcon icon="fork" customClass="icon-4" /> 
                    <FontIcon icon="fork" customClass="icon-5" /> 
                    <FontIcon icon="moon-fill" customClass="icon-6" /> 
                </div>
            </div>
        );
    }
};

class ChartSlide extends React.Component<any, {}> {

    swapToFirst(arr: any): any {
        const lastKey: string = arr.slice(-1)[0];
        const arrLastID: number = arr.length - 1;
        const removedArr: any = [...arr.slice(0, arrLastID), ...arr.slice(arrLastID + 1)];
        return [lastKey, ...removedArr];
    }

    swapToLast(arr: any): any {
        const [a, ...b]: any = arr;
        return [...b, a];
    }

    fitText(): any {
        while ($("#totalWrapper")[0].offsetWidth > $("#totalContainer")[0].offsetWidth) {
            const currentFontSize: number = parseInt(window.getComputedStyle($("#totalWrapper")[0]).getPropertyValue("font-size"), 10);
            $("#totalWrapper").css("font-size", currentFontSize - 1);
        }
    }

    componentDidMount(): any {
        this.fitText();
    }

    render(): React.ReactElement<{}> {
        const {total, label, goal}: any = this.props;
        return (
            <div className= {
                style.detailsItem}>
                    <div className={style.total} id="totalContainer">
                        <span id="totalWrapper">{total}</span>
                        </div>
                    <span className={style.label}>
                        {label}
                        </span>
                    <span className={style.goal}>
                        Goal: {goal}
                        </span>
                </div>
        );
    }
};
