import React from 'react'
import B_card from '../../Cantainer/Business_card/B_card'
import './Business.css'
import { star,shield,send } from '../../assets/index'
import Button from '../../Cantainer/Button/Button'

let b_card_data = [
    {
        b_card_img:star,
        b_card_heading: 'Rewards',
        b_card_para:'The best credit cards offer some tantalizing combinations of promotions and prizes'
    },
    {
        b_card_img:shield,
        b_card_heading:'100% Secured',
        b_card_para:'We take proactive steps make sure your information and transactions are secure.'
    },
    {
        b_card_img:send,
        b_card_heading:'Balance Transfer',
        b_card_para:'A balance transfer credit card can save you a lot of money in interest charges.'
    }
]


const Business = () => {
    return (
        <div className='business'>
            <div className="business_text">
                <h2>You do the business, we’ll handle the money.</h2>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <Button />

            </div>
            <div className="business_cards">
                {
                    b_card_data.map((data)=>{
                        return(
                            <B_card data={data}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Business