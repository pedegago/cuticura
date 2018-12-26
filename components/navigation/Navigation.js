import React, { Component } from "react";

import { connect } from "react-redux";
import { onToggleNavigation } from "../../actions/UiActions";

import NavigationTab from "./NavigationTab";
import NavigationMenu from "./NavigationMenu";

class Navigation extends Component {
    constructor (props) {
        super(props);

        this.state = {
            tabActive: "menuTab"
        };

        this.menuLinks = [
            { href: "/antibacterial-soap", label: "Antibacterial Soap" },
            { href: "/bar-soaps", label: "Bar Soaps" },
            { href: "/medicated-ointment", label: "Medicated Ointment" },
            { href: "/body-lotion", label: "Body Lotion" }
        ];
        
        this.accountLinks = [
            { label: "Welcome, Shop Online Now!" },
            { href: "/", label: "Sing In" },
            { href: "/", label: "Create an Account" }
        ];
    }

    onChangeTab = (e) => {
        const id = e.target.id;

        if (id){
            this.setState({
                tabActive: id
            });
        }
    };

    toggleNavigation = () => {
        this.props.onToggleNavigation(false);
    };

    render = () => {
        const expanded = this.props.expanded;
        const isMenuTab = this.state.tabActive == "menuTab";

        return (
            <div className={`navigation ${expanded ? "expanded" : ""}`}>
                <div className="navigation-main">
                    <div onClick={this.onChangeTab}>
                        <NavigationTab
                            id="menuTab"
                            label="Menu"
                            isActive={isMenuTab}
                        />
                        <NavigationTab
                            id="accountTab"
                            label="Account"
                            isActive={!isMenuTab}
                        />
                    </div>
                    <nav>
                        <NavigationMenu
                            isMain
                            isActive={isMenuTab}
                            links={this.menuLinks}
                            asPath={this.props.asPath}
                        />
                        <NavigationMenu
                            isActive={!isMenuTab}
                            links={this.accountLinks}
                        />
                    </nav>
                </div>
                <div
                    className="navigation-toggle"
                    onClick={this.toggleNavigation}
                />
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        expanded: state.ui.toggleNavigation
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onToggleNavigation: (expanded) => dispatch(onToggleNavigation(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
