import React, { Component } from "react";

import { connect } from "react-redux";

class CheckoutHeader extends Component {
    render = () => {
        return (
            <div className="chackout-header">
                <p className="grand-total">
                    Estimated Total
                    <span>$00.00</span>
                </p>
                <a onClick={() => this.props.toggleCart(true)}>
                    <span>{this.props.order.products.length}</span>
                </a>
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckoutHeader);
