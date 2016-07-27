/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ITrainingScheduleProps, ITrainingScheduleState} from "./training-schedule.int";

// Ownee components
import Header from "../../components/header/header";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {Button} from "../../reusable/button/button";

// Action
import {selectSchedule, selectCustomEntry, unselectCustomEntry} from "./training-schedule.act";

// Styles
const style: any = require("./training-schedule.css");

// Redux
import { connect } from "react-redux";

/*
 * Import --------------------
 */

class TrainingSchedule extends React.Component<ITrainingScheduleProps, ITrainingScheduleState> {
    constructor(props: ITrainingScheduleProps) {
        super(props);
    }

    countSelected(state: any): any {
        let selected: any = 0;
        state.map((o: any) => {
            if (o.selected === 0 || o.selected === 1) {
                selected++;
            }
        });
        return selected;
    }

    render(): React.ReactElement<{}> {
        const {trainingScheduleData, dispatch}: any = this.props;
        return (
            <div className={`training-schedule ${style.trainingSchedule}`}>
                <Header />

                {/* Training schedule hero */}
                <div className={style.trainingScheduleHero}>
                    <div className={style.filter}>
                        <span className="gf">AH</span>
                    </div>

                    <div
                      className={style.title}>Training Schedule</div>
                    <div
                      className={style.subtitle}>Select Training Times</div>

                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />
                </div>  

                {/* Training schedule list */}     
                <div className={style.trainingScheduleList}>
                    {trainingScheduleData.schedule.length ?
                        trainingScheduleData.schedule.map((schedule: any, key: number) => {
                            let dailySchedule: any = [];
                            [{}, {}].map((o: any, i: number) => {
                                dailySchedule.push(<div
                                    className={style.scheduleListItem}
                                    key={`${key}${i}`}
                                    onClick={() => {
                                        dispatch(selectSchedule(key, i, schedule.selected));
                                    }
                                    }>

                                  <div className={style.listName}>{schedule.name} {i === 0 ? "AM" : "PM"}</div>
                                  <div className={style.listDate}>{schedule.date}</div>
                                  {schedule.selected === i ?
                                      <span className={`${style.circle} ${style.selected}`}>
                                          <i className="icon-checkmark" />
                                      </span>
                                      : <span className={style.circle} />}

                                    </div>);
                            });
                            return dailySchedule;
                    }) : null}
                </div> 

                {this.countSelected(trainingScheduleData.schedule) > 3 ? <TrainingScheduleWarning /> : null }

                <AddCustomTraining />  

                <CustomEntries 
                    customEntryData={trainingScheduleData.customEntries} 
                    selectCustomEntry={(id: number) => dispatch(selectCustomEntry(id))}
                    unselectCustomEntry={(id: number) => dispatch(unselectCustomEntry(id))}
                />  
            </div>
        );
    }
    
    componentDidMount(): any {
      scroll(0, 0);
    }
};

class TrainingScheduleWarning extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    return (
      <div className={style.trainingScheduleWarning}>
          <div className={style.warningIcon}>
              <i className="icon-exclamation-triangle" />
          </div>
          <div className={style.warningText}>
              You have selected too many training sessions. Choose 3 sessions from the list above.
          </div>
      </div>
    );
  }
};

class AddCustomTraining extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    return (
      <div className={style.addCustomTraining}>
          <div className={style.trainingTitle}>Add custom training item</div>
          <div className={style.selects}>
              <select
                  className="form-control"
                  defaultValue="placeholder">
                  <option value="placeholder" disabled hidden>Add an Item</option>
                  <option value="item-0">Item 0</option>
                  <option value="item-1">Item 1</option>
                  <option value="item-2">Item 2</option>
                  <option value="item-3">Item 3</option>
                  <option value="item-4">Item 4</option>
              </select>

              <select
                  className="form-control"
                  defaultValue="placeholder">
                  <option value="placeholder" disabled hidden>Select Day</option>
                  <option value="item-0">Sunday</option>
                  <option value="item-1">Monday</option>
                  <option value="item-2">Tuesday</option>
                  <option value="item-3">Wednesday</option>
                  <option value="item-4">Thursday</option>
                  <option value="item-5">Friday</option>
                  <option value="item-5">Saturday</option>
              </select>

              <select
                  className="form-control"
                  defaultValue="placeholder">
                  <option value="placeholder" disabled hidden>Select Time</option>
                  <option value="item-0">Sunday</option>
                  <option value="item-1">Monday</option>
                  <option value="item-2">Tuesday</option>
                  <option value="item-3">Wednesday</option>
                  <option value="item-4">Thursday</option>
                  <option value="item-5">Friday</option>
                  <option value="item-5">Saturday</option>
              </select>

              <select
                  className="form-control"
                  defaultValue="placeholder">
                  <option value="placeholder" disabled hidden>Select Duration</option>
                  <option value="item-0">Sunday</option>
                  <option value="item-1">Monday</option>
                  <option value="item-2">Tuesday</option>
                  <option value="item-3">Wednesday</option>
                  <option value="item-4">Thursday</option>
                  <option value="item-5">Friday</option>
                  <option value="item-5">Saturday</option>
              </select>
          </div>
      </div>
    );
  }
};

class CustomEntries extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {customEntryData, selectCustomEntry, unselectCustomEntry}: any = this.props;
        return (
            <div className={style.customEntries}>
              <div className={style.customEntriesTitle}>Custom Entries</div>
              {customEntryData.length ? customEntryData.map((entry: any, key: number) => {
                    return (
                      <div 
                          className={style.customEntriesItem} 
                          key={key}
                          onClick={() => {
                            if(entry.selected) {
                                unselectCustomEntry(key);
                            } else {
                                selectCustomEntry(key);
                            }
                          }}>

                          <span>{entry.name}, {entry.time}, {entry.duration}</span>
                          <span className={style.customEntriesIcon}>
                                {entry.selected ?
                                    <span className={`${style.circle} ${style.selected}`}>
                                        <i className="icon-checkmark" />
                                    </span>
                                    : <span className={style.circle} />
                                }
                          </span>
                      </div>
                    );
              }) : null}
              <div className={style.customEntriesButton}>
                  <Button value="Submit" color="#ff285c" />
              </div>
            </div>
        );
    }
};

export default connect(function(state: any): any {
  return {
    trainingScheduleData: state.trainingScheduleReducer
  };
})(TrainingSchedule);
