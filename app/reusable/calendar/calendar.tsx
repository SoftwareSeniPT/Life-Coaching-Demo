/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// MomentJS
import * as moment from "moment"; 

// Styles
const style: any = require("./calendar.css");

// Hammerjs for touch even
const hammer: any = require("hammerjs");

/*
 * Import --------------------
 */

export class Calendar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        const {month = undefined}: any = this.props;

        this.state = {
            month: (month !== undefined ? moment(new Date(month)) : moment()),
            selected: moment().startOf("day")
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous(): any {
        const {
            month,
        }: any = this.state;

        const {changeMonthShown, dayCallback}: any = this.props;
        const moment: any = month.subtract(1, "month");
        changeMonthShown(moment.format("YYYY/MM/DD"));
        dayCallback(undefined);

        this.setState({
              month: moment
        });
    }

    next(): any {
        const {
            month,
        }: any = this.state;

        const {changeMonthShown, dayCallback}: any = this.props;
        const moment: any = month.add(1, "month");
        changeMonthShown(moment.format("YYYY/MM/DD"));
        dayCallback(undefined);

        this.setState({
            month: moment
        });
    }

    select(day: any): any {
        this.setState({
            selected: day.date,
            month: day.date.clone()
        });
    }

    renderWeeks(): any {
        let weeks: any = [];
        let done: boolean = false;
        const w: any = "w";
        let date: any = this.state.month.clone().startOf("month").add(w - 1).day("Sunday");
        let count: number = 0;
        let monthIndex: number = date.month();

        const {
            selected,
            month,
        }: any = this.state;

        const {availableDate, dayCallback}: any = this.props;

        while (!done) {
            weeks.push(
                <Week 
                    key={date}
                    date={date.clone()}
                    month={month}
                    select={(day: any) => this.select(day) }
                    selected={selected}
                    availableDate={availableDate}
                    dayCallback={(id: number) => { dayCallback(id);}}
                />
            );

            date.add(1, "w");

            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    };

    renderMonthLabel(): any {
        const {month}: any = this.state;

        return <span className={style.monthLabel}>{month.format("MMMM YYYY") }</span>;
    }

    render(): any {
        const {showHeader = true}: any = this.props;
        return (
            <div className={style.calendar} id="calendar">
                <header className={style.header}>
                    {showHeader ?
                        <div className={`${style.monthDisplay} row`}>
                            <i className="arrow fa fa-angle-left" onClick={this.previous}>Next</i>
                                {this.renderMonthLabel() }
                            <i className="arrow fa fa-angle-right" onClick={this.next}>Prev</i>
                        </div>
                    : null}
                    <DayNames />
                </header>
                {this.renderWeeks()}
            </div>
        );
    }

    componentDidMount(): any {

      // Swipe left  
      hammer(document.getElementById("calendar")).on("swipeleft", (ev: any): any => {
        this.next();  
      });

      // Swipe right
      hammer(document.getElementById("calendar")).on("swiperight", (ev: any): any => {
        this.previous();
      });
    }
}

class DayNames extends React.Component<any, any> {
    render(): any {
        return (
            <div className={`${style.row} ${style.dayNames}`}>
                <span className={style.day}>Sun</span>
                <span className={style.day}>Mon</span>
                <span className={style.day}>Tue</span>
                <span className={style.day}>Wed</span>
                <span className={style.day}>Thu</span>
                <span className={style.day}>Fri</span>
                <span className={style.day}>Sat</span>
            </div>
        );
    }
}

class Week extends React.Component<any, any> {
    render(): any {
        let days: any = [];
        let {
            date,
        }: any = this.props;

        const {
            month,
            selected,
            select,
            availableDate,
            dayCallback
        }: any = this.props;

        for (var i: number = 0; i < 7; i++) {
            let day: any = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };

            days.push(
                <Day
                    key={i}
                    strDate={date}
                    available={availableDate.indexOf(date.unix() * 1000) !== -1 
                        ? { available: true, id: availableDate.indexOf(date.unix() * 1000)} 
                        : {available: false, id: null} }
                    day={day}
                    selected={selected}
                    dayCallback={(id: number) => dayCallback(id)}
                    select={select}/>
            );

            date = date.clone();
            date.add(1, "day");
        }

        return (
            <div className={`${style.row} ${style.week}`} key={days[0]}>
                {days}
            </div>
        );
    }

}

class Day extends React.Component<any, any> {
    render(): any {
        const {
            day,
            strDate,
            available,
            dayCallback,
            day: {
                date,
                isCurrentMonth,
                isToday,
                number
            },
            select,
            selected
        }: any = this.props;

        return (
            <span
                key={date.toString() }
                data-date={strDate} 
                className={`${style.day} ${(isToday ? style.today : "")} 
                    ${(isCurrentMonth ? "" : style.differentMonth)} 
                    ${available.available ? style.available : style.notAvailable} 
                    ${(date.isSame(selected) ? style.selected : "")}`}
                onClick={() => {
                    select(day);

                    if (available.available) {
                        dayCallback(available.id);
                    } else {
                        dayCallback(undefined);
                    }                 
                } }>
                <span>{number}</span>
            </span>
        );
    }
}
