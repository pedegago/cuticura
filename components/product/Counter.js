import React, { Component } from "react";

import { connect } from "react-redux";
import { onUpdateCart } from "../../actions/DataActions";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: "",
            added: false,
            submited: !!this.props.hideAddButton
        };
    }

    static getDerivedStateFromProps = (nextProps, nextState) => {
        const products = nextProps.cart;
        const product = products.find((p) => p.id == nextProps.id);

        if (product){
            return {
                quantity: product.quantity,
                added: true,
                submited: true
            };
        } else {
            const added = nextState.added;

            return {
                quantity: added ? "" : nextState.quantity,
                added: false,
                submited: added ? false : nextState.submited,
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

        if (this.validate(quantity)) {
            if (this.state.added) {
                const products = this.props.cart;
                const i = products.findIndex(
                    (p) => p.id == this.props.id
                );
    
                this.props.onUpdateCart([
                    ...products.slice(0, i),
                    this.getProduct(quantity),
                    ...products.slice(i + 1)
                ]);
            }
        }
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

                this.setState({
                    added: true
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
        onUpdateCart: (products) => dispatch(onUpdateCart(products))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);