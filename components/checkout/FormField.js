import React, { Component } from "react";

import { FormGroup, FormFeedback, FormText } from "reactstrap";

class FormField extends Component {
    render = () => {
        return (
            <FormGroup>
                <label className={this.props.required ? "required" : ""}>
                    {this.props.label}
                </label>
                {this.props.children}
                <FormFeedback>
                    {this.props.message}
                </FormFeedback>
                {this.props.helpText &&
                    <FormText tag="p">
                        {this.props.helpText}
                    </FormText>
                }
            </FormGroup>
        );
    };
}

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default FormField;
