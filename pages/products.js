import React, { Component } from "react";

import { connect } from "react-redux";
import { onSetBreadcrumb } from "../actions/UiActions";

import Product from "../components/product/Product";

class Products extends Component {
    static async getInitialProps({ query }) {
        return { category: query.category };
    }

    componentWillMount = () => {
        this.title = this.props.category.replace(/-/g, " ");

        this.props.onSetBreadcrumb([{ name: this.title }]);
    };

    render = () => {
        return (
            <section className="products">
                <h1>{this.title}</h1>
                <div>
                    <aside>
                        <div>
                            <h3>Compare Products</h3>
                            <div>
                                Some content here...
                            </div>
                        </div>
                        <div>
                            <h3>My Wish List</h3>
                            <div>
                                Some content here...
                            </div>
                        </div>
                    </aside>
                    <article>
                        {this.props.products.map((p) => <Product key={p.id} product={p} />)}
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
