import React from 'react'
import './Copyright.css'
import { twitter, instagram, facebook, linkedin } from '../../assets'

const Copyright = () => {
    return (
        <div className='copyright'>
            <p>@ Copyright Act 2023 Sourabh Kumar</p>
            <div className="social_media">
                <img src={twitter} alt="social" />
                <img src={instagram} alt="social" />
                <img src={facebook} alt="social" />
                <img src={linkedin} alt="social" />
            </div>
        </div>
    )
}

export default Copyright