import React from 'react'
import './Header.css'

import header_img from '../../assets/robot.png'
import header_circle from '../../assets/arrow-up.svg'
const Header = () => {
  return (
    <div className='header'>
      <div className="header_text">
        <p className='header_text_para'> 20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
        <h1>The Next</h1>
        <h1 className='heading_color_text text-gradient '>Generation</h1>
        <h1>Payment Method.</h1>
        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.</p>
          <div className="header_circle">
        <p>Got Started</p>
      </div>
      </div>
      <div className="header_img">
        <img src={header_img} alt="img" />
      </div>
      
    </div>
  )
}

export default Header