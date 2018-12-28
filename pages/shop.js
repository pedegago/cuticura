import React, { Component } from "react";

import { connect } from "react-redux";
import { onSetBreadcrumb } from "../actions/UiActions";

import ShopItem from "../components/shop/ShopItem";
import ShopSummary from "../components/shop/ShopSummary";

class Shopping extends Component {
    componentWillMount = () => {
        this.props.onSetBreadcrumb([{ name: "Shopping Cart" }]);
    };

    render = () => {
        return <section className="shop">
                <h1>Shopping Cart</h1>
                {!this.props.cart.length
                    ? (
                        <p className="no-items">
                            You have no items in your shopping cart.
                            <span>
                                Click <a href="/">here</a> to continue shopping.
                            </span>
                        </p>
                    )
                    : (
                        <article>
                            <ShopSummary />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th className="item-counter">Qty</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                {this.props.cart.map((c) =>
                                    <ShopItem key={c.id} item={c} />
                                )}
                            </table>
                        </article>
                    )
                }
            </section>;
    };
}

export const mapStateToProps = (state) => {
    return {
        cart: state.cart.products
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onSetBreadcrumb: (path) => dispatch(onSetBreadcrumb(path))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Shopping);
