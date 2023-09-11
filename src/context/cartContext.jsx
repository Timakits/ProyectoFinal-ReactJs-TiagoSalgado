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
    Swal.fire('El producto ya fue agregado') 
}
}

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

const total = () => {
return cart.reduce( (total, product) => total + (product.price * product.counter), 0)
}




  return (
    <CartContext.Provider value={{clearCart, addItem, removeItem, isInCart ,cart, total}}>{children}</CartContext.Provider>
  )
}

