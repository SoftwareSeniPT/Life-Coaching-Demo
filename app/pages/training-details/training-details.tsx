/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITrainingDetailsProps, ITrainingDetailsState} from "./training-details.int";

// Styles
const style: any = require("./training-details.css");

// Ownee components
import Header from "../../components/header/header";
import {List} from "../../components/list/list";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {TrainingHeader} from "../training-week/training-week";
import {Button} from "../../reusable/button/button";
import {TrainingDetailsFooter} from "./training-details-footer/training-details-footer";

// Action
import {
    trainingDetailsListVisibility, 
    trainingDetailsListView, 
    openTrainingDetailsListItem
} from "./training-details.act";

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class TrainingDetails extends React.Component<ITrainingDetailsProps, ITrainingDetailsState> {
    constructor(props: ITrainingDetailsProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {
            dispatch,
            trainingDetailsData
        }: any = this.props;

        return (
            <div className={`training-details ${style.trainingDetails}`}>
                {/* Include header */}
                <Header />

                {/* Training week hero */}
                <div className={style.trainingDetailsHero}>
                    <div className={style.filter}>
                        <span className="gf">AH</span>
                    </div>

                    <div 
                        className={style.title}>Core Crusher</div>
                    <div 
                        className={style.subtitle}>Week 2 Fundamentals</div>  

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />  
                </div>

                {/* Training Header */}
                <TrainingHeader
                    thumbnailUrl="./assets/images/workout-3.jpg"
                    title="Luke's Intro" 
                    desc="Watch this before you begin"
                />

                {/* Training details desc */} 
                <TrainingDetailsDesc />   

                {/* Shopping list */}
                <List 
                    data={trainingDetailsData.trainingList}
                    listVisibility={(id: number, visible: boolean) => {
                        dispatch(trainingDetailsListVisibility(id, visible));
                    }}
                    openShoppingListItem={(categoryID: number, itemID: number) => {
                        dispatch(openTrainingDetailsListItem(categoryID, itemID));
                    } }
                    listView={(id: number, view: string) => dispatch(trainingDetailsListView(id, view)) }
                />

                {/* Training Details Footer */}
                <TrainingDetailsFooter />
            </div>
        );
    }

    componentDidMount(): any {
        scroll(0, 0);
    }
};

// Ownee components
export class TrainingDetailsDesc extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className={style.trainingDetailsDesc}>
                <div className={style.trainingDetailsDescText}>
                    The list above is all of the ingredients for your meal plan for the week. 
                    Add and remove items as you need depending on what you have in your pantry and fridge. 
                    Once you are happy send to SMS, email, print or save below. 
                </div>
                <Button value="Start Workout" color="#fd2d5f" />
            </div>
        );
    }
};

export default connect(function(state: any): any {
    return {
        trainingDetailsData: state.trainingDetailsReducer
    };
})(TrainingDetails);
