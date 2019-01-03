import React, { Component } from "react";

import { connect } from "react-redux";
import { onToggleNavigation, onToggleCart } from "../../actions/UiActions";

import Search from "./Search";
import Cart from "../cart/Cart";

class Header extends Component {
    constructor (props){
        super(props);

        this.state = {
            toggleSearch: false
        }
    }

    toggleSearch = () => {
        const toggleSearch = !this.state.toggleSearch;
        this.setState({toggleSearch});
    };

    toggleNavigation = () => {
        this.props.onToggleNavigation(true);
    };

    toggleCart = (e) => {
        e.preventDefault();
        this.props.onToggleCart(!this.props.toggleCart);
    };

    countCart = () => {
        return this.props.order.products.length
            ? <span>{this.props.order.products.length}</span>
            : null;
    };

    render = () => {
        return (
            <header>
                <div className="header-top">
                    <div>
                        Welcome, Shop Online Now!
                        <a href="#">Sing In</a>
                        or
                        <a href="#">Create an Account</a>
                    </div>
                </div>
                <div className="header-main">
                    <a
                        className="icon-hamburger"
                        onClick={this.toggleNavigation}
                    />

                    <a href="/" className="logo">
                        <img src="/static/images/logo.jpg" alt="" />
                    </a>

                    <div className="search-container">
                        <Search />
                    </div>
                    <a
                        className="icon-search"
                        onClick={this.toggleSearch}
                    />

                    <div id="icon-cart" className="cart-container">
                        <a href="/shop">
                            {this.countCart()}
                        </a>
                        <a onClick={this.toggleCart}>
                            {this.countCart()}
                        </a>
                    </div>

                    <a className="sing-in" href="#">Sing In</a>

                </div>
                <div className={`header-bottom ${this.state.toggleSearch ? "expanded" : "" }`}>
                    <Search />
                </div>
                <Cart toggle={this.toggleCart} />
            </header>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        toggleNavigation: state.ui.toggleNavigation,
        toggleCart: state.ui.toggleCart,

        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onToggleNavigation: (expanded) => dispatch(onToggleNavigation(expanded)),
        onToggleCart: (expanded) => dispatch(onToggleCart(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
