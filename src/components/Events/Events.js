import React from 'react'
import './Events.css'
import ReserveButton from '../ReserveButton/ReserveButton'

const Events = props => {
  return (
    <div className="Events">
      <h2 className="events__heading">Events</h2>
      <div className="events__section">
        <h4 className="events__section-heading">VALENTINE’S DAY</h4>
        <p className="events__section-content">6-Course Tasting Menu<br />
          $150 Per Couple<br />
          Plus Tax & Gratuity<br />
          <span className="events__strong">6:30 PM &amp; 9:00 PM</span>
        </p>
      </div>
      <div className="events__section">
        <h4 className="events__section-heading">Non-existent Happy hour</h4>
        <p className="events__section-content">
          6-Course Tasting Menu<br />
          $150 Per Couple<br />
          Plus Tax & Gratuity<br />
          <span className="events__strong">6:30 PM &amp; 9:00 PM</span>
        </p>
      </div>
      <ReserveButton />
      <div className="events__email">
        Please email <a className="events__link" href="mailto:events@ladybirdny.com">events@ladybirdny.com</a> to reserve for large parties.
      </div>
    </div>
  )
}

export default Events