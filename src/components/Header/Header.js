import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <img src="/assets/logo-trans/logo-trans-header.png" />
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
                    <a href="http://www.ladybirdny.com/reserve">
                        <button className="button">BOOK NOW</button>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
