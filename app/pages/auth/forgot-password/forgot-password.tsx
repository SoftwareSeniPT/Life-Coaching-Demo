/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IForgotPasswordProps} from "./forgot-password.int";

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

export class ForgotPassword extends React.Component<IForgotPasswordProps, {}> {
    constructor(props: IForgotPasswordProps) {
        super(props);
    }

    componentDidMount(): any {
        if ($("body").hasClass("has-main-menu")) {
            $("body").removeClass("has-main-menu");
        }
    }

    render(): React.ReactElement<{}> {
        return (
          <div className={`login ${style.login}`}>
              <div className={style.authHeader}>
                  <div className={style.left}>
                      <div className={style.back}>
                          <i className="icon-angle-left"></i>
                          <Link to="/welcome">Back</Link>
                        </div>
                    </div>

                  <div className={style.center}>
                      <span>Log In</span>
                    </div>

                  <div className={style.right}>
                    </div>
                </div>

              <div className={style.wrapper}>
                {/* Logo */}
                <Logo position="content" />

                {/* Middle text */ }
                <div className={style.middleText}>Forgot Password?</div>

                {/* Login form */ }
                <div className={style.form}>
                    <div className={`${style.formItem} ${style.username}`}>
                        <i className={`${style.icon} icon-mail`}></i>
                        <input className={style.formControl} type="text" placeholder="Email" />
                    </div>

                    <div className={style.formButton}>
                        <button onClick={this.handleForgotPassword}>Submit</button >
                    </div>
                </div>

                {/* Login footer */ }
                <div className={style.formFooter}>
                    <div className={style.forgotPassword}>
                        <Link to="/login">Already have account?</Link>
                    </div>

                    <div className={style.registerNewAccount}>
                        <Link to="/signup">Register new account</Link>
                    </div>
                </div>
              </div>
          </div>
        );
    }

    handleForgotPassword(): any {
        hashHistory.push("/home");
    }
};
