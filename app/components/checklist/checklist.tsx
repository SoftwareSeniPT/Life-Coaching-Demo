/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IChecklistProps, IChecklistState} from "./checklist.int";

// Styles
const style: any = require("./checklist.css");

/*
 * Import --------------------
 */

export class CheckList extends React.Component<IChecklistProps, IChecklistState> {
    render(): React.ReactElement<{}> {
        const {
            title = undefined,
            checklistData,
            selectChecklist,
            unselectChecklist,
            removeChecklist
        }: any = this.props;

        return (
            <div className={`checklist ${style.checklist}`}>
                
                {title !== undefined ? 
                    <div className={style.checklistHeader}>
                        {title}
                    </div> 
                : null}

                {checklistData.length ? checklistData.map((checklist: any, key: number) => {
                    return (
                        <div className={style.checklistItem} key={key}>
                            {checklist.selected ?
                                <span>
                                    <i className="icon icon-check"
                                       onClick={() => unselectChecklist(key)} 
                                    />
                                    <span onClick={() => unselectChecklist(key)}>
                                        {checklist.name}
                                    </span>
                                    {checklist.showRemove 
                                        ? <span 
                                            className={style.remove}
                                            onClick={() => {
                                                removeChecklist(key);
                                            } }> 
                                                <i className="icon-times" />
                                          </span>
                                        : null}
                                </span>
                              : <span>
                                    <i className="icon icon-circle-1" onClick={() => selectChecklist(key)}/>
                                    <span 
                                        onClick={() => selectChecklist(key) }>
                                        {checklist.name}
                                    </span>
                                    {checklist.showRemove
                                        ? <span 
                                            className={style.remove}
                                            onClick={() => {
                                                removeChecklist(key);
                                            }}>
                                                <i className="icon-times" />
                                            </span>
                                        : null}                                    
                                </span>
                            }
                        </div>
                    );
                }) : null}
            </div>    
        );
    }
};
