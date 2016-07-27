/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {ILoginProps} from "./login.int";

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

export class Login extends React.Component<ILoginProps, {}> {
    constructor(props: ILoginProps) {
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

                {/* Login with facebook button */}
                <div className={style.loginWithFacebook}>
                    <i className={`${style.icon} icon-facebook-square`}></i>
                    <span>Login with Facebook</span>
                </div>

                {/* Middle text */ }
                <div className={style.middleText}>Or</div>

                {/* Login form */ }
                <div className={style.form}>
                    <div className={`${style.formItem} ${style.username}`}>
                        <i className={`${style.icon} icon-person`}></i>
                        <input className={style.formControl} type="text" placeholder="Username" />
                    </div>

                    <div className={`${style.formItem} ${style.password}`}>
                        <i className={`${style.icon} icon-lock`}></i>
                        <input className={style.formControl} type="password" placeholder="Password" />
                    </div>

                    <div className={style.formButton}>
                        <button onClick={this.handleLogin}> Login</button >
                    </div>
                </div>

                {/* Login footer */ }
                <div className={style.formFooter}>
                    <div className={style.forgotPassword}>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                    <div className={style.registerNewAccount}>
                        <Link to="/signup">Register new account</Link>
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
