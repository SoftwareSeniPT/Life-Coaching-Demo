/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IHeroActionProps} from "./hero-action.int";

// Styles
const style: any = require("./hero-action.css");

/*
 * Import --------------------
 */

export class HeroAction extends React.Component<IHeroActionProps, {}> {
    constructor(props: IHeroActionProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        return (
          <div className={`hero-action ${style.heroAction}`}> 
            <div className={style.addFriend}>
              <i className="icon-users" />
              <span>+ Friend</span>
            </div>

            <div className={style.sendMessage}>
              <i className="icon-comment" />
              <span>Send Message</span>
            </div>

            <div className={style.writePost}>
              <i className="icon-edit" />
              <span>Write Post</span>
            </div>
          </div>
        );
    }
};
