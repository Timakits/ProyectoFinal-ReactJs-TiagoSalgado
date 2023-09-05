import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const addItem= (item, counter) => {
if(!isInCart(item.id)){
    setCart(prev => [...prev, {...item, counter}])
    
}else{
    alert("el producto ya fue agregado") 
}
}
console.log(cart)
const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart([])
}



  return (
    <CartContext.Provider value={{clearCart, addItem, removeItem, cart}}>{children}</CartContext.Provider>
  )
}

