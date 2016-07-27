/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IMealPlanProps, IMealPlanState} from "./meal-plan.int";

// Styles
const style: any = require("./meal-plan.css");

// Ownee components
import Header from "../../components/header/header";
import {List} from "../../components/list/list";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {MainMenu} from "../../components/main-menu/main-menu";

// Action
import {shoppingListVisibility, shoppingListView, openShoppingListItem} from "./meal-plan.act";

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class MealPlan extends React.Component<IMealPlanProps, IMealPlanState> {
    constructor(props: IMealPlanProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            dispatch,
            mealPlanData
        }: any = this.props;

        return (
            <div className={`meal-plan ${style.mealPlan}`}>
                {/* Include header */}
                <Header />

                {/* Meal plan hero */}
                <div className={style.mealPlanHero}>
                    <div className={style.filter}>
                        <span className="gf">GF</span>
                        <span className="df">DF</span>
                    </div>

                    <div 
                        className={style.title}>Meal Plan</div>
                    <div 
                        className={style.subtitle}>Week 2 Fundamentals</div>

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />  
                </div>

                {/* Meal Plan Header */}
                <MealPlanHeader />

                {/* Shopping list */}
                <List 
                    data={mealPlanData.shoppingList}
                    listVisibility={(id: number, visible: boolean) => {
                        dispatch(shoppingListVisibility(id, visible));
                    }}
                    openShoppingListItem={(categoryID: number, itemID: number) => {
                        dispatch(openShoppingListItem(categoryID, itemID));
                    }}
                    listView={(id: number, view: string) => dispatch(shoppingListView(id, view)) }
                />

                <MainMenu />
            </div>
        );
    }

    componentDidMount(): any {
        scroll(0, 0);
    }
};

// Ownee components
class MealPlanHeader extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className={style.listHeader}>
                <div className={style.listHeaderTitle}>
                    Shopping List
                </div>
                <div className={style.addAll}>
                    <span>Add All</span>
                    <i className="icon-ios-plus" />
                    <i className="icon-minus-circled" />
                </div>
            </div>
        );
    }
};

export default connect(function(state: any): any {
    return {
        mealPlanData: state.mealPlanReducer
    };
})(MealPlan);
