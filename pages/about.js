import React, { Component } from "react";

import { connect } from "react-redux";
import { onSetBreadcrumb } from "../actions/UiActions";

class About extends Component {
    static async getInitialProps({ query }) {
        return { category: query.category };
    }

    componentWillMount = () => {
        this.props.onSetBreadcrumb([{ name: "About Us" }]);
    };

    render = () => {
        return <section className="section-spacing">
                <h1 className="section-title">About us</h1>
                <article>
                    <p className="lead">
                        <u>
                            Cuticura's origin extends back over four
                            generations to 1865.
                        </u>{" "}
                        Cuticura was among the{" "}
                        <span className="font-weight-bold">
                            very first medicated soaps to be sold
                            commercially in the United States.
                        </span>{" "}
                        Medicated Cuticura Ointment,
                        with its unique active ingredients, was
                        developed and sold as a treatment for minor skin
                        discomfort, infections, and wounds in the
                        pre-antiseptic era. This powerful heritage in
                        medicated treatment products has followed the
                        brand into the new millennium, with loyal
                        consumers seeking their tried-and-true treatment
                        for skin care.
                    </p>
                    <div className="bg-light row my-5">
                        <p className="col my-4">
                            <h5 className="font-weight-bold mb-2">Brand Heritage</h5>
                            <p className="lead">Cuticura Labs is proud to announce the re-birth of Cuticura, the 153-year-old brand with an extremely loyal customer base and equity in the Medicated Bacterial specialty skin care category. Cuticura's origin extends back over four generations to 1865. Cuticura was among the very first medicated soaps to be sold commercially in North America.</p>
                            <blockquote className="mb-0 ml-5 my-2 font-italic">
                                "Cuticura Soap and Cuticura ointment, the great Skin Cure, have become the world's favorites for preserving, purifying, and beautifying the skin, for winter irritations, eczemas, rashes, frost-bites, redness, and roughness, for softening rough and sore hands, and itching tender feet, for itching and chaffing, antiseptic cleansing, as well as for all the purposes of the toilet, bath and nursery. Guaranteed absolutely pure."
                            </blockquote>
                        </p>
                    </div>
                    <p className="mb-2 lead">
                        To satisfy the multitude of consumer requests
                        and suggestions, Cuticura has recently undergone
                        an innovative line expansion, introducing new
                        Cuticura bath and body products, treatment
                        lotions, creams, and the essential "Soapless
                        Hand Sanitizer".
                    </p>
                    <p className="lead">
                        Cuticura, encouraged by its new avant-guard
                        manufacturing and warehousing facilities, is now
                        pleased to offer its line of products via the
                        Internet. We wish you a pleasant shopping
                        experience.
                    </p>
                </article>
            </section>;
    };
}

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onSetBreadcrumb: (path) => dispatch(onSetBreadcrumb(path))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(About);
