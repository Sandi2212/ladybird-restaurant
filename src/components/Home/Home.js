import React from 'react'
import './Home.css'

const Home = props => {
  return (
    <div className="Home">
      <img className="home__logo" src="/assets/logo-trans/logo-trans.png" alt="logo" />
      <img className="home__name" src="/assets/ladybird.svg" alt="Ladybird" />
      <div className="home__address">
        <a href="https://goo.gl/maps/VUyxW7ZqUK22" target="_blank" rel="noopener noreferrer">
          111 East 7th Street<br/> 
          New York, NY 10009
        </a>
      </div>
      <div className="home__hours">
        <h3 className="hours__heading">HOURS</h3>
        <span className="home__strong">Sunday - Thursday</span> 5:00pm - 1:00am<br/>
        <span className="home__strong">Friday & Saturday</span> 5:00pm - 2:00am
      </div>
      <div className="home__phone">
        <span className="home__strong">Phone No.</span> 917.261.5524
      </div>
      <button className="home__button">Book Reservation</button>
    </div>
  )
}

export default Home