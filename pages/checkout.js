import React, { Component } from "react";

import { connect } from "react-redux";
import { onSetBreadcrumb } from "../actions/UiActions";

import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ShippingAddress from "../components/checkout/ShippingAddress";
import OrderSummary from "../components/checkout/OrderSummary";
import ShippingMethods from "../components/checkout/ShippingMethods";

class Shopping extends Component {
    constructor (props){
        super(props);

        this.state = {
            expanded: false
        };
    }

    toggleCart = (expanded) => {
        this.setState({
            expanded
        });
    };

    componentDidMount = () => {
        document.querySelector("header").className = "header-checkout";
        document.querySelector(".navigation").remove();
        document.querySelector(".breadcrumb").remove();
        document.querySelector(".footer-main").remove();
    };

    render = () => {
        return (
            <section className="checkout">
                    <article>
                        <div className="d-md-none">
                            <CheckoutHeader toggleCart={this.toggleCart} />
                        </div>
                        <div className="d-none d-md-block">
                            <CheckoutSteps active={1} />
                        </div>

                        <div className="row">
                            <div className="col-md-7 col-lg-8">
                                <h2>Shipping Address</h2>
                                <ShippingAddress />

                                <h2>Shipping Methods</h2>
                                <ShippingMethods />

                                <div className="d-flex">
                                    <a href="#" className="next-btn">Next</a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4">
                                <OrderSummary
                                    expanded={this.state.expanded}
                                    toggleCart={this.toggleCart}
                                />
                            </div>
                        </div>
                    </article>
            </section>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        order: state.order
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
