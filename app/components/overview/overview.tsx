/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IOverview} from "./overview.int";

// Reusable components
import {OverviewItem} from "./overview-item/overview-item";

// Styles
const style: any = require("./overview.css");

/*
 * Import --------------------
 */

export class Overview extends React.Component<IOverview, {}> {
    constructor(props: IOverview) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data}: any = this.props;
        return (
            <div className={`overview ${style.overview}`}>

                {/* Show only if the timeline is not empty */}
                {data.length ? data.map((overviewItem: any, key: number) => {
                    return (
                      <OverviewItem 
                          type={overviewItem.type} 
                          data={overviewItem} 
                          key={key} 
                      />
                    );
                }) : null}
            </div>
        );
    }
};
