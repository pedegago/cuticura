import React, { Component } from "react";

class ShopSummary extends Component {
    render = () => {
        return (
            <aside>
                <h2>
                    Summary
                </h2>

                <ul className="sumary-numbers">
                    <li>
                        Subtotal
                        <span>$51.29</span>
                    </li>
                    <li>
                        Tax
                        <span>$1.00</span>
                    </li>
                    <li className="grand-total">
                        Order Total
                        <span>$52.29</span>
                    </li>
                </ul>

                <a href="/checkout" className="checkout-btn">Proceed to Checkout</a>
                <a href="#" className="multi-address">
                    Check Out With Multiple Addresses
                </a>
            </aside>
        );
    };
}

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default ShopSummary;
