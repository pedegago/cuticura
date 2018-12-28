import React, { Component } from "react";

import { connect } from "react-redux";
import { onToggleCart } from "../../actions/UiActions";
import { onUpdateCart } from "../../actions/DataActions";

import { scrollToTop } from "../../utils/Utils";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: "",
            added: false,
            submited: false,
            diff: false
        };
    }

    static getDerivedStateFromProps = (nextProps, nextState) => {
        const products = nextProps.cart;
        const product = products.find((p) => p.id == nextProps.id);

        if (product){
            let quantity = product.quantity;

            if(product.quantity != nextState.quantity){
                if (nextState.diff){
                    quantity = nextState.quantity;
                }
            }

            return {
                quantity,
                added: true,
                submited: true
            };
        } else {
            const added = nextState.added;

            return {
                quantity: added ? "" : nextState.quantity,
                added: false,
                submited: added ? false : nextState.submited
            };
        }
    };

    validate = (quantity) => {
        return /^[1-9]([0-9]+)?$/g.test(quantity);
    };

    getProduct = (quantity) => {
        return {
            id: this.props.id,
            quantity: parseInt(quantity)
        };
    };

    setQuantity = (e) => {
        const quantity = e.target.value;

        let diff = true;

        if (this.validate(quantity)) {
            if (this.state.added) {
                const products = this.props.cart;
                const i = products.findIndex(
                    (p) => p.id == this.props.id
                );

                diff = false;

                this.props.onUpdateCart([
                    ...products.slice(0, i),
                    this.getProduct(quantity),
                    ...products.slice(i + 1)
                ]);
            }
        }

        this.setState({
            quantity,
            diff
        });
    };

    addToCart = () => {
        const quantity = this.state.quantity;

        this.setState({
            submited: true
        });

        if (this.validate(quantity)) {
            if (!this.state.added) {
                this.props.onUpdateCart([
                    ...this.props.cart,
                    this.getProduct(quantity)
                ]);

                this.props.onToggleCart(true);

                scrollToTop();

                this.setState({
                    added: true,
                    diff: false
                });
            }
        }
    };

    render = () => {
        return (
            <div className="counter">
                <input
                    className={
                        this.state.submited && !this.validate(this.state.quantity)
                        ? "is-invalid"
                        : ""
                    }
                    min="1"
                    onChange={this.setQuantity}
                    placeholder="Qty"
                    type="number"
                    value={this.state.quantity}
                />
                {!this.props.hideAddButton
                    && <button onClick={this.addToCart}>Add to Cart</button>
                }
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        cart: state.cart.products
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateCart: (products) => dispatch(onUpdateCart(products)),
        onToggleCart: (expanded) => dispatch(onToggleCart(expanded))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
