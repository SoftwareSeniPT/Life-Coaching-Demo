/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IButtonProps, IButtonState} from "./button.int";

// Styles
const style: any = require("./button.css");

/*
 * Import --------------------
 */

export class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {value, color}: any = this.props;

        return (
            <div className={`button ${style.button}`} style={{backgroundColor: color}}>{value}</div>
        );
    }
};
