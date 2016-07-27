/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IShoppingListProps, IShoppingListState} from "./shopping-list.int";

// Ownee components
import Header from "../../components/header/header";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {CheckList} from "../../components/checklist/checklist";
import {Button} from "../../reusable/button/button";

import {selectList, unselectList, selectAllList, addItem, unselectAllList, removeItem} from "./shopping-list.act";

// Redux
import { connect } from "react-redux";

// Styles
const style: any = require("./shopping-list.css");

/*
 * Import --------------------
 */

class ShoppingList extends React.Component<IShoppingListProps, IShoppingListState> {
        constructor(props: IShoppingListProps) {
            super(props);
        }

        refs: {
          [key: string]: (Element);
          addItem: (HTMLInputElement);
        };

        render(): React.ReactElement<{}> {
          const {
            dispatch,
            shoppingListData
          }: any = this.props;

          return (
            <div className={`shopping-list ${style.shoppingList}`}>
                {/* Include header */}
                <Header />

                {/* Shopping list Hero */}  
                <div className={style.shoppingListHero}>
                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" /> 

                    <div className={style.heroTitle}>Shopping List</div>
                    <div className={style.heroDesc}>
                      Week Four Fundamentals 28 August
                    </div>
                    <div className={style.heroDay}>
                        <span className={style.heroDayLabel}>Shopping Day </span>
                        <span>Thursday </span>
                        <i className="icon-pencil"></i>
                    </div>
                </div>  

                <div className={style.selectAll}>
                  {this.length(shoppingListData) === shoppingListData.selectedList ? 
                  <div onClick={() => dispatch(unselectAllList()) }>
                    <i className="icon-minus-circled" />
                    <span>Unselect All</span>
                  </div>

                  : <div onClick={() => dispatch(selectAllList()) }>
                      <i className="icon-ios-plus" />
                      <span>Select All</span>
                    </div>
                  }
                </div>

                <div className={style.lists}>
                  {shoppingListData.shopping.length ? shoppingListData.shopping.map((item: any, key: number) => {
                    return (
                      <CheckList
                        title={item.name}
                        checklistData={item.lists}
                        selectChecklist={(id: number) => dispatch(selectList(key, id)) }
                        unselectChecklist={(id: number) => dispatch(unselectList(key, id)) }
                        removeChecklist={(id: number) => dispatch(removeItem(id)) }
                        key={key}
                        />
                    );
                  }) : null}
                </div>

                <div className={style.addItem}>
                    <form onSubmit={(e: any) => {
                          this.addItem();
                          e.preventDefault();
                    }}>
                      <input type="text" placeholder="Add an item" ref="addItem"/>
                      <i className="icon-ios-plus" onClick={() => this.addItem() }/>
                    </form>
                </div>

                <div className={style.shoppingListDesc}>
                 The list above is all of the ingredients for your meal plan for the week.Add and remove items 
                 as you need depending on what you have in your pantry and fridge.
                 Once you are happy send to SMS, email, print or save below.
                </div>

                <div className={style.buttons}>
                    <Button value="Send to SMS" color="#cafee7"/>
                    <Button value="Send to Email" color="#7cfebe"/>
                    <Button value="Print" color="#26ff94"/>
                </div>
            </div>
          );
    }

    addItem(): any {
      const value: string = this.refs.addItem.value;
      if (value !== "" && value !== undefined) {
          this.props.dispatch(addItem(value));
          this.refs.addItem.value = "";
      }
    }

    length(state: any): any {
      let num: number = 0;
      state.shopping.map((o: any) => {
        num = num + o.lists.length;
      });
      return num;
    };
};

export default connect(function(state: any): any {
    return {
        shoppingListData: state.shoppingListReducer
    };
})(ShoppingList);
