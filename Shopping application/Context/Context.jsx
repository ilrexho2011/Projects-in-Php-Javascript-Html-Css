// import { findAllByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { Product_data } from "@/Data/DataProduct";


// hear we creat a context warehouse 
const Context = createContext(null)


// this function just creat a empty object 
const initial_cart = () => {
    let cart = {}
    for (let i = 1; i < Product_data.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}


// hear we define a provider for our context api 
const ContextProvider = ({ children }) => {

    const [items, setitems] = useState(initial_cart())


    // adding item to cart 
    const additem = (id) => {

        setitems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
       
    }

    // removing item from cart 
    const removeitem = (id) => {

        setitems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
        

    }


    // for (let i = 1; i < items.length + 1; i++) {
    //     if (items[i] === 0) {  
    //         console.log(false)    
    //         setitemINCart(false)
    //     }
    //     else {    
    //         setitemINCart(true)
    //         setitemINCart(true)
    //     }
    // }


   








    const passingValue = { items, additem, removeitem }



    return (
        <Context.Provider value={passingValue}>{children}</Context.Provider>
    )
}

export { Context, ContextProvider }