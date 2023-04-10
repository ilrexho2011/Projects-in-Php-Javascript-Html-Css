import React from 'react'
import './Brand.css'
import { airbnb,binance,coinbase,dropbox } from '../../assets'
const Brand = () => {
  return (
    <div className='brand'>
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
    </div>
  )
}

export default Brand