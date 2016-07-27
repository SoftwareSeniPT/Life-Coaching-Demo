/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IProTip} from "./pro-tip.int";

// Reusable components
import {FontIcon} from "../../reusable/font-icons/font-icons";

// Styles
const style: any = require("./pro-tip.css");

/*
 * Import --------------------
 */

export class ProTip extends React.Component<IProTip, {}> {
    constructor(props: IProTip) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        return (
            <div className={`pro-tip ${style.proTip}`}>
                <div className={style.title}>
                    <FontIcon icon="star" background="#33d3d2" size="medium" />
                    <span>Pro Tip</span>
                </div>
                <div className={style.image}>
                    <img src="./assets/images/yoda.jpg" />
                </div>
                <div className={style.text}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Expedita adipisci neque autem repudiandae aperiam iusto dignissimos 
                        laborum magnam officia atque.
                    </span>
                    <span className={style.readMore}>
                        ... Read More
                    </span>
                </div>
            </div>
        );
    }
};
