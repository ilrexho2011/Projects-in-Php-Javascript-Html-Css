import React from 'react'
import './App.css'
import { Nav, Header, Business, Transaction, Teastonomial, Services, Footer, Brand, Popularity, Copyright } from './Component'

import Button from './Cantainer/Button/Button'

// creating data for transaction 
import { bill, apple, google, card } from './assets'

let trans_data = [{
  main_img: bill,
  main_heading: 'Easily control your billing & invoicing.',
  main_para: 'Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.',
  logo_1: apple,
  logo_2: google
},
{
  main_img: card,
  main_heading: 'Find a better card deal in few easy steps.',
  main_para: 'Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.',

}
]

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <br />
      <Popularity />
      <br />
      <Business />
      <Transaction trans_data={trans_data[0]} />
      <div className='card'>
        <Transaction trans_data={trans_data[1]}>
          <Button />
        </Transaction>
        <Teastonomial />
        <br />
        <Brand />
        <br />

        <Services />
        <br />
        <Footer />
        <br />
        <hr />
        <Copyright />
      </div>
    </div>
  )
}

export default App