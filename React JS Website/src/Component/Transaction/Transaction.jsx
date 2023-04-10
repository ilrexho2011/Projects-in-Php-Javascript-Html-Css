import React from 'react'
import './Transaction.css'
// import { bill,apple,google } from '../../assets'
const Transaction = ({trans_data,children}) => {
  console.log(trans_data)
  return (
    <div className='transaction_main'>
      <div className="transaction">
        <div className="transaction_img">
          <img src={trans_data.main_img} alt="img" />
        </div>
        <div className="transaction_text">
          <h1>{trans_data.main_heading}</h1>
          <p>{trans_data.main_para}</p>
          <div className="transaction_text_logo">
            <img src={trans_data.logo_1} alt="" />
            <img src={trans_data.logo_2} alt="" />
            {children}

          </div>
        </div>
      </div>

    </div>
  )
}

export default Transaction