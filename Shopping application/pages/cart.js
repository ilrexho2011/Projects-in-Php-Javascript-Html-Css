

import style from '../styles/cart.module.css'
import { Product_data } from '@/Data/DataProduct'
import { Context } from '@/Context/Context'
import { useContext } from 'react'
import dog2 from '../images/dog2.png'
import Image from 'next/image'
export default function Home() {


  const { items, additem, removeitem } = useContext(Context)
  // console.log(items)





  let items_in_cart = false
  let total_price = 0

  return (
<div className={style.cart}>
      <br />
      <br />
      <center><h1 className={style.cart_title}>Your Cart Items</h1></center>
      <br />
      <br />
      <br />


      {
        Product_data.map((item) => {
          if (items[item.id] !== 0) {

            items_in_cart = true
            total_price = total_price + items[item.id] * item.price
            // console.log(total_price)
            return (
              <div className={style.cart_items}>
                <Image src={item.productImage} alt="img" width={250}/>
                <div className={style.cart_item_detail}>
                  <h1>{item.productName}</h1>
                  <h2 className={style.cart_item_price}>Price : $ {item.price}</h2>
                  <div className={style.cart_btn}>
                    <div className={style.cart_btn_remove} onClick={() => { removeitem(item.id) }}>-</div>
                    <div className={style.cart_item_number}>{items[item.id]}</div>
                    <div className={style.cart_btn_add} onClick={() => { additem(item.id) }}>+</div>

                  </div>
                  <h2 className={style.cart_item_total_price}>Total Price : $ {items[item.id] * item.price}</h2>

                </div>
              </div>
            )

          }


        })

      }


      <center><h1 className={style.nothing}>{items_in_cart === false ? <div className={style.nothing_show}><Image src={dog2} alt="" width={500}/><h2>Nothing To Show</h2></div> : <div className={style.total_price}>
        <p>Total -  $ {total_price}</p>
        <button>Proceed To Payment</button>
      </div>}</h1></center>
    </div>
  )
}
