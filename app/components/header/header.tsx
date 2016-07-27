/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {IHeader} from "./header.int";

// Ownee components
import {FontIcon} from "../../reusable/font-icons/font-icons";
import {Hamburger} from "../../reusable/hamburger/hamburger";
import {Logo} from "../../reusable/logo/logo";
import {NavMenu} from "./nav-menu/nav-menu";

// React Router
import {Link} from "react-router";

// Action
import {navmenuVisibility} from "../../components/header/nav-menu/nav-menu.act";

// Redux
import { connect } from "react-redux";

// Styles
const style: any = require("./header.css");

/*
 * Import --------------------
 */

class Header extends React.Component<IHeader, {}> {
    constructor(props: IHeader) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {navMenuData, navMenuVisibility, dispatch}: any = this.props;
        return (
          <div id="header" className={`${style.header} 
          ${navMenuVisibility.visible ? "navMenuOpened" : "navMenuClosed"}`}>
                <div className={`${style.wrapper} wrapper`}>
                    <div className={style.logo}>
                        {/* Logo */}
                        <Link to="/home">
                            <Logo />
                        </Link>
                    </div>
                    <div className={style.nav}>
                        <div className={style.notifIcon} >
                            {/* Unread comment icon */}
                            <Link to="/message">
                                <FontIcon icon="comment" badge="3" />
                            </Link>

                            {/* Unread notification icon */}
                            <Link to="/notification">
                                <FontIcon icon="bell" badge="5" />
                            </Link>
                        </div>

                        {/* Hamburger menu */}
                        <Hamburger 
                            setNavmenuVisibility={(visible: boolean) => dispatch(navmenuVisibility(visible)) }
                            visibility={navMenuVisibility}
                        />
                    </div>
                </div>

                {/* Navigation menu */}
                <NavMenu 
                    data={navMenuData} 
                    visibility={navMenuVisibility}
                    setNavmenuVisibility={(visible: boolean) => dispatch(navmenuVisibility(visible)) }
                />
            </div>
        );
    }
};

export default connect(function(state: any): any {
  return {
    navMenuData: state.navMenuReducer,
    navMenuVisibility: state.navMenuVisibilityReducer
  };
})(Header);
