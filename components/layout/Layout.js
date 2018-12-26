import React, { Component } from "react";

import { connect } from "react-redux";

import Head from "next/head";

import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

class Layout extends Component {
    render = () => {
        return (
            <div className={`main-container ${
                    this.props.toggleNavigation
                    ? "expanded"
                    : ""
                }`
            }>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no" />
                    <link rel="icon" href="/static/images/favicon.png" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                </Head>
                <Header />
                <Navigation asPath={this.props.asPath} />
                <Breadcrumb path={this.props.breadcrumbPath} />
                <main>{this.props.children}</main>
                <Footer />
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        toggleNavigation: state.ui.toggleNavigation,
        breadcrumbPath: state.ui.breadcrumbPath
    };
}

export default connect(
    mapStateToProps
)(Layout);
