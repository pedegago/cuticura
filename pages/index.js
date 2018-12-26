import React, { Component } from "react";

class Index extends Component {
    componentDidMount = () => {
        document.querySelector(".breadcrumb").remove();
    };

    render = () => {
        return (
            <section className="banner">
                <a href="#" className="banner-main">
                    <figure />
                    <p>
                        Antibacterial Hand Soap & Moisturizing Body Lotion
                        <span className="title">The New Cuticura Products!</span>
                        <button>Shop Now</button>
                    </p>
                </a>
                <article>
                    <a href="#" className="banner-secondary-left">
                        <figure />
                        <p>
                            <span className="title-strong">Savings!</span>
                            <span className="text-margin">Buy 6 Pack & Save</span>
                            <span>Deep Cleaning</span>
                            <span>Bar Soaps</span>
                            <span className="more-link">Shop Soaps<i /></span>
                        </p>
                    </a>
                    <a href="#" className="banner-secondary-right">
                        <figure>
                            <img src="/static/images/img_products_current.png" alt="" />
                        </figure>
                        <p>
                            <span className="title">Mix and Match</span>
                            <span>6 Pack Discount on All Cuticura Products!</span>
                            <span>FREE Shipping with Purchases of $50+</span>
                            <span className="small">(Excludes Canada, Porto Rico, Alaska, and Hawaii)</span>
                            <span className="more-link">Shop Now<i /></span>
                        </p>
                    </a>
                </article>
            </section>
        );
    };
}

export default Index;
