/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ICircleMenuProps, ICircleMenuState} from "./circle-menu.int";

// Styles
const style: any = require("./circle-menu.css");

// Action
import {toogleOpenMenu} from "./circle-menu.act";

// Redux
import { connect } from "react-redux";

// Import Domtastic
const $: any = require("domtastic");

/*
 * Import --------------------
 */

class CircleMenu extends React.Component<ICircleMenuProps, ICircleMenuState> {
    constructor(props: ICircleMenuProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {circleMenuData, dispatch}: any = this.props;
        return (
            <div className={`circle-menu ${style.circleMenu}`}>
                <i className={`${style.mainIcon} 
                    ${circleMenuData.menuOpened ? style.mainIconRotated : null} 
                    icon-ios-plus`} 
                   ref="mainIcon" 
                   onClick={() => {
                       dispatch(toogleOpenMenu(circleMenuData.menuOpened));
                       console.log("dadsd");
                       if (!$("#overlay").hasClass("active")) {
                         $("#overlay").addClass("active");
                       } else {
                         $("#overlay").removeClass("active");
                       }
                   } }/>

                <div className={`${style.overlay} ${circleMenuData.menuOpened ? style.showOverlay : null}`}>
                    
                </div>   

                <ul className={`${circleMenuData.menuOpened ? style.opened : null}`}>
                    <li className={`${style.menuIcon} ${style.icon1}`}>
                        <span className={style.icon}><i className="icon-pitch" /></span>
                    </li>
                    <li className={`${style.menuIcon} ${style.icon2}`}>
                        <span className={style.icon}><i className="icon-road" /></span>
                    </li>
                    <li className={`${style.menuIcon} ${style.icon3}`}>
                        <span className={style.icon}><i className="icon-heartbeat" /></span>
                    </li>
                    <li className={`${style.menuIcon} ${style.icon4}`}>
                        <span className={style.icon}><i className="icon-smile-o" /></span>
                    </li>
                    <li className={`${style.menuIcon} ${style.icon5}`}>
                        <span className={style.icon}><i className="icon-bolt" /></span>
                    </li>
                    <li className={`${style.menuIcon} ${style.icon6}`}>
                        <span className={style.icon}><i className="icon-tint" /></span>
                    </li>
                    <li className={`${style.menuIcon} ${style.icon7}`}>
                        <span className={style.icon}><i className="icon-moon-fill" /></span>
                    </li>
                </ul>
            </div>
        );
    }
};

export default connect(function(state: any): any {
    return {
        circleMenuData: state.circleMenuReducer
    };
})(CircleMenu);
