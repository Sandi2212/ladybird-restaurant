import React from 'react'
import './Events.css'

const Events = props => {
  return (
    <div className="Events">
      <h2 className="events__heading">Events</h2>
      <div className="events__section">
        <h4 className="events__section-heading">VALENTINE’S DAY</h4>
        <p className="events__section-content">6-Course Tasting Menu<br />
          $150 Per Couple<br />
          Plus Tax & Gratuity<br />
          <span className="events__strong">6:30PM &amp; 9:00 PM</span>
        </p>
      </div>
    </div>
  )
}

export default Events