/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IMessageProps, IMessageState} from "./message.int";

// Ownee components
import Header from "../../components/header/header";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";
import {MainMenu} from "../../components/main-menu/main-menu";

// Action
import {openRemoveAction, closeRemoveAction, removeItem} from "./message.act";

// Styles
const style: any = require("./message.css");

// Import Domtastic
const $: any = require("domtastic");

// Redux
import { connect } from "react-redux";

// Hammerjs for touch even
const hammer: any = require("hammerjs");

/*
 * Import --------------------
 */

class Message extends React.Component<IMessageProps, IMessageState> {
    constructor(props: IMessageProps) {
        super(props);
    }

    componentDidMount(): any {
        const {dispatch}: any = this.props;

        scroll(0, 0);
        $(".message-item").each((item: any, key: number) => {
            hammer(item).on("swipeleft", (ev: any): any => {
              dispatch(openRemoveAction(key));
            });

            hammer(item).on("swiperight", (ev: any): any => {
              dispatch(closeRemoveAction(key));
            });
        });
    }

    render(): React.ReactElement<{}> {
        const {messageData, dispatch}: any = this.props;

        return (
            <div className={`message ${style.message}`}>
                <Header />

                {/* Training log hero */}
                <div className={style.messageHero}>
                    <div className={style.title}>Message</div>
                    {/* Blurred background */}
                    <BlurredBG imageUrl="./assets/images/bg.jpg" />
                </div>

                {/* Message item */}
                {messageData.messages.length ?
                  messageData.messages.map((message: any, key: number) => {
                    return (<div className={`
                      message-item 
                      ${style.messageItem} 
                      ${style["message" + message.type]} 
                      ${message.read ? style.messageRead : style.messageUnread} 
                      ${message.removeButtonOpened ? style.removeButtonOpened : null}
                      `} key={key}>
                              <div className={style.messageContentItem}>
                                  <NotifPic imageUrl={message.profilePic} />
                                  <NotifText 
                                    subject={message.subject} 
                                    name={message.name} 
                                    text={message.text} 
                                    time={message.time} />
                                  <NotifAction type={message.type} callback="" />
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

/* Message profile pic */
export class NotifPic extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {imageUrl}: any = this.props;    
    return (
      <div className={style.messagePic}>
          <div style={{backgroundImage: `url(${imageUrl})`}} />
      </div>
    );
  }
};

/* Message text */
export class NotifText extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {subject, name, text, time}: any = this.props;    
    return (
      <div className={style.messageText}>
          <div className={style.name}>{name}</div>
          <div className={style.subject}>{subject}</div>
          <div className={style.text}>{text}</div>
          <div className={style.time}>{time}</div>
      </div>
    );
  }
};

/* Message action */
export class NotifAction extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {type}: any = this.props;    
    if (type === "follow") {
      return (
        <div className={style.messageAction}>
            <i className="icon-ios-plus-outline" />
        </div>
      );
    } else {
        return null;
    }
  }
};

/* Message action */
export class NotifRemove extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
      const {callback}: any = this.props;
      return (
        <div className={style.messageRemove} onClick={callback}>
            <i className="icon-archive" />
        </div>
      );
  }
};

export default connect(function(state: any): any {
  return {
    messageData: state.messageReducer
  };
})(Message);
