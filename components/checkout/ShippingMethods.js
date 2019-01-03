import React, { Component } from "react";

import { FormGroup, Input, Label } from "reactstrap";

class ShippingMethods extends Component {
    selectOption = (e) => {
        if (e.target.tagName != "INPUT"){
            e.target.parentNode.querySelector("input").click();
        } else {
            //DO SOMETHING HERE WHEN CHANGE THE SELECTED RADIO
        }
    };

    render = () => {
        return (
            <table className="shipping-methods">
                <tbody>
                    <tr onClick={this.selectOption}>
                        <td>
                            <Input type="radio" name="shipping-method" />
                        </td>
                        <th>$0.00</th>
                        <td>Free Ground</td>
                        <td>Free Shipping</td>
                    </tr>
                    <tr onClick={this.selectOption}>
                        <td>
                            <Input type="radio" name="shipping-method" />
                        </td>
                        <th>$0.00</th>
                        <td>Free Ground</td>
                        <td>Free Shipping</td>
                    </tr>
                </tbody>
            </table>
        );
    };
}

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default ShippingMethods;
