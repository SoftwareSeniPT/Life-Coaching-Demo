/*
 * Import -------------------
 */ 

// React
import * as React from "react";
import * as ReactDOM  from "react-dom";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

// Reducers
import {addHeroReducer} from "./app.red";

// React Router
import { Router, Route, IndexRoute, hashHistory } from "react-router";
 
// Ownee Component
import {Login} from "./pages/auth/login/login";
import {Signup} from "./pages/auth/signup/signup";
import {Welcome} from "./pages/welcome/welcome";
import {ForgotPassword} from "./pages/auth/forgot-password/forgot-password";
import TrainingSchedule from "./pages/training-schedule/training-schedule";
import TrainingLog from "./pages/training-log/training-log";
import ShoppingList from "./pages/shopping-list/shopping-list";
import MealDetails from "./pages/meal-details/meal-details";
import MealPlan from "./pages/meal-plan/meal-plan";
import ActivityScreen from "./pages/activity-screen/activity-screen";
import Home from "./pages/home/home";
import Wall from "./pages/wall/wall";
import TrainingWeek from "./pages/training-week/training-week";
import TrainingDetails from "./pages/training-details/training-details";
import Notification from "./pages/notification/notification";
import Message from "./pages/message/message";

// Global styles
const style: any = require("./app.css");

// Import Domtastic
const $: any = require("domtastic");

// Fastclick
const fastClick: any = require("fastclick");

let store: (any) = createStore(addHeroReducer);

/*
 * Import --------------------
 */

class App extends React.Component<any, {}> {
    public checkIfOnTop: any;
    public checkIfSrolled: any;
    public lastScrollTop: number = 0;

    constructor() {
      super();

      this.checkIfOnTop = (): any => {
          if (document.body.scrollTop > 0) {
              if (!$("body").hasClass("is-not-on-top")) {
                  $("body").addClass("is-not-on-top");
                  $("body").removeClass("is-on-top");
              }
          } else {
              if (!$("body").hasClass("is-on-top")) {
                  $("body").addClass("is-on-top");
                  $("body").removeClass("is-not-on-top");
              }
          }
      };

      // Check scroll position
      this.checkIfSrolled = (): any => {
        if (document.body.scrollTop < this.lastScrollTop || document.body.scrollTop === 0) {
            if (!$("body").hasClass("is-scrolled-up")) {
                $("body").addClass("is-scrolled-up");
                $("body").removeClass("is-scrolled-down");
            }
        } else {
            if (!$("body").hasClass("is-scrolled-down")) {
                $("body").removeClass("is-scrolled-up");
                $("body").addClass("is-scrolled-down");
            }
        }

        this.checkIfOnTop();
        this.lastScrollTop = document.body.scrollTop;
      };
    }

    render(): React.ReactElement<{}> {
      return (
          <div className={`app ${style.app}`}>
            {this.props.children}
            <div id="overlay" />
          </div>
      );
    }
    
    componentWillUnmount(): any {
      $(document).off("scroll", this.checkIfSrolled);
    }

    componentDidMount(): any {
      this.checkIfOnTop();
      $(document).on("scroll", this.checkIfSrolled);

      // Enable fastClick
      fastClick.attach(document.body);
    }
};

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="welcome" component={Welcome} />
          <Route path="home" component={Home} />
          <Route path="wall" component={Wall} />
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
          <Route path="meal-plan" component={MealPlan} />
          <Route path="meal-details" component={MealDetails} />
          <Route path="forgot-password" component={ForgotPassword} />
          <Route path="activity-screen" component={ActivityScreen} />
          <Route path="training-week" component={TrainingWeek} />
          <Route path="training-details" component={TrainingDetails} />
          <Route path="shopping-list" component={ShoppingList} />
          <Route path="training-schedule" component={TrainingSchedule} />
          <Route path="training-log" component={TrainingLog} />
          <Route path="notification" component={Notification} />
          <Route path="message" component={Message} />
        </Route>
      </Router>
    </Provider>
  ), 
  document.getElementById("main")
);
