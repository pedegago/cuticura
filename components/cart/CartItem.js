import React, { Component } from "react";

import { connect } from "react-redux";
import { onUpdateCart } from "../../actions/DataActions";

import Counter from "../product/Counter";

import { toDetails } from "../../utils/Utils";

class CartItem extends Component {
    componentWillMount = () => {
        for (let i = 0; i < this.props.products.length; i++){
            const p = this.props.products[i];

            if (p.id == this.props.id) {
                this.product = p;
                break;
            }
        }

        this.href = toDetails(this.product.name);
    };

    onRemove = () => {
        const newCart = this.props.cart.filter(
            (c) => c.id != this.props.id
        );

        this.props.onUpdateCart(newCart);
    };

    render = () => {
        return (
            <li>
                <a href={this.href}>
                    <img
                        src={this.product.image}
                        alt={this.product.name}
                    />
                </a>
                <div>
                    <a href={this.href} className="product-name">{this.product.name}</a>
                    <p className="product-price">${this.product.price}</p>
                    Qty:

                    <Counter id={this.product.id} hideAddButton />

                    {/* <a className="icon-pencil" /> */}
                    <a className="icon-trash" onClick={this.onRemove} />
                </div>
            </li>
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
    return {
        onUpdateCart: (products) => dispatch(onUpdateCart(products))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);
