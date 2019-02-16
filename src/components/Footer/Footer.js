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
        <ul className="footer__social">
          <a className="footer__social-link" href="https://twitter.com/ladybird_nyc?lang=en" target="_blank" rel="noopener noreferrer">
            <li className="footer__social-item"><i className="fab fa-twitter"></i></li>
          </a>
          <a className="footer__social-link" href="http://www.facebook.com/ladybirdnyc" target="_blank" rel="noopener noreferrer">
            <li className="footer__social-item"><i className="fab fa-facebook-f"></i></li>
          </a>
          <a className="footer__social-link" href="http://instagram.com/ladybird_nyc" target="_blank" rel="noopener noreferrer">
            <li className="footer__social-item"><i className="fab fa-instagram"></i></li>
          </a>
          <a className="footer__social-link" href="https://www.yelp.com/biz/ladybird-new-york" target="_blank" rel="noopener noreferrer">
            <li className="footer__social-item"><i className="fab fa-yelp"></i></li>
          </a>
        </ul>
      </div>
      <MailChimp />
    </div>
  )
}

export default Footer