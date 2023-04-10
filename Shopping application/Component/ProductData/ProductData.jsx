// import React from 'react'
import style from '../../styles/ProductData.module.css'
import Image from 'next/image'
import { Context } from '@/Context/Context'
import { useContext } from 'react'


const ProductData = ({data}) => {


const { items,additem}=useContext(Context)  

// button function 
const item_data=(value)=>{

additem(value.id)

}




    const {id,productImage,productName,price}=data
    
  return (
    <div className={style.productdata}>
        <div className={style.productdata_img}>
            <Image src={productImage} alt="img" width={260}/>
            <center><h2>{productName}</h2></center>
            <div className={style.productdata_btn}>
            <h3>$ {price}</h3>
            
            <button style={{backgroundColor:items[id]===0?'white':'lightGreen'}} onClick={()=>{item_data(data)}} >{items[id]===0?'Add to Cart':`Added   (${items[id]})`} </button>
                
            </div>

        </div>

    </div>
  )
}

export default ProductData