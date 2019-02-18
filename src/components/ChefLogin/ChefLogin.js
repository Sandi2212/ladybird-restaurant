import React, { Component } from "react";
import "./ChefLogin.css";

class ChefLogin extends Component {
    constructor() {
        super();
        this.state = {
            statekey: ""
        };
    }

    render() {
        return (
            <div
                className="oc-chef-login"
                style={{ paddingTop: `${this.props.headerOffset}px` }}
            >
                <form className="oc-chef-login-form">
                    <a href="/auth/google">Login</a>
                </form>
            </div>
        );
    }
}

export default ChefLogin;
