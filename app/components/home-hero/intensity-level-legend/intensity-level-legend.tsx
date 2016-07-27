/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IIntensityLevelLegendProps} from "./intensity-level-legend.int";

// Styles
const style: any = require("./intensity-level-legend.css");

import {ElipsisMenu} from "../../../reusable/elipsis-menu/elipsis-menu";

/*
 * Import --------------------
 */

export class IntensityLevelLegend extends React.Component<IIntensityLevelLegendProps, {}> {
    constructor(props: IIntensityLevelLegendProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        return (
          <div className={`intensity-level-legend ${style.intensityLevelLegend}`}> 
              <div className={style.title}>Intensity Level 24hr</div>
              <ul className={style.legend}>
                  <li className={style.high}>High</li>
                  <li className={style.med}>Med</li>
                  <li className={style.low}>Low</li>
                  <li className={style.nil}>Nil</li>
              </ul>
              <div className={style.range}>
                  <i className={`icon-graph-bar ${style.rangeIcon}`} />
                  <div className={style.rangeLabel}>Range</div>
                  <ElipsisMenu type="activityRange" />
              </div>
          </div>
        );
    }
};
