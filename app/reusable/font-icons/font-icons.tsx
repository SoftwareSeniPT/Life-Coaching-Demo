/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IFontIconProps} from "./font-icons.int";

// Styles
const style: any = require("./font-icons.css");

/*
 * Import --------------------
 */

export class FontIcon extends React.Component<IFontIconProps, {}> {
    constructor(props: IFontIconProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            icon = "comment", // Name of the icon
            roundedBorder = true, // Option to wrap the icon on rounded border
            size = "medium", // Size of the icon
            color = "light", // Color of the icon. light = #fff. dark = #333
            badge = undefined, // Number on right top side of the icon
            background = undefined, // Background color on hex color code
            customClass = undefined // Custom class
        }: any = this.props;

        // Rounded border class
        const roundedBorderClass: any = () => {
            switch (roundedBorder) {
                case true:
                    return "rounded";
                default:
                    return "not-rounded";
            }
        };

        // Color
        const colorClass: any = () => {
            switch (color) {
                case "dark":
                    return "color-dark";
                default:
                    return "color-light";
            }
        };

        // Size
        const sizeClass: any = () => {
            switch (size) {
                case "small":
                    return "size-small";
                case "large":
                    return "size-large";
                default:
                    return "size-medium";
            }
        };

        // Badge Attribute
        const badgeAttr: any = () => {
            if (badge !== undefined) {
                return badge;
            }
            return "";
        };

        // Badge Class
        const badgeClass: any = () => {
            if (badge !== undefined) {
                return "has-badge";
            }
            return "no-badge";
        };

        return <i className={`icon icon-${icon}
            ${customClass} 
            ${style.icon} 
            ${style[roundedBorderClass()]} 
            ${style[colorClass()]} 
            ${style[sizeClass()]} 
            ${style[badgeClass()]}
        `} data-badge={badgeAttr() } style={
            (() => {
                if (background !== undefined) {
                    return {
                        background: background,
                        border: 0
                    };
                }
            })() 
        }></i>;
    }
};
