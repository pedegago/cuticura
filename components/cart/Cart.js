import React, { Component } from "react";

import { connect } from "react-redux";
import { onToggleCart } from "../../actions/UiActions";

import { Popover, PopoverBody } from 'reactstrap';

import CartHeader from "./CartHeader";
import CartBody from "./CartBody";

class Cart extends Component {
    render = () => {
        const hasProducts = !!this.props.cart.length;

        return (
            <Popover
                className="shopping-cart"
                placement="bottom"
                isOpen={this.props.toggleCart}
                target="icon-cart"
                toggle={this.props.toggle}
            >
                <a className="icon-close" onClick={() => this.props.onToggleCart(false)}/>

                {hasProducts && <CartHeader />}
                {hasProducts && <CartBody />}

                <PopoverBody className={`cart-footer ${hasProducts ? "border-top" : ""}`}>
                    {hasProducts
                        ? <a href="#">View and Edit Cart</a>
                        : <strong>You have no items in your shopping cart.</strong>
                    }
                </PopoverBody>
            </Popover>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        toggleCart: state.ui.toggleCart,
        cart: state.cart.products
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onToggleCart: (expanded) => dispatch(onToggleCart(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
