import React from 'react';
import './ReserveButton.css'

const ReserveButton = (props) => {
  const defaultText = window.innerWidth <= 500 ? "Reserve" : "Book Reservation"
  const buttonText = props.text || defaultText
  return (
    <div className="ReserveButton__wrapper">
      <a className="ReserveButton" href="https://resy.com/cities/ny/ladybird?gclid=EAIaIQobChMI9577u6K-4AIVGI7ICh3ljgTsEAAYASAAEgLPr_D_BwE&seats=2&date=2019-02-15" target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    </div>
  );
};

export default ReserveButton 