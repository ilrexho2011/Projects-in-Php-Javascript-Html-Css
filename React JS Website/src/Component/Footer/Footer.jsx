import React, { useEffect, useRef } from 'react'
import './Footer.css'
import { logo } from '../../assets'
const Footer = () => {

let hide=useRef(null)

useEffect(()=>{
 console.log(window.screen)   
})

  return (
    <div className='footer'> 
    <div className="footer_logo">
        <img src={logo} alt="" />
        <p>A new way to make the payments easy, </p><p>reliable and secure.</p>
    </div>
    <div className="footer_link">
        <div>
            <h3>Usefull Links</h3>
            <p>Content</p>
            <p>How it Works</p>
            <p>Create</p>
            <p>Explore</p>
            <p>Terms & Services</p>
        </div>
        <div>
            <h3>Community</h3>
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Blog</p>
            <p>Newsletters</p>
        </div>
        <div className='footer_hide' ref={hide}>
            <h3>Partner</h3>
            <p>Our Partner</p>
            <p>Become a Partner</p>
        </div>
    </div>
        
    </div>
  )
}

export default Footer