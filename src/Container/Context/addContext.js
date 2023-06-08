import { createContext, useContext } from "react";
import { useState } from "react";
let initial_data = {
    cart: [],
    total: 0
}
const CartContext = createContext(initial_data);
export const CartProvider = ({children}) => {
    let value = {
        cart: [],
        total: 0
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
export const CartData = ()=>{
    return useContext(CartContext);
}