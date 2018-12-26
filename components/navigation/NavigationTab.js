import React, { Component } from "react";

class NavigationTab extends Component {
    render = () => {
        return (
            <a
                id={this.props.id}
                className={this.props.isActive ? "tab-active" : ""}
            >
                {this.props.label}
            </a>
        );
    }
}

export default NavigationTab;
