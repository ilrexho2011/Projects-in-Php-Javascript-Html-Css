import React from 'react'
import style from '../../styles/nav.module.css'
import { Context } from '@/Context/Context'
import { useContext } from 'react'
import { Product_data } from '@/Data/DataProduct'
import Link from 'next/link'

const Nav = () => {
    const { items } = useContext(Context)
    console.log(items)
  
    let no_of_items = 0

  return (
    <div>
        <div className={style.nav}>
        <h3 className={style.logo}>Shoping.com</h3>
        <Link href={'/'} className={style.links}>Shop</Link>

        <Link href={'/cart'} className={style.links}>
          <h2><i className="bi bi-cart3 "></i> 
          {
            Product_data.map((item) => {
              if (items[item.id] !== 0) {
                no_of_items = no_of_items + 1
                return (
                  <div className={style.indicator} ><p>{no_of_items}</p></div>
                )
              }
            })
          }
          </h2>
        </Link>

      </div>
    </div>
  )
}

export default Nav