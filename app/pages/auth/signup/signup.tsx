/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ISignupProps} from "./signup.int";

// Styles
const style: any = require("../auth.css");

// Ownee components
import {Logo} from "../../../reusable/logo/logo.tsx";

// React router
import { hashHistory, Link } from "react-router";

// Import Domtastic
const $: any = require("domtastic");

/*
 * Import --------------------
 */

export class Signup extends React.Component<ISignupProps, {}> {
    constructor(props: ISignupProps) {
        super(props);
    }

    componentDidMount(): any {
        if ($("body").hasClass("has-main-menu")) {
            $("body").removeClass("has-main-menu");
        }
    }

    render(): React.ReactElement<{}> {
     
        return (
            <div className={`${style.signup} ${style.login}`}>
              <div className={style.authHeader}>
                  <div className={style.left}>
                      <div className={style.back}>
                          <i className="icon-angle-left"></i>
                          <Link to="/welcome">Back</Link>
                      </div>
                  </div>

                  <div className={style.center}>
                      <span>Signup</span>
                  </div>

                  <div className={style.right}>
                  </div> 
              </div>

              <div className={style.wrapper}>
                {/* Logo */}
                <Logo position="content" />

                {/* Signup form */}
                <div className={style.form}>
                    <div 
                        className={`${style.formItem} 
                        ${style.firstName}`}>
                        <i className={`${style.icon} icon-person`}></i>
                        <input 
                            className={style.formControl} 
                            type="text" 
                            placeholder="First Name" />
                        </div>

                    <div 
                        className={`${style.formItem} 
                        ${style.lastName}`}>
                        <i className={`${style.icon} icon-person`}></i>
                        <input 
                            className={style.formControl} 
                            type="text" 
                            placeholder="Last Name" />
                        </div>

                    <div 
                        className={`${style.formItem} 
                        ${style.emailAddress}`}>
                        <i className={`${style.icon} icon-mail`}></i>
                        <input 
                            className={style.formControl} 
                            type="text" 
                            placeholder="Email" />
                        </div>

                    <div 
                        className={`${style.formItem} 
                        ${style.password}`}>
                        <i className={`${style.icon} icon-lock`}></i>
                        <input 
                            className={style.formControl} 
                            type="password" 
                            placeholder="Password" />
                    </div>
                </div>

                {/* Payment form */}
                <div className={style.paymentForm}>
                    <div className={style.paymentFormHeader}>
                        <span>Payment</span>
                        <div className={style.paymentLogo}>
                            <img src="./assets/images/paypal-logo.svg" />
                            <img src="./assets/images/stripe-logo.svg" />
                            </div>
                        </div>
                    <div className={style.tabHeader}>
                        <div 
                            className={`${style.tabHeaderItem} active`}>
                            PayPal
                        </div>
                        <div className={style.tabHeaderItem}>
                            Stripe
                        </div>
                        </div>

                    <div className={style.tabItems}>
                        <div className={style.tabItem}>
                            <div className={style.form}>
                                <div 
                                    className={`${style.formItem} 
                                    ${style.cardNumber}`}>
                                    <i className={`${style.icon} icon-card`}></i>
                                    <input 
                                        className={style.formControl} 
                                        type="text" 
                                        placeholder="Card Number" />
                                </div>

                                <div 
                                    className={`${style.formItem} 
                                    ${style.cardExpireMonth}`}>
                                    <select 
                                        className={`form-control ${style.formControl}`} 
                                        defaultValue="placeholder">
                                        <option value="placeholder" disabled hidden>MM</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>

                                <div 
                                    className={`${style.formItem} 
                                    ${style.cardExpireYear}`}>
                                    <select 
                                        className={`form-control ${style.formControl}`}
                                        defaultValue="placeholder">
                                        <option value="placeholder" disabled hidden>YYYY</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                    </select>
                                </div>

                                <div 
                                    className={`${style.formItem} 
                                    ${style.cardCvc}`}>
                                    <input 
                                        className={style.formControl} 
                                        type="text" 
                                        placeholder="CVC" />
                                </div>

                                <div className={style.formButton}>
                                    <button onClick={this.handleLogin}>
                                        <i className="icon-lock"></i>
                                        <span>Proceed</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login footer */}
                <div className={style.formFooter}>
                    <div className={style.forgotPassword}>
                        <Link to="/login">Already have account?</Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    handleLogin(): any {
        hashHistory.push("/home");
    }
};
