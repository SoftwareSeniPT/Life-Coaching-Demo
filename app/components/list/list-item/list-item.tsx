/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IListItemProps, IListItemState} from "./list-item.int";

// React router
import {Link} from "react-router";

// Ownee components
import {StarRating} from "../../../reusable/star-rating/star-rating";
import {Media} from "../../../reusable/media/media";

// Styles
const style: any = require("./list-item.css");

/*
 * Import --------------------
 */

export class ListItem extends React.Component<IListItemProps, IListItemState> {
    constructor(props: IListItemProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, viewStyle, openShoppingListItem}: any = this.props;

        return (
            <div className={`list-item 
                ${style.listItem} ${data.opened ? style.listItemOpened : style.listItemClosed}`}>

                <div className={style.listItemContent}>

                    <div className={style.listItemMedia}>
                        {data.media.type === "image" 
                            ? (data.link !== undefined ? 
                                  <Link to={data.link}>
                                     <Media type="image" thumbnailUrl={data.media.thumbnailUrl} />
                                  </Link> 
                                : <Media type="image" thumbnailUrl={data.media.thumbnailUrl} />
                               )
                            : null
                        }

                        {data.media.type === "video" 
                            ? (data.media.showThumbnailOnly ? 

                              /* If video player no need playback */  
                                (data.link !== undefined ? 
                                    <Link to={data.link}>
                                        <Media
                                          type="video"
                                          thumbnailUrl={data.media.thumbnailUrl}
                                          showPlaybutton={true}
                                        />
                                    </Link>
                                  : <Media
                                    type="video"
                                    thumbnailUrl={data.media.thumbnailUrl}
                                    showPlaybutton={true}
                                    />)

                              /* If the video player have playback */  
                              : <Media 
                                    type="video" 
                                    thumbnailUrl={data.media.thumbnailUrl} 
                                    showPlaybutton={true} 
                                />
                            ) : null
                        }

                        <div className={`list-label ${style.listLabel}`}>
                            {data.label.type === "text" ? data.label.value :  null}
                            {data.label.type === "rating" ? 
                                <StarRating 
                                    rate={data.label.value} 
                                    of={5} 
                                    color="#bbe6a3" 
                                    activeColor="#fff"
                                />
                            : null}
                        </div>

                    </div>

                    {/* 
                      * Item details 
                      * Show only if on list mode
                      * 
                      */}
                    {viewStyle === "list" ?
                        <div className={style.itemDetails}>
                            <div
                                className={style.itemDetailsTitle}>
                                    <Link to={data.link}>{data.name}</Link>
                            </div>
                            <div
                                className={style.desc}>
                                    {data.desc}
                            </div>
                        </div>
                    : null} 
                </div>

                {/* 
                  * Item meta 
                  * Show only if on list mode
                  * 
                  */}   
                {viewStyle === "list" ?  
                    <div className={style.itemMetaAction} onClick={() => {
                        if (!data.opened) {
                            openShoppingListItem();
                        }
                    }}>
                        {!data.opened ? 
                            <span className={style.itemMetaActionTitle}>
                                {data.name}
                            </span>                            
                        : null}

                        {data.opened ? 
                            <span
                                className={style.difficulty}>
                                {data.difficulty}
                            </span>
                        : null}

                        {data.leftMenu.type === "link" && data.opened ? 
                            <span className={style.link}>
                                <i className={`icon-${data.leftMenu.icon}`} /> 
                                <span> {data.leftMenu.value}</span>
                            </span>
                        : null}

                        {data.leftMenu.type === "tags" && data.opened ?
                          <span className={style.tags}>
                            {data.leftMenu.tags.length ? data.leftMenu.tags.map((tag: any, key: number) => {
                              return (<span key={key}>{tag.name}</span>);
                            }) : null}
                          </span>
                        : null}

                        {data.opened ? 
                            <span className={style.swap}>
                                {data.middleMenu.name}
                            </span>
                        : null}

                        <span className={style.add}>
                            {/* If the action type is adding entry */}
                            {data.rightMenu.type === "add" ? 
                                <div>
                                    {data.rightMenu.selected ?
                                        (<span className={style.wrapper}>
                                            <span>Added</span>
                                            <span><i className="icon-checkmark"></i></span>
                                         </span>)
                                        : (<span>Add</span>)
                                    }
                                    <i className="icon-ios-plus-outline" />
                                </div>
                            : null}

                            {data.rightMenu.type === "check" ?
                                <div>
                                    <i className="icon-check-1" />
                                </div>
                            : null}
                        </span>
                    </div> 
                : null} 

            </div>
        );
    }
};
