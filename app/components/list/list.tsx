/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IListProps, IListState} from "./list.int";

// Ownee components
import {ListItem} from "./list-item/list-item";

// Styles
const style: any = require("./list.css");

/*
 * Import --------------------
 */

export class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, listVisibility, listView, openShoppingListItem}: any = this.props;

        return (
            <div className={`list ${style.list}`}>
                {data.length ? data.map((data: any, key: number) => {
                    return (
                        <div key={key}>

                            {/* Shopping List Header */}
                            <div className={style.listItemHeader}>
                                <div className={style.selectView}>
                                    <i 
                                        className={`icon-content-43 ${data.view !== "list" ? "active" : ""}`}
                                        onClick={() => {
                                            listView(key, "list");
                                        }} />
                                    <i 
                                        className={`icon-content-42 ${data.view === "list" ? "active" : ""}`} 
                                        onClick={() => {
                                            listView(key, "grid");
                                        }} />
                                </div>
                                <div 
                                    className={style.listItemHeaderTitle}
                                    onClick={() => {
                                        listVisibility(key, data.visibility);
                                    }}>
                                    {data.categoryTitle}
                                    {data.visibility ? 
                                        <i className="icon-angle-up"></i>
                                      : <i className="icon-angle-down"></i>
                                    }
                                </div>
                            </div>

                            {/* Shopping Item List */}
                            <div 
                                className={`${style.listItem} 
                                ${data.visibility ? style.listVisible : style.listNotVisible }
                                ${data.view === "list" 
                                    ? `view-list ${style.viewListStyle}` 
                                : `view-grid ${style.viewGridStyle}`}
                                `}>
                                
                                <div className={style.listwrapper}>       
                                    {data.items.length ? data.items.map((itemData: any, itemKey: number) => {
                                        return (
                                            <ListItem 
                                                key={itemKey} data={itemData} 
                                                openShoppingListItem={() => 
                                                    openShoppingListItem(key, itemKey)} 
                                                viewStyle= {data.view} />
                                        );
                                    }) : null}
                                </div> 
                            </div>
                        </div>
                    );
                }) : null}
            </div>
        );
    }
};
