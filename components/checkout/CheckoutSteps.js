import React, { Component } from "react";

class CheckoutSteps extends Component {
    componentDidMount = () => {
        const steps = document.querySelectorAll(".checkout-steps figure");
        steps[this.props.active - 1].className = "active-step";
    };

    render = () => {
        return (
            <article className="checkout-steps">
                <figure>
                    <p><span>1</span></p>
                    <figcaption>Shipping</figcaption>
                    <hr />
                </figure>
                <figure>
                    <p><span>2</span></p>
                    <figcaption>Review & Payments</figcaption>
                    <hr />
                </figure>
            </article>
        );
    };
}

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default CheckoutSteps;
