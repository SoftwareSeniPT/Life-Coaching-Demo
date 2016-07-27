/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ILogoProps} from "./logo.int";

// Styles
const style: any = require("./logo.css");

/*
 * Import --------------------
 */

export class Logo extends React.Component<ILogoProps, {}> {
    constructor(props: ILogoProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {position = "header"}: any = this.props;

        /* Returning inline SVG of the icon */
        return (
          <div className={`logo ${style["logo-" + position]} ${style.logo}`}>
            <svg 
                className={`logo-svg ${style.svg}`} 
                id="Layer_1" 
                data-name="Layer 1" 
                viewBox="0 0 98.67 105">
                <path d="M0,105S55.67,92.67,55.67,40.67L69.33,63.33S64.67,99.67,0,105Z" fill="#26ff93"/>
                <path d="M55.67,40.67s-4-24,43-40.67L64.23,54.86Z" fill="#2eb56d"/>
            </svg>

            {position !== "header" ? 
              <div className={style.logoText}>
                    <span className={style.bold}>Life</span>
                    <span>Coaching</span>
                </div>
            : null}
          </div>
        );
    }
};
