import React, { useEffect, useState } from 'react'
import CardProduct from '../../components/cardProduct'
import { useParams } from 'react-router-dom'

import Stock from "../../components/listProduct/Products.json"

const DetailPage = () => {
    const [product, setProduct] = useState
    let {id} = useParams()

    console.log(id)
    useEffect( () => {
        setTimeout( () => {
            setProduct(Stock)
        }, 1000)
    }, [id]);

return (
    <div>DetailPage</div>
)
}

export default DetailPage