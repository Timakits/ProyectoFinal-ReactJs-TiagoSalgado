import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../../components/cardProduct'
import "./styles.css"
import Stock from "../../components/listProduct/Products.json"



const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    let {CategoryId} = useParams();

    
    let filteredBrand = products.filter( (marca) => {
        return marca.brand === CategoryId
    })
    useEffect( () => {
        setTimeout( () => {
            setProducts(Stock)
        }, 1000)
    }, []);
    
    
    return (
        <div className='card-product-category'>
            {filteredBrand.map( (marca) => {
                return(
                    <div key={marca.id}>
                        <CardProduct data = {marca}/>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryPage