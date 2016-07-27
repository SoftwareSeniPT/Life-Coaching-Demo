/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IFeaturedLists} from "./featured-lists.int";

// Ownee Component
import {FeaturedList} from "./featured-list/featured-list";

// Styles
const style: any = require("./featured-lists.css");

/*
 * Import --------------------
 */

export class FeaturedLists extends React.Component<IFeaturedLists, {}> {
    constructor(props: IFeaturedLists) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data}: any = this.props;
        return (
          <div className={`featured-lists ${style.featuredLists}`}> 
              <div className={style.row}>

                {/* Looping the data */}
                {data.map((featuredListItem: any, key: number) => 
                  <div className={style.featuredListCol} key={featuredListItem.id}>
                      <FeaturedList
                        imgUrl={featuredListItem.imgUrl}
                        title={featuredListItem.title}
                        iconName={featuredListItem.iconName}
                        timeStamp={featuredListItem.timeStamp}
                        iconBackground={featuredListItem.iconBackground}
                      />
                  </div>
                )}
              {/* end of loop */}
              
               </div> 
              <div className={style.more}>
                  <span>More</span>
              </div>
          </div>
        );
    }
};
