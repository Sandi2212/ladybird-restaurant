import React from 'react'
import './Footer.css'
import MailChimp from '../Mailchimp/MailChimp'

const Footer = props => {
  return (
    <div className="Footer">
      <div className="footer__links">
        <ul className="footer__nav">
          <li className="footer__nav-item"><a href="#">Home</a></li>
          <li className="footer__nav-item"><a href="#">Menus</a></li>
          <li className="footer__nav-item"><a href="#">Gift Cards</a></li>
          <li className="footer__nav-item"><a href="#">Events</a></li>
          <li className="footer__nav-item"><a href="#">Contact</a></li>
        </ul>
      </div>
      <MailChimp />
    </div>
  )
}

export default Footer