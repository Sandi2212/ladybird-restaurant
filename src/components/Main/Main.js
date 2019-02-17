import React from 'react'
import './Main.css'
import Home from '../Home/Home';
import Blurb from '../Blurb/Blurb';
import About from '../About/About';
import Events from '../Events/Events'
import Menus from '../Menus/Menus';
import Contact from '../Contact/Contact'

const Main = props => {
  return (
    <div className="Main">
      <div id="home" className="page-section">
        <Home />
        <div className="sticky-side">
          <img src="/assets/ladybird-interior/ladybird-interior-picture.png" alt="Ladybird interior" />
        </div>
      </div>
      <div className="page-section">
        <Blurb />
        <div className="sticky-side">
          <img src="/assets/kale-salad/kalesalad.png" alt="Kale Salad" />
        </div>
      </div>
      <div id="menus" className="page-section">
        <div className="sticky-side">
        <img src="/assets/ladybird-napkin/ladybird-napkin.png" alt="ladybird napkin" />
        </div>
         <Menus /> 
      </div>
      <div id="about" className="page-section">
        <About /> 
        <div className="sticky-side">
        <img src="assets/ladybird-door/ladybird-door.png" alt="ladybird door"  />
        </div>
      </div>
      <div className="full-screen-image">
      </div>
      <div id="events" className="page-section">
        <div className="sticky-side">
          <img src="/assets/cocktail/ladybird-cocktail-2.png" alt="Cocktail" />
        </div>
        <Events />
      </div>
      <div id="contact" className="page-section">
        <Contact /> 
        <div className="sticky-side-door">
          <img src="/assets/ladybird-interior/ladybird-interior.png" alt="Ladybird Interior" />

        </div>
      </div>
      
    </div>

  )
}

export default Main