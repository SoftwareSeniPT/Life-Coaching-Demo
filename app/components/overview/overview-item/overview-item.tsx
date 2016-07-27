/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IOverviewItem} from "./overview-item.int";

// Styles
const style: any = require("./overview-item.css");

/*
 * Import --------------------
 */

export class OverviewItem extends React.Component<IOverviewItem, {}> {
    constructor(props: IOverviewItem) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, type}: any = this.props;

        return (
            <div className={`overview-item ${style[data.type]} ${style.overviewItem}`}>
                {(() => {
                  switch (type) {

                    case "sleepStats":
                      return (
                        <div>
                            <div className={style.left}>
                                <div className={style.title}>
                                    <span>Your Sleep</span> 
                                    <i className={`${style.icon} icon-moon-fill`} />
                                </div>
                                <div className={`${style.sleepTimeAverage} ${style.circle}`}>
                                    {data.sleepTimeAverage}
                                </div>
                            </div>
                            <div className={style.right}>
                                <div className={style.details}>
                                    {data.text}
                                </div>
                                <div className={style.detailsLlink}>
                                    See Tips
                                </div>
                            </div> 
                        </div>
                      );

                    case "currentWeather":
                      return (
                        <div>
                            <div className={style.left}>
                                <div className={style.title}>
                                    <span>Current Weather</span> 
                                    <i className={`${style.icon} icon-sun-stroke`} />
                                </div>
                                <div className={`${style.currentWeatherIcon} ${style.circle}`}>
                                    <i className={`${style.icon} icon-ios-partlysunny-outline`} />
                                </div>
                            </div>
                            <div className={style.right}>
                                <div className={style.location}>
                                    <i className="icon-location" />  
                                    <span>
                                        {data.location}
                                    </span> 
                                    <i className="style.icon-edit" />
                                </div>
                                <div className={style.weatherDetails}>
                                    <div className={style.currentWeatherDetails}>
                                        <div className={style.time}>
                                            Now {data.current.time}
                                        </div>
                                        <div className={style.weatherDegree}>
                                            {data.current.temperature}
                                        </div>
                                        <div className={style.weatherLabel}>
                                            {data.current.weather}
                                        </div>
                                    </div>
                                    <div className={style.laterWeatherDetails}>
                                        <div className={style.time}>
                                            Later {data.later.time}
                                        </div>
                                        <div className={style.weatherDegree}>
                                            {data.later.temperature}
                                        </div>
                                        <div className={style.weatherLabel}>
                                            {data.later.weather}
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                      );

                    default:
                      return (
                        <div>
                            <div className={style.left}>
                                <div className={style.title}>
                                    <span>Daily Affirmation</span>
                                    <i className={`${style.icon} icon-star`} />
                                </div>
                                <div 
                                    className={style.background} 
                                    style={{backgroundImage: `url(${data.imgUrl})`}} 
                                />
                            </div>
                            <div className={style.right}>
                                <div className={style.text}>
                                    {data.text}
                                </div>
                                <div className={style.affirmationAction}>
                                    Do it. <i className="icon-edit" />
                                </div>
                            </div> 
                          </div>
                      );
                  }
                })()}                                     
            </div>
        );
    }
};
