import React, { Component } from "react";

import { connect } from "react-redux";

import CartBody from "../cart/CartBody";

class OrderSummary extends Component {
    constructor (props){
        super(props);

        this.state = {
            expanded: false,
            toggleCart: false
        }
    }

    toggleCart = () => {
        this.setState({
            toggleCart: !this.state.toggleCart
        });
    };

    render = () => {
        return (
            <aside className={this.props.expanded ? "expanded" : ""}>
                <div
                    className="dark-area"
                    onClick={() => this.props.toggleCart(false)}
                />
                <div className="main-area">
                    <h3>Order Summary</h3>

                    <a
                        className="icon-close"
                        onClick={() => this.props.toggleCart(false)}
                    />

                    <a className="cart-toggler" onClick={this.toggleCart}>
                        <span>{this.props.order.products.length}</span>
                        Items in Cart
                        <i className={`icon-arrow-${this.state.toggleCart ? "up" : "down"}`} />
                    </a>

                    {this.state.toggleCart &&
                        <CartBody checkout />
                    }
                </div>
            </aside>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSummary);
