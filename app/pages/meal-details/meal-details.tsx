/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IMealDetailsProps, IMealDetailsState} from "./meal-details.int";

// Ownee Component
import Header from "../../components/header/header";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {StarRating} from "../../reusable/star-rating/star-rating";
import {CheckList} from "../../components/checklist/checklist";
import {MainMenu} from "../../components/main-menu/main-menu";

// Actions
import {
    selectIngredient, 
    unselectIngredient,
    selectAllIngredient,
    unselectAllIngredient
} from "../../pages/meal-details/meal-details.act";

// Redux
import { connect } from "react-redux";

// Styles
const style: any = require("./meal-details.css");

/*
 * Import --------------------
 */

class MealDetails extends React.Component<IMealDetailsProps, IMealDetailsState> {
    constructor(props: IMealDetailsProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {dispatch, mealDetailsData}: any = this.props;
  
        return (
            <div className={`meal-details ${style.mealDetails}`}>
                {/* Include header */}
                <Header />

                {/* Meal details hero */}
                <div className={style.mealDetailsHero}>
                    <div className={style.title}>{mealDetailsData.name}</div>
                    <div className={style.subtitle}>{mealDetailsData.title}</div>
                    <StarRating rate={4} of={5} />

                    <div className={style.tags}>
                        {mealDetailsData.tags.map((tag: string, key: number) => {
                            return <span key={key}>{tag}</span>;
                        })}
                    </div>

                    <div className={style.preparation}>
                        <span className={style.prep}>
                            <strong>Prep</strong> {mealDetailsData.preparation} 
                        </span>
                        <span className={style.cook}>
                            <strong>Cook</strong> {mealDetailsData.cooking} 
                        </span>
                        <span className={style.serves}>
                            <strong>Serves</strong> {mealDetailsData.serves}
                        </span>
                    </div>

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />
                </div>

                {/* Meal details main image */}
                <div 
                    className={style.mainImage} 
                    style={{ backgroundImage: `url(${mealDetailsData.imageUrl})` }} />

                {/* Meal details description */}  
                <div
                    className={style.desc}>
                    {mealDetailsData.desc}
                </div>

                {/* Meal details macros */}
                <MealDetailsMacros macroData={mealDetailsData.macros} barSize={100}/>  

                {/* Meal ingredients */}
                <CheckList
                    title="CheckList" 
                    checklistData={mealDetailsData.ingredients}
                    selectChecklist={(id: number) => dispatch(selectIngredient(id)) }
                    unselectChecklist={(id: number) => dispatch(unselectIngredient(id)) }
                />

                {/* Meal ingredients */}
                <MealDetailsIngredientsFooter
                    ingredientData={mealDetailsData.ingredients}
                    selectedIngredients={mealDetailsData.selectedIngredients}
                    selectAllIngredient={() => dispatch(selectAllIngredient()) } 
                    unselectAllIngredient={() => dispatch(unselectAllIngredient())}
                />

                {/* Meal methods */}
                <MealDetailsMethods methodData={mealDetailsData.method} />

                {/* Meal add rating */}
                <div className={`${style.componentFooter} ${style.addRating}`}>
                    <span>Rate this recipe</span>
                    <StarRating rate={4} of={5} />
                </div>

                <MainMenu />

            </div>
        );
    }

    componentDidMount(): any {
        scroll(0, 0);
    }
};

/* Ownee components */
class MealDetailsMacros extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {macroData, barSize}: any = this.props;
        return (
            <div className={style.component}>
                <div className={style.componentHeader}>Macros</div>
                {macroData.length ? macroData.map((macro: any, key: number) => {
                    return (
                        <div className={`${style.macroItem} ${style["macro" + macro.name]}`} key={key}>
                            <span className={style.bar} style={{width: `${(macro.value / 100) * barSize}px`}}/>
                            <span className={style.macroName}> {macro.name} </span>
                            <span className={style.macroValue}>{macro.value} {macro.unit}</span>
                        </div>
                    );
                }) :null}
                <div className={style.componentFooter}>Read About Macros</div>
            </div>
        );
    }
};

class MealDetailsIngredientsFooter extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {
            ingredientData,
            selectedIngredients,
            selectAllIngredient,
            unselectAllIngredient
        }: any = this.props;

        return (
            <div className={style.componentFooter}>
                {ingredientData.length === selectedIngredients ? 
                    <span
                        className={style.footerLabel}
                        onClick={() => unselectAllIngredient() }>
                        Unselect All
                    </span>
                  : <span
                        className={style.footerLabel}
                        onClick={() => selectAllIngredient() }>
                        Select All
                    </span>
                }
                <div className={style.addToList}>
                    <span className={style.addToListLabel}>Add to shopping list</span>
                    <i className="icon icon-ios-plus" />
                    <i className="icon icon-minus-circled" />
                </div>
            </div>
        );
    }
};

class MealDetailsMethods extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {methodData}: any = this.props;
        return (
            <div className={style.component}>
                <div className={style.componentHeader}>Method</div>
                {methodData.length ? methodData.map((method: any, key: number) => {
                    return (
                        <div className={style.methodItem} key={key} data-index={key + 1}>
                            {method}
                        </div>
                    );
                }) :null}
            </div>
        );
    }
};

export default connect(function(state: any): any {
    return {
        mealDetailsData: state.mealDetailsReducer
    };
})(MealDetails);
