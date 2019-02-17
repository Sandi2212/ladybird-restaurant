import React from "react";
import './About.css'

const About = props => {
  return (
    <div className="About">
      <h1 className="about_heading">ABOUT</h1>
      <img className="about_img" src="/assets/Ravi/derossi.png" alt="Ravi DeRossi" />
      <div className="Ravi-DeRossi ">
        <h2 className="Ravi-DeRossi_title">Ravi DeRossi</h2>
        <p className="Ravi-DeRossi_restaur">Restauranteur</p>
        </div>
        <div className="Ravi-DeRossi_travel">
          <p>Ravi traveled around the world as an artist and painter, 
          before returning to his native New York City and taking 
          the nightlife world by storm. He created a mini-empire of 
          world renowned cocktail lounges and bars, <p1>including Death 
          &amp; Company, The Bourgeois Pig,Proletariat, Cienfuegos, 
          Mayahuel, Amor y Amargo</p1> and <p1>124 Rabbit Club.</p1> 
          </p>
         <p>
          He then established himself as a rising star on the culinary 
          scene with the acclaimed seafood hotspots <p1>Desnuda</p1> and 
          <p1>Bergen Hill. Mother of Pearl</p1>brings together these two 
          worlds and is his first hybrid restaurant and cocktail bar. 
          Avant garden, an upscale vegan restaurant. A lifelong 
          animal lover, ravi has launched non-profit beast, which will 
          hold fundraising parties to improve animal lives.
        </p>

        </div>
    
      
    </div>
  );
};

export default About;
