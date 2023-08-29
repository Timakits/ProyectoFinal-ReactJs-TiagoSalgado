import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles.css"
//COMPONENETS
import CardProduct from '../../components/cardProduct'
import CardDetail from '../../components/cardDetail'

import Stock from "../Productos/Products.json"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null); 

    let { Id } = useParams();

    useEffect(() => {
        const selectedProduct = Stock.find(item => item.id == Id);
        if (selectedProduct) {
            setTimeout(() => {
                setProduct(selectedProduct);
            }, 1000);
        } else {
            console.log("Producto no encontrado");
        }
    }, [Id]);

    return (
        <div className='DetailProduct'>
            {product ? <CardDetail data={product} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;
