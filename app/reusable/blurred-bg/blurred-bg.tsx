/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IBlurredBG} from "./blurred-bg.int";

// Styles
const style: any = require("./blurred-bg.css");

/*
 * Import --------------------
 */

export class BlurredBG extends React.Component<IBlurredBG, {}> {
    constructor(props: IBlurredBG) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const imageUrl: string = this.props.imageUrl;

        return (
          <div 
              className={`blurred-bg ${style.blurredBG}`} 
              style={{backgroundImage: `url(${imageUrl})`}}>
          </div>
        );
    }
};
