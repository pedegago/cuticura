import React, { Component } from "react";

import { connect } from "react-redux";
import { onSetBreadcrumb } from "../actions/UiActions";

import Product from "../components/product/Product";

import { ALL_CATEGORIES } from "../utils/Constants";
import { beautifyCategory } from "../utils/Utils";

class Products extends Component {
    static async getInitialProps({ query }) {
        return { category: query.category };
    }

    componentWillMount = () => {
        this.title = beautifyCategory(this.props.category);

        let step = [];

        if (this.props.category != ALL_CATEGORIES){
            step.push({ href: `/${ALL_CATEGORIES}`, name: beautifyCategory(ALL_CATEGORIES) });
        }

        this.props.onSetBreadcrumb([
            ...step,
            { name: this.title }
        ]);
    };

    getProducts = () => {
        const category = this.props.category;

        let products = [];

        this.props.products.map((p) => {
            if (category == ALL_CATEGORIES || category == p.category){
                products.push(<Product key={p.id} product={p} />);
            }
        });

        return products;
    };

    render = () => {
        return (
            <section className="products">
                <h1>{this.title}</h1>
                <div>
                    <aside>
                        <div>
                            <h3>Filters</h3>
                            <div>
                                Some content here...
                            </div>
                        </div>
                    </aside>
                    <article>
                        {this.getProducts()}
                    </article>
                </div>
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
