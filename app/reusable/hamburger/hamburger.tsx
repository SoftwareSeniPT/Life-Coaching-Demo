/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IHamburger} from "./hamburger.int";

// Styles
const style: any = require("./hamburger.css");

/*
 * Import --------------------
 */

export class Hamburger extends React.Component<IHamburger, {}> {
    constructor(props: IHamburger) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {setNavmenuVisibility, visibility}: any = this.props;

        return <i 
            onClick={() => setNavmenuVisibility(visibility.visible) } 
            className={`hamburger icon-navicon ${style.hamburger}`} 
        />;
    }
};
