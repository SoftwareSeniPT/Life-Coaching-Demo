/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IElipsisMenuProps, IElipsisMenuState} from "./elipsis-menu.int";

// Styles
const style: any = require("./elipsis-menu.css");

// Domtastic
const $: any = require("domtastic");

/*
 * Import --------------------
 */

export class ElipsisMenu extends React.Component<IElipsisMenuProps, IElipsisMenuState> {
    constructor(props: IElipsisMenuProps) {
        super(props);
    }

    public randomString: any = (length: number): any => {
        const charSet: string = "abcdefghijklmnopqrstuvwxyz0123456789";
        let randomString: string = "";
        for (var i: number = 0; i < length; i++) {
            const randomPoz: number = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    };

    public elipsisName: string = `elipsis-${this.randomString(5)}`;

    componentDidMount(): any {
        $(`.${this.elipsisName} .trigger-ellipsis`).on("click", function(): any {
            $(".elipsis-menu > div").css({ transform: "scale(0)" });
            if (!$(this).parent().hasClass("opened")) {
                $(this).parent().addClass("opened");
                $(this).siblings("div").css({ transform: "scale(1)" });
            } else {
                $(this).parent().removeClass("opened");
                $(this).siblings("div").css({ transform: "scale(0)" });
            }
        });

        $(document).on("click", function(e: any): any {
            if ($(e.target).closest(".elipsis-menu").length > 0) {
                return false;
            }
            $(".elipsis-menu > div").css({ transform: "scale(0)" });
        });
    }

    render(): React.ReactElement<{}> {
        const {type}: any = this.props;

        return (
            <div className={`elipsis-menu ${style.elipsisMenu} ${this.elipsisName}`}>
                <i className="icon-ellipsis-v trigger-ellipsis" />
                <div className={`${style.menu} menu`}>
                    {type === "postAdmin" ?
                        <ul>
                            <li>Share</li>
                            <li>Edit Post</li>
                            <li>Edit Privacy</li>
                            <li>Delete</li>
                        </ul>
                     : null
                    }

                    {type === "postNonAdmin" ?
                        <ul>
                            <li>Share</li>
                            <li>Report</li>
                        </ul>
                     : null
                    }

                    {type === "activityRange" ?
                        <ul>
                            <li>Day</li>
                            <li>Wk</li>
                            <li>Mth</li>
                            <li>Year</li>
                        </ul>
                     : null
                    }
                </div>
            </div>
        );
    }
};
