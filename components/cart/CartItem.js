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

        this.href = !this.props.checkout
            ? toDetails(this.product.name)
            : null;
    };

    onRemove = () => {
        const newCart = this.props.order.products.filter(
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
                    <div className="product-name-container">
                        <a href={this.href} className="product-name">{this.product.name}</a>
                        <p className="product-price">${this.product.price}</p>
                    </div>

                    Qty:
                    <Counter
                        id={this.product.id}
                        hideAddButton
                        readonly={this.props.checkout}
                    />

                    {/* <a className="icon-pencil" /> */}
                    {!this.props.checkout &&
                        <a className="icon-trash" onClick={this.onRemove} />
                    }
                </div>
            </li>
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
    return {
        onUpdateCart: (products) => dispatch(onUpdateCart(products))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);
