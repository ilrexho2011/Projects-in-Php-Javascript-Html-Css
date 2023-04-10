import React from 'react'
import Reviews from '../../Cantainer/Reviews/Reviews'
import { people01, people02, people03 } from '../../assets'
import './Teastonomial.css' 
let review_users = [{
    img: people01,
    para: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    user: 'Herman Jensen',
    post: 'Founder & Leader'
},
{
    img: people02,
    para: `Money makes your life easier. If you're lucky to have it, you're lucky.`,
    user: 'Steve Mark',
    post: 'Founder & Leader'
},
{
    img: people03,
    para: `It is usually people in the money business, finance, and international trade that are really rich.`,
    user: 'Kenn Gallagher',
    post: 'Founder & Leader'
},
]

const Teastonomial = () => {
    return (
        <div className="testonomial_main">
            <center><h1>What people are saying about us</h1>
                <p className="testonomial_main_para">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </center>
            <div className='testonomial_main_reviews'>
                <Reviews review_users={review_users[0]} />
                <Reviews review_users={review_users[1]} />
                <Reviews review_users={review_users[2]} />


                
                

            </div>
        </div>
    )
}

export default Teastonomial