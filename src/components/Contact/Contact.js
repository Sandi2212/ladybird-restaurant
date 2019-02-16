import React from "react"
import './Contact.css'
import ReserveButton from '../ReserveButton/ReserveButton'


    const Contact = () =>{
     return(
        <div className="Contact">
        <h2 className="contact__heading">CONTACT</h2>
        <div className="Rectangle"></div>
        <div className="contact__section">
          <h4 className="contact__section-heading">Location</h4>
          <p className="Contacts__section-content"> 
          <a className="contacts__link" href="https://goo.gl/maps/VUyxW7ZqUK22" target="_blank" rel="noopener noreferrer"> 111 East 7th street</a><br />
            New York, NY 10009<br />
            (Between 1st Ave and Ave A) 
            <br />
            <br />
          </p>
        </div>
        <div className="contacts__section">
          <h4 className="contacts__section-heading">Hours</h4>
          <span className="contacts__strong">Sunday - Thursday</span>
          <br />
          <p className="Contacts__section-content">5:00 pm - 1:00 am</p>
          <br />
          <span className="contacts__strong">Friday &amp; Saturday</span><br />
          <p className="Contacts__section-content"> 5:00 pm - 2:00 am</p>
          <br />
          <h4 className="contacts__section-heading">Phone NO.</h4>
          <p className="Contacts__section-content">917.261.5524</p>
        </div>
        <div className="contact__section">
          <h4 className="contact__section-heading">EMAIL</h4>
          
          <div className="contact__section-content">
          <span className="contacts__strong"> For General Info</span>
          <p className="Contacts__section-content">info@ladybirdny.com</p> 
          <br/>
          </div>
          <div className="contact__section-content">
          <span className="contacts__strong"> For Private Events Info</span>
          <p className="Contacts__section-content">events@ladybirdny.com</p> 
          <br/>
       
          </div>
          <div className="contact__section-content">
          <span className="contacts__strong"> For Press Inquiries</span>
          <p className="Contacts__section-content">press@ladybirdny.com</p>
          <br/>
          </div>
        </div>
        <ReserveButton />
      </div>
        )
    
    }
    
    export default Contact
