import React, { Component } from "react";

class Breadcrumb extends Component {
    getPath = () => {
        if (this.props.path) {
            let path = this.props.path;

            path = path.slice(0, path.length - 1);

            return path.map((p) => (
                <li key={p.name}><a href={p.href}>{p.name}</a></li>
            ));
        }
    };

    render = () => {
        return (
            <nav className="breadcrumb">
                <ol>
                    <li><a href="/">Home</a></li>
                    {this.getPath()}
                    {this.props.path.length
                        ? <li>{this.props.path[this.props.path.length - 1].name}</li>
                        : null
                    }
                </ol>
            </nav>
        );
    };
}

export default Breadcrumb;
