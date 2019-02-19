import React, { Component } from "react";
import ReserveButton from "../ReserveButton/ReserveButton";
import "./Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            menuIsVisible: false
        };
    }

    componentDidMount() {
        let { offsetHeight } = this.refs.header;
        this.props.getOffsetHeight(offsetHeight);
    }

    toggleMenuVisible = () => {
        this.setState(prev => {
            return { menuIsVisible: !prev.menuIsVisible };
        });
    };

    handleMenuClick = e => {
        if (window.innerWidth <= 500) {
            this.setState({ menuIsVisible: false });
        }
    };

    render() {
        const mobileLayout = window.innerWidth <= 500;
        return (
            <header ref="header">
                <div className="header__logo-wrapper">
                    <a href="#home">
                        <img
                            src="/assets/logo-trans/logo-trans-header.png"
                            alt="logo"
                        />
                    </a>
                    <div className="header__menu-button">
                        {this.state.menuIsVisible ? (
                            <i
                                className="fas fa-times fa-2x"
                                onClick={this.toggleMenuVisible}
                            />
                        ) : (
                            <i
                                className="fas fa-bars fa-2x"
                                onClick={this.toggleMenuVisible}
                            />
                        )}
                    </div>
                </div>

                <nav
                    className={`header__nav-bar ${
                        this.state.menuIsVisible && mobileLayout
                            ? "header__nav-bar--visible"
                            : ""
                    }`}
                >
                    <ul onClick={this.handleMenuClick}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="nav-bar__menus">
                            <a href="#menus">Menus</a>
                        </li>
                        <li>
                            <a href="#events">Events</a>
                        </li>
                        <li className="nav-bar__gift-cards">
                            <a
                                href="http://www.derossiglobal.com/products/giftcertificate/buy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Gift Cards
                            </a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__reserve-wrapper">
                    <ReserveButton text="Book Now" />
                </div>
            </header>
        );
    }
}

export default Header;
