/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IStarRatingProps, IStarRatingState} from "./star-rating.int";

// Styles
const style: any = require("./star-rating.css");

/*
 * Import --------------------
 */

export class StarRating extends React.Component<IStarRatingProps, IStarRatingState> {
    constructor(props: IStarRatingProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {rate, of, color = "#fff", activeColor = "#9dd976"}: any = this.props;
        const unselectRating: number = of - rate;

        const selectRatingHTML: any = () => {
          let html: any = [];  
          for (var i: number = 0; i < rate; i++) {
            html.push(<i key={i} className={`icon-star ${style.active}`}  style={{ color: activeColor }}/>);
          }
          return html;
        };

        const unselectRatingHTML: any = () => {
          let html: any = [];  
          for (var i: number = 0; i < unselectRating; i++) {
            html.push(<i key={i} className="icon-star" style={{color: color}}/>);
          }
          return html;
        };

        return (
            <div className={`star-rating ${style.starRating}`}>
                {selectRatingHTML()}
                {unselectRatingHTML()}
            </div>
        );
    }
};
