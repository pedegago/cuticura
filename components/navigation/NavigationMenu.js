import React, { Component } from "react";

class NavigationMenu extends Component {
    render = () => {
        return (
            <ul className={
                `${this.props.isMain ? "navigation-main-list" : ""} ${this.props.isActive ? "tab-active" : ""}`
            }>
                {this.props.links.map((l) => (
                    <li key={l.label}>
                        {l.href ? 
                            <a
                                className={l.href == this.props.asPath ? "link-active" : ""}
                                href={l.href}>{l.label}
                            </a>
                            : <span>{l.label}</span>
                        }
                    </li>
                ))}
            </ul>
        );
    }
}

export default NavigationMenu;
