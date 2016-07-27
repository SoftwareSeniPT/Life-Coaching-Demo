/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IMainMenuProps, IMainMenuState} from "./main-menu.int";

// Ownee components
import CircleMenu from "../../reusable/circle-menu/circle-menu";

// Styles
const style: any = require("./main-menu.css");

// Import Domtastic
const $: any = require("domtastic");

// React router
import {Link} from "react-router";

/*
 * Import --------------------
 */

export class MainMenu extends React.Component<IMainMenuProps, IMainMenuState> {
    constructor(props: IMainMenuProps) {
        super(props);
    }

    componentDidMount(): any {
        if (!$("body").hasClass("has-main-menu")) {
            $("body").addClass("has-main-menu");
        }
    }

    render(): React.ReactElement<{}> {
        const {}: any = this.props;

        return (
            <div className={`main-menu ${style.mainMenu}`}>
                <div className={style.wrapper}>
                    <div className={style.menuItem}>
                        <Link to="/home">
                            <i className={`${style.itemIcon} icon-home`} />
                        </Link>
                    </div>

                    <div className={style.menuItem}>
                        <i className={`${style.itemIcon} icon-prize-award`} />
                    </div>

                    <div className={style.menuItem}>
                        <CircleMenu />
                    </div>

                    <div className={style.menuItem}>
                        <i className={`${style.itemIcon} icon-person-stalker`} />
                    </div>
                    
                    <div className={style.menuItem}>
                        <i className={`${style.itemIcon} icon-gift`} />
                    </div>
                </div>
            </div>
        );
    }
};
