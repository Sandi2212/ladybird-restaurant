import React from 'react'
import './Footer.css'
import MailChimp from '../Mailchimp/MailChimp'

const Footer = props => {
  return (
    <div className="Footer">
      <div className="footer__links">
        <ul className="footer__nav">
          <li className="footer__nav-item"><a href="#home">Home</a></li>
          <li className="footer__nav-item"><a href="#menus">Menus</a></li>
          <li className="footer__nav-item"><a href="http://www.derossiglobal.com/products/giftcertificate/buy" target="_blank" rel="noopener noreferrer">Gift Cards</a></li>
          <li className="footer__nav-item"><a href="#events">Events</a></li>
          <li className="footer__nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <MailChimp />
    </div>
  )
}

export default Footer