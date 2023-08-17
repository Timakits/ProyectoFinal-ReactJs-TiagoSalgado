import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles.css"
import CardProduct from '../../components/cardProduct'
import Stock from "../../components/listProduct/Products.json"

const DetailPage = () => {
    const [product, setProduct] = useState(null); 

    let { id } = useParams();

    useEffect(() => {
        const selectedProduct = Stock.find(item => id === id);

        if (selectedProduct) {
            setTimeout(() => {
                setProduct(selectedProduct);
            }, 1000);
        } else {
            console.log("Producto no encontrado");
        }
    }, [id]);

    return (
        <div className='DetailProduct'>
            {product ? <CardProduct data={product} /> : <p>Cargando...</p>}
        </div>
    );
}

export default DetailPage;
