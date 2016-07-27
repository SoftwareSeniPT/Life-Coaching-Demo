/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IWelcomeProps} from "./welcome.int";

// Styles
const style: any = require("./welcome.css");

// Ownee components
import {Logo} from "../../reusable/logo/logo";
import {BlurredBG} from "../../reusable/blurred-bg/blurred-bg";

// React router
import {Link} from "react-router";

/*
 * Import --------------------
 */

export class Welcome extends React.Component<IWelcomeProps, {}> {
    constructor(props: IWelcomeProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        return (
            <div className={`welcome ${style.welcome}`}>
                <BlurredBG imageUrl="./assets/images/bg.jpg" />    

                <div className={style.wrapper}>

                    {/* Logo */}
                    <Logo position="content" />

                    {/* Login and signup button */}
                    <Link to="/signup">
                        <span className={style.button}>
                            Sign Up
                        </span>
                    </Link>

                    <Link to="/login">
                        <span className={style.button}>
                            Log In
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
};
