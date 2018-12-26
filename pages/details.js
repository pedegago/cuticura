import React, { Component } from "react";

import { connect } from "react-redux";
import { onSetBreadcrumb } from "../actions/UiActions";

import Counter from "../components/product/Counter";

class Products extends Component {
    static async getInitialProps({ query }) {

        return { id: query.id };
    }

    componentWillMount = () => {
        this.product = this.props.products.find((p) => p.id == this.props.id);

        const category = this.product.category.replace(/-/g, " ");

        this.props.onSetBreadcrumb([
            { href: `/${this.product.category}`, name: category},
            { name: this.product.name}
        ]);
    };

    render = () => {
        return (
            <section className="details">
                <figure>
                    <div className="card-header">
                        <img src={this.product.image} alt={this.product.name} />
                        <p className="label-red">On Sale!</p>
                        <p className="label-blue">In Stock</p>
                    </div>
                    <figcaption>
                        <h1>{this.product.name}</h1>
                        <p className="small">Per Unit:</p>
                        <p className="product-price">{`$${this.product.price}`}</p>
                        <p className="small small-plus">Plus Applicable Taxes</p>
                        <Counter />
                        <ul>
                            {this.product.features.map((f) => <li key={f}>{f}</li>)}
                        </ul>
                    </figcaption>
                </figure>
                <p className="description">
                    {this.product.description}
                </p>
            </section>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        products: state.products.products
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
)(Products);
