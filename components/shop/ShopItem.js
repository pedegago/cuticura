import React, { Component } from "react";

import { connect } from "react-redux";
import { onUpdateCart } from "../../actions/DataActions";

import Counter from "../product/Counter";

import { toDetails } from "../../utils/Utils";

class ShopItem extends Component {
    componentWillMount = () => {
        for (let i = 0; i < this.props.products.length; i++){
            const p = this.props.products[i];

            if (p.id == this.props.item.id) {
                this.product = p;
                break;
            }
        }

        this.href = toDetails(this.product.name);
    };

    onRemove = () => {
        const newCart = this.props.cart.filter(
            (c) => c.id != this.props.item.id
        );

        this.props.onUpdateCart(newCart);
    };

    render = () => {
        return (
            <tbody>
                <tr className="item-body">
                    <td className="item-name">
                        <a href={this.href}>
                            <img
                                src={this.product.image}
                                alt={this.product.name}
                            />
                            <span>{this.product.name}</span>
                        </a>
                    </td>
                    <td className="item-price">${this.product.price}</td>

                    <td className="item-counter">
                        <Counter id={this.product.id} hideAddButton />
                    </td>

                    <td className="item-subtotal">${(this.product.price * this.props.item.quantity).toFixed(2)}</td>
                </tr>
                <tr className="item-actions">
                    <td colSpan="4">
                        <a className="icon-trash" onClick={this.onRemove} />
                    </td>
                </tr>
            </tbody>
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
)(ShopItem);
