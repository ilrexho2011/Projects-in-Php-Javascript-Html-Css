import React from 'react'
import './Reviews.css'
import { quotes } from '../../assets'
const Reviews = ({ review_users }) => {
    return (
        <div className='review'>
            <img className='review_img_quotos' src={quotes} alt="img" />
            <p className='review_img_para'>{review_users.para}</p>
            <div className='review_user'>
                <img src={review_users.img} alt="" />
                <div className="review_user_text">
                    <h3>{review_users.user}</h3>
                    <p>{review_users.post}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews