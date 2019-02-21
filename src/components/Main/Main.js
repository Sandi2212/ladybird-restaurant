import React from "react";
import "./Main.css";
import Home from "../Home/Home";
import Blurb from "../Blurb/Blurb";
import About from "../About/About";
import Events from "../Events/Events";
import Menus from "../Menus/Menus";
import Contact from "../Contact/Contact";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

const Main = props => {
    configureAnchors({ offset: -props.headerOffset, scrollDuration: 100 });
    return (
        <div className="Main" style={{ paddingTop: `${props.headerOffset}px` }}>
            <ScrollableAnchor id="home">
                <div className="page-section">
                    <Home />
                    <div className="sticky-side">
                        <img
                            src="/assets/ladybird-interior/ladybird-interior-picture.png"
                            alt="Ladybird interior"
                        />
                    </div>
                </div>
            </ScrollableAnchor>
            <div className="page-section">
                <Blurb />
                <div className="sticky-side">
                    <img
                        src="/assets/kale-salad/kalesalad.png"
                        alt="Kale Salad"
                    />
                </div>
            </div>
            {/* <ScrollableAnchor id="menus"> */}
                <div className="page-section">
                    <div className="sticky-side sticky-side__menus">
                        <img
                            src="/assets/ladybird-napkin/ladybird-napkin.png"
                            alt="ladybird napkin"
                        />
                    </div>
                    <Menus chefLoggedOn={props.chefLoggedOn} />
                </div>
            {/* </ScrollableAnchor> */}
            <ScrollableAnchor id="about">
                <div className="page-section">
                    <About />
                    <div className="sticky-side">
                        <img
                            src="assets/ladybird-door/ladybird-door.png"
                            alt="ladybird door"
                        />
                    </div>
                </div>
            </ScrollableAnchor>
            <div className="full-screen-image" />
            <ScrollableAnchor id="events">
                <div className="page-section">
                    <div className="sticky-side sticky-side__events">
                        <img
                            src="/assets/cocktail/ladybird-cocktail-2.png"
                            alt="Cocktail"
                        />
                    </div>
                    <Events />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id="contact">
                <div className="page-section">
                    <Contact />
                    <div className="sticky-side">
                        <img
                            src="/assets/ladybird-interior/ladybird-interior.png"
                            alt="Ladybird Interior"
                        />
                    </div>
                </div>
            </ScrollableAnchor>
        </div>
    );
};

export default Main;
