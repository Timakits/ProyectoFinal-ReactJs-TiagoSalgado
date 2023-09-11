import React from 'react'
import { useState } from 'react'

//Components
import CheckoutForm from '../checkoutForm'

//context
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')

    const {cart} = useContext(CartContext) 
    const {total} = useContext(CartContext) 

    const createOrder = async ({name, phone, email }) => {
        
        const objOrder = {
            comprador : {
                name, phone, email
            },
            items: cart,
            total: total,
        }
        setOrderId(objOrder)
        console.log(orderId)
    }
    

  return (
    <div>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
  )
}

export default Checkout