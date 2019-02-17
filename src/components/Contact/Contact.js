import React from "react"
import './Contact.css'
import ReserveButton from '../ReserveButton/ReserveButton'

const Contact = () => {
  return(
    <div className="Contact">
      <div><h2 className="contact__heading">CONTACT</h2></div>
      <div className="contact__rectangle">&nbsp;</div>
      <div className="contact__section">
        <h4 className="contact__section-heading">Location</h4>
        <p className="contact__section-content"> 
          <a className="contact__link" href="https://goo.gl/maps/VUyxW7ZqUK22" target="_blank" rel="noopener noreferrer">
            111 East 7th street<br />
            New York, NY 10009<br />
            (Between 1st Ave and Ave A) 
          </a>
        </p>
      </div>
      <div className="contact__section">
        <h4 className="contact__section-heading">Hours</h4>
        <span className="contact__strong">Sunday - Thursday</span>
        <p className="contact__section-content">5:00 pm - 1:00 am</p>
        <span className="contact__strong">Friday &amp; Saturday</span>
        <p className="contact__section-content"> 5:00 pm - 2:00 am</p>
      </div>
      <div className="contact__section">
        <h4 className="contact__section-heading">Phone NO.</h4>
        <p className="contact__section-content">917.261.5524</p>
      </div>
      <div className="contact__section contact__section--final">
        <h4 className="contact__section-heading">EMAIL</h4>
        <p className="contact__section-content">
          <span className="contact__strong"> For General Info</span><br/>
          <a className="contact__link" href="mailto:info@ladybirdny.com">info@ladybirdny.com</a>
        </p>
        <p className="contact__section-content">
          <span className="contact__strong"> For Private Events Info</span><br/>
          <a className="contact__link" href="mailto:events@ladybirdny.com">events@ladybirdny.com</a>
        </p>
        <p className="contact__section-content">
          <span className="contact__strong"> For Press Inquiries</span><br/>
          <a className="contact__link" href="mailto:press@ladybirdny.com">press@ladybirdny.com</a>
        </p>
      </div>
      <ReserveButton />
    </div>
  )
}

export default Contact
