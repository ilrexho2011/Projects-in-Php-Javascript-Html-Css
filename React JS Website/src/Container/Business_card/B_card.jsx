import React from 'react'

import './B_card.css'
const B_card = ({data}) => {
 
  return (
    <div className="b_card_main">
    <div className='b_card'>
      <div className="b_card_img">
        <img src={data.b_card_img}alt="img" />
        </div>
        <div className="b_card_text">
            <h3>{data.b_card_heading}</h3>
            <p>{data.b_card_para}</p>
        </div>
    </div>
    </div>
  )
}

export default B_card