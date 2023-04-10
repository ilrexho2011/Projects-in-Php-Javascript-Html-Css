import React, { useRef } from 'react'
import logo from '../../assets/logo.svg'
import './Nav.css'
import {Link} from 'react-scroll'


const Nav = () => {

    const phone_ref = useRef(null)

    let nav_value = false
    const phone_tab = () => {
        if (nav_value === false) {
            phone_ref.current.style.display = 'flex';
            console.log('show')

            nav_value = true
        }
        else {
            phone_ref.current.style.display = 'none';
            console.log('hide')

            nav_value = false


        }


    }
    return (
        <div className='nav'>
            <div className="nav_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav_links sidebar " ref={phone_ref}>

            <p><Link to='header'  onClick={phone_tab}>Home</Link></p>
            <p><Link to='business'  onClick={phone_tab}>About Us</Link></p>
            <p><Link to='services'  onClick={phone_tab}>Features</Link></p>
            <p><Link to='testonomial_main'  onClick={phone_tab}>Solutions</Link></p>

            </div>
            <div className="nav_phone" >
                <i class="bi bi-list" onClick={phone_tab}></i>
            </div>

        </div>
    )
}

export default Nav