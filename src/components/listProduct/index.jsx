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
    }, []);



    return (
    <div className="card-product">
        {products.map((product) => {
            return(
                <div key={product.id}>
                    <Link to={`/Productos/Detail/${product.id}`} className="Deatil-link">
                        <CardProduct data={product}/>
                    </Link>
                </div>
            )
        })}
    </div> ) ;
}


export default ListProcduct