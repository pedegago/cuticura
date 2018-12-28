import React, { Component } from "react";

import { connect } from "react-redux";

import { PopoverHeader } from 'reactstrap';

class CartHeader extends Component {
    subTotal = () => {
        let subtotal = 0;

        this.props.cart.map((c) => {
            for (let i = 0; i < this.props.products.length; i++){
                const p = this.props.products[i];

                if (p.id == c.id) {
                    subtotal += p.price * c.quantity;
                    break;
                }
            }
        });

        return subtotal.toFixed(2);
    };

    render = () => {
        return (
            <PopoverHeader>
                <p>
                    <span>{this.props.cart.length} </span>
                    Items in Cart
                </p>
                <p className="cart-subtotal">
                    Cart Subtotal:
                    <span>${this.subTotal()}</span>
                </p>
                <button>Proceed to Checkout</button>
            </PopoverHeader>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        cart: state.cart.products
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartHeader);
