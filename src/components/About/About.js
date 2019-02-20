import React from "react";
import "./About.css";

const About = props => {
    return (
        <div className="About">
            <h1 className="about_heading">ABOUT</h1>
            <img
                className="about_img"
                src="/assets/Ravi/derossi.png"
                alt="Ravi DeRossi"
            />
            <div className="Ravi-DeRossi ">
                <h2 className="Ravi-DeRossi_title">Ravi DeRossi</h2>
                <p className="Ravi-DeRossi_restaur">Restauranteur</p>
            </div>
            <div className="Ravi-DeRossi_travel">
                <p>
                    Ravi traveled around the world as an artist and painter,
                    before returning to his native New York City and taking the
                    nightlife world by storm. He created a mini-empire of world
                    renowned cocktail lounges and bars, including{" "}
                    <a
                        className="about__link"
                        href="https://www.deathandcompany.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Death &amp; Company
                    </a>
                    , The Bourgeois Pig,{" "}
                    <a
                        className="about__link"
                        href="https://www.proletariatny.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Proletariat
                    </a>
                    , Cienfuegos, Mayahuel,{" "}
                    <a
                        className="about__link"
                        href="https://www.amoryamargony.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Amor y Amargo
                    </a>{" "}
                    and 124 Rabbit Club.
                </p>
                <p>
                    He then established himself as a rising star on the culinary
                    scene with the acclaimed seafood hotspots{" "}
                    <a
                        className="about__link"
                        href="https://www.desnudawbk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Desnuda
                    </a>{" "}
                    and Bergen Hill.{" "}
                    <a
                        className="about__link"
                        href="https://www.motherofpearlnyc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mother of Pearl
                    </a>{" "}
                    brings together these two worlds and is his first hybrid
                    restaurant and cocktail bar.{" "}
                    <a
                        className="about__link"
                        href="https://www.avantgardennyc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Avant garden
                    </a>
                    , an upscale vegan restaurant. A lifelong animal lover, ravi
                    has launched non-profit beast, which will hold fundraising
                    parties to improve animal lives.
                </p>
            </div>
        </div>
    );
};

export default About;
