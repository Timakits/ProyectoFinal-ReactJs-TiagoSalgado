import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css"
import { Link } from "react-router-dom";

//COMPONENT
import CardProduct from "../cardProduct";


//Json
import Stock from "./Products.json"

//https://my.api.mockaroo.com/visual_check.json?key=9c270d50

const ListProcduct = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        setTimeout( () => {
            setProducts(Stock)
        }, 1000)
    }, [products]);



    return (
    <div className="card-product">
        {products.map((product) => {
            return(
                <div key={product.id}>
                    <Link to={`/item/${product.id}`} className="Deatil-link">
                        {product ? <CardProduct data={product}/> : <p>Cargando...</p>}
                    </Link>
                </div>
            )
        })}
    </div> ) ;
}


export default ListProcduct