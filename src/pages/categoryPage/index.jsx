import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../../components/cardProduct'


import Stock from "../../components/listProduct/Products.json"

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    let {brandCategory} = useParams();

    
    let filteredBrand = products.filter( (marca) => {
        marca.brand === brandCategory
    })
    useEffect( () => {
        setTimeout( () => {
            setProducts(Stock)
        }, 1000)
    }, []);
    
    
    return (
        <div>
            {filteredBrand.map( (marca) => {
                return(
                    <div>
                        
                        <CardProduct data ={marca}/>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryPage