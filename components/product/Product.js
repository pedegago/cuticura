import React, { Component } from "react";

import Counter from "./Counter";

import { toDetails } from "../../utils/Utils";

class Product extends Component {
    render = () => {
        const href = toDetails(this.props.product.name);

        return (
            <figure>
                <a href={href} className="card-header">
                    <img src={this.props.product.image} alt={this.props.product.name} />
                </a>
                <figcaption>
                    <a href={href}>
                        <h2>{this.props.product.name}</h2>
                    </a>
                    <p className="small">Per Unit:</p>
                    <p className="product-price">{`Now Only $${this.props.product.price}`}</p>
                    <p className="small small-plus">Plus Applicable Taxes</p>

                    <Counter id={this.props.product.id} />

                    <p className="label-red">On Sale!</p>
                    <p className="label-blue">In Stock</p>
                </figcaption>
            </figure>
        );
    };
}

export default Product;