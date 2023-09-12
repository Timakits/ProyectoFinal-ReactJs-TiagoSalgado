import React from 'react'
import { useState } from 'react'

//Components
import CheckoutForm from '../checkoutForm'

//context
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext) 


    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                comprador: {name, phone, email},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(lentes => lentes.id)

            const lentesRef = collection(db, 'VisualCheck-Products')

            const lentesAddedFromFirestore = await getDocs(query(lentesRef, where(documentId(),'in',ids)))

            const {docs} = lentesAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const lentesAddedToCart = cart.find(lentes => lentes.id === doc.id)
                const lentesCantidad = lentesAddedToCart?.cantidad

                if (stockDb >= lentesCantidad) {
                    batch.update(doc.ref,{stock:stockDb- lentesCantidad})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length !== 0) {
                await batch.commit()

                const orderRef = collection(db,'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error ('Disculpa, nos hemos quedado sin stock de algunos productos.')
            }
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return 
        <h1>Su orden esta siendo generada, espere un momento.</h1>
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout