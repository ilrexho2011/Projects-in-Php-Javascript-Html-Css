import React from 'react'
import { Product_data } from '@/Data/DataProduct'
import ProductData from '@/Component/ProductData/ProductData'
import style from '../styles/index.module.css'

const index = () => {
  return (
    <div className={style.shop}>
            <br />
            <br />
            <br />
            <br />
            <br />

            <center><h1 className={style.shop_title}>Shopping Items</h1></center>
            <br />
            <br />

            <div className={style.shop_item}>
                {
                    Product_data.map((data) => {

                        return (
                            <div>
                                <ProductData data={data} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default index