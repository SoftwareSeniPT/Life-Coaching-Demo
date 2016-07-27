/*
 * Reducer for Hero component
 */ 

import { combineReducers } from "redux";

// Reducers
import {featuredListReducer} from "./components/featured-lists/featured-lists.red";
import {timelineReducer} from "./components/timeline/timeline.red";
import {homeHeroReducer} from "./components/home-hero/home-hero.red";
import {overviewReducer} from "./components/overview/overview.red";
import {suggestedChallengeReducer} from "./components/suggested-challenge/suggested-challenge.red";
import {wallHeroReducer} from "./components/wall-hero/wall-hero.red";
import {navMenuReducer, navMenuVisibilityReducer} from "./components/header/nav-menu/nav-menu.red";
import {mealPlanReducer} from "./pages/meal-plan/meal-plan.red.ts";
import {mealDetailsReducer} from "./pages/meal-details/meal-details.red";
import {trainingWeekReducer} from "./pages/training-week/training-week.red";
import {progressChartReducer} from "./components/progress-chart/progress-chart.red";
import {trainingDetailsReducer} from "./pages/training-details/training-details.red";
import {shoppingListReducer} from "./pages/shopping-list/shopping-list.red";
import {trainingScheduleReducer} from "./pages/training-schedule/training-schedule.red";
import {trainingLogReducer} from "./pages/training-log/training-log.red";
import {notificationReducer} from "./pages/notification/notification.red";
import {circleMenuReducer} from "./reusable/circle-menu/circle-menu.red";
import {messageReducer} from "./pages/message/message.red.ts";

export const addHeroReducer: any = combineReducers({
    timelineReducer, 
    featuredListReducer,
    homeHeroReducer,
    overviewReducer,
    suggestedChallengeReducer,
    wallHeroReducer,
    navMenuReducer,
    navMenuVisibilityReducer,
    mealPlanReducer,
    mealDetailsReducer,
    trainingWeekReducer,
    progressChartReducer,
    trainingDetailsReducer,
    shoppingListReducer,
    trainingScheduleReducer,
    trainingLogReducer,
    notificationReducer,
    circleMenuReducer,
    messageReducer
});
