/*
 * Import -------------------
 */ 

// React
import * as React from "react";

// Interface
import {INavMenuProps} from "./nav-menu.int";

// React router
import {Link} from "react-router";

// Styles
const style: any = require("./nav-menu.css");

// Import Domtastic
const $: any = require("domtastic");

/*
 * Import --------------------
 */

export class NavMenu extends React.Component<INavMenuProps, {}> {
    constructor(props: INavMenuProps) {
        super(props);
    }

    render(): React.ReactElement<{}> {
        const {data, visibility}: any = this.props;
        return (
            <div 
                className={`
                    nav-menu 
                    ${style.navMenu}
                    ${visibility.visible ? style.visible : style.notVisible}
                `}>

                {data.length ? 
                    <ul>
                        {data.map((menu: any, key: number) => {
                            {return (
                                <NavMenuList key={key} menu={menu}/>
                            );}
                        })}
                    </ul>
                : null}
            </div>
        );
    }

    componentDidMount(): any {
        setTimeout(
          () => {
            if (this.props.visibility.visible === true) {
              this.props.setNavmenuVisibility(true);
            }
          },
          100
        );

        $(".has-children").on("click", function(): any {
          if (!$(this).hasClass("opened")) {
            /* Remove all active state */ 
            $(".has-children")
                .removeClass("opened")
                .find("div")
                .css({ maxHeight: 0 });

            $(this).addClass("opened");     

            const maxHeight: number = $(this).find("ul")[0].offsetHeight;
            $(this).find("div").css({ maxHeight: maxHeight });
          } else {
            $(this).removeClass("opened"); 
              
            $(this).find("div").css({ maxHeight: 0 });
          }
        });
    }
};

/* Ownee components */

class NavMenuList extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {menu}: any = this.props;

        return (
            <li className={menu.submenu.length ? `has-children ${style.hasChildren}` : null}>
                <span>
                    {menu.url !== null ? <Link to={menu.url}>{menu.name}</Link> : menu.name}
                </span>

                {/* Check if it has submenu */}
                {menu.submenu.length ?
                      <div className={`
                          ${style.children} ${menu.submenuVisibility ?
                          style.submenuOpened : style.submenuClosed}`}>
                          <ul>
                            {menu.submenu.map((menu: any, key: number) => {
                              return <NavMenuListChildren key={key} menu={menu}/>;
                            }) }
                          </ul>                    
                    </div>
                : null}
            </li>
        );
    }
};

class NavMenuListChildren extends React.Component<any, {}> {
    render(): React.ReactElement<{}> {
        const {menu}: any = this.props;

        return (
            <li>
                <span>
                    {menu.url !== null ? <Link to={menu.url}>{menu.name}</Link> : menu.name}
                </span>
            </li>
        );
    }
};
