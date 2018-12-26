import React, { Component } from "react";

class Footer extends Component {
    onSubscription = () => {
        console.log("subscription action...");
    };

    render = () => {
        return (
            <footer>
                <div>
                    <div className="subscription-control">
                        <i />
                        <input type="email" placeholder="Enter your email address" />
                        <button onClick={this.onSubscription}>Subscribe</button>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/about">Company Heritage</a></li>
                            <li><a href="/antibacterial-soap">Antibacterial Soap</a></li>
                            <li><a href="/bar-soaps">Bar Soaps</a></li>
                            <li><a href="/medicated-ointment">Medicated Ointment</a></li>
                            <li><a href="/body-lotion">Body Lotion</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Privacy and Cookie Policy</a></li>
                            <li><a href="#">Advanced Search</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                <p>
                    <span>Copyright © 2018 Cuticura Labs, Corp. All rights reserved.</span>
                </p>
            </footer>
        );
    };
}

export default Footer;
