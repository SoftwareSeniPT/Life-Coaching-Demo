/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {INotificationProps, INotificationState} from "./notification.int";

// Ownee components
import Header from "../../components/header/header";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {MainMenu} from "../../components/main-menu/main-menu";

// Action
import {openRemoveAction, closeRemoveAction, removeItem} from "./notification.act";

// Styles
const style: any = require("./notification.css");

// Import Domtastic
const $: any = require("domtastic");

// Redux
import { connect } from "react-redux";

// Hammerjs for touch even
const hammer: any = require("hammerjs");

/*
 * Import --------------------
 */

class Notification extends React.Component<INotificationProps, INotificationState> {
    constructor(props: INotificationProps) {
        super(props);
    }

    componentDidMount(): any {
        const {dispatch}: any = this.props;

        scroll(0, 0);
        $(".notif-item").each((item: any, key: number) => {
            hammer(item).on("swipeleft", (ev: any): any => {
              dispatch(openRemoveAction(key));
            });

            hammer(item).on("swiperight", (ev: any): any => {
              dispatch(closeRemoveAction(key));
            });
        });
    }

    render(): React.ReactElement<{}> {
        const {notificationData, dispatch}: any = this.props;

        return (
            <div className={`notification ${style.notification}`}>
                <Header />

                {/* Training log hero */}
                <div className={style.notificationHero}>
                    <div className={style.title}>Notification</div>
                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />
                </div>

                {/* Notification item */}
                {notificationData.notifications.length ?
                  notificationData.notifications.map((notif: any, key: number) => {
                    return (<div className={`
                      notif-item 
                      ${style.notificationItem} 
                      ${style["notif" + notif.type]} 
                      ${notif.read ? style.notifRead : style.notifUnread} 
                      ${notif.removeButtonOpened ? style.removeButtonOpened : null}
                      `} key={key}>
                              <div className={style.notifContentItem}>
                                  <NotifPic imageUrl={notif.profilePic} />
                                  <NotifText type={notif.type} user={notif.name}  text={notif.post} />
                                  <NotifAction type={notif.type} callback="" />
                              </div>
                              <NotifRemove callback={() => dispatch(removeItem(key)) } />
                            </div>);
                    })
                : null}

                {/* Main menu */}
                <MainMenu /> 
            </div>
        );
    }
};

/* Notification profile pic */
export class NotifPic extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {imageUrl}: any = this.props;    
    return (
      <div className={style.notifPic}>
          <div style={{backgroundImage: `url(${imageUrl})`}} />
      </div>
    );
  }
};

/* Notification text */
export class NotifText extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {type, user, text}: any = this.props;    
    return (
      <div className={style.notifText}>
          <span className={style.userName}>{user + " "}</span> 

          {type === "follow" ? "started following you" : null}
          {type === "postLike" ? "like your post" : null}
          {type === "commentLike" ? "like your comment" : null}
          {type === "sharePost" ? "share your post" : null}
          {type === "post" ? "create a post" : null}
          {type === "comment" ? "comment on your post" : null}

          {text !== undefined ? 
              <div className={style.notifTextPreview}>
                  {text}
              </div>
          : null}
      </div>
    );
  }
};

/* Notification action */
export class NotifAction extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {type}: any = this.props;    
    if (type === "follow") {
      return (
        <div className={style.notifAction}>
            <i className="icon-ios-plus-outline" />
        </div>
      );
    } else {
        return null;
    }
  }
};

/* Notification action */
export class NotifRemove extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
      const {callback}: any = this.props;
      return (
        <div className={style.notifRemove} onClick={callback}>
            <i className="icon-trash-o" />
        </div>
      );
  }
};

export default connect(function(state: any): any {
  return {
    notificationData: state.notificationReducer
  };
})(Notification);
