import React, { Component } from "react";
import ReserveButton from "../ReserveButton/ReserveButton";
import "./Header.css";

class Header extends Component {
    componentDidMount() {
        let { offsetHeight } = this.refs.header;
        this.props.getOffsetHeight(offsetHeight);
    }

    render() {
        return (
            <header ref="header">
                <div>
                    <a href="#home">
                        <img
                            src="/assets/logo-trans/logo-trans-header.png"
                            alt="logo"
                        />
                    </a>
                </div>

                <nav className="nav-bar">
                    <ul>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#menus">MENUS</a>
                        </li>
                        <li>
                            <a href="#events">EVENTS</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ReserveButton />
                </div>
            </header>
        );
    }
}

export default Header;
