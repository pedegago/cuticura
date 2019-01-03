import React, { Component } from "react";

import FormField from "./FormField";

import { Input } from "reactstrap";
import Select from "react-select";
import { COUNTRIES } from "../../utils/Constants";

class ShippingAddress extends Component {
    render = () => {
        return (
            <form>
                <FormField
                    required
                    label="Email Address"
                    message="Write a valid email address."
                >
                    <Input type="email" />
                </FormField>

                <FormField
                    label="Password"
                    helpText="You already have an account with us. Sign in or continue as guest."
                >
                    <Input type="password" placeholder="optional" />
                </FormField>

                <div className="login">
                    <button className="login-btn">Login</button>
                    <a href="#">Forgot Your Password?</a>
                </div>

                <FormField
                    required
                    label="First Name"
                    message="Enter your first name."
                >
                    <Input type="text" />
                </FormField>

                <FormField
                    required
                    label="Last Name"
                    message="Enter your last name."
                >
                    <Input type="text" />
                </FormField>

                <FormField label="Company">
                    <Input type="text" />
                </FormField>

                <FormField
                    required
                    label="Street Address"
                    message="Enter a valid street address."
                >
                    <Input type="text" />
                </FormField>

                <FormField
                    required
                    label="City"
                    message="Enter a valid city."
                >
                    <Input type="text" />
                </FormField>

                <FormField
                    required
                    label="State/Province"
                    message="Select a valid state or province."
                >
                    <Select options={COUNTRIES} placeholder="" />
                </FormField>

                <FormField
                    required
                    label="Zip/Postal Code"
                    message="Enter a valid zip code."
                >
                    <Input type="text" />
                </FormField>

                <FormField
                    required
                    label="Country"
                    message="Select a valid state or province."
                >
                    <Select options={COUNTRIES} placeholder="" />
                </FormField>

                <FormField
                    required
                    label="Phone Number"
                    message="Write a valid phone number."
                >
                    <Input type="text" />
                </FormField>
            </form>
        );
    };
}

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default ShippingAddress;
