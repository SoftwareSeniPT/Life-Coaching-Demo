/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IFeaturedList} from "./featured-list.int";
import {FontIcon} from "../../../reusable/font-icons/font-icons";

// Styles
const style: any = require("./featured-list.css");

/*
 * Import --------------------
 */

export class FeaturedList extends React.Component<IFeaturedList, {}> {
    constructor(props: IFeaturedList) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {imgUrl, iconName = undefined, iconBackground = undefined, title, timeStamp}: any = this.props; 
        return (
            <div className={`featured-list ${style.featuredList}`}> 
              <div className={style.image} style={{ backgroundImage: `url(${imgUrl})` }} />
              <div className={style.title}>

                {/* Load icon */}
                {iconName !== undefined ? 
                    <FontIcon icon={iconName} background={iconBackground} size="small" />
                : null}

                {/* Featured list title */}
                {title}
              </div>
              <div className={style.timestamp}>{timeStamp}</div>
          </div>
        );
    }
};
